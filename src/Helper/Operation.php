<?php
/**
 * Created by PhpStorm.
 * User: irelance
 * Date: 2017/10/11
 * Time: 上午11:06
 */

namespace Irelance\Mozjs34\Helper;


use Irelance\Mozjs34\Constant;

/**
 * @method Stack popStack()
 */
trait Operation
{
    protected $branchStacks = [];
    protected $loopStacks = [];

    protected function popControlStack($type)
    {
        $type .= 'Stacks';
        return array_pop($this->$type);
    }

    protected function pushControlStack($type, $data = [])
    {
        $type .= 'Stacks';
        array_push($this->$type, $data);
    }

    protected function gotoNextOperation($nextOperation)
    {
        while (isset($nextOperation['params']['offset'])) {
            $goto = $nextOperation['parserIndex'] + $nextOperation['params']['offset'];
            if (!isset($this->operations[$goto])) {
                return false;
            }
            $nextOperation = $this->operations[$goto];
        }
        return $nextOperation;
    }

    public function revealOperations($start, $end)
    {
        $operationKeys = array_keys($this->operations);
        $operationKeysFlip = array_flip($operationKeys);
        $start = $operationKeysFlip[$start];
        $end = $operationKeysFlip[$end];
        for ($i = $start + 1; $i < $end; $i++) {

            echo $operationKeys[$i], "\n";//todo remove this debug script

            $operation = $this->operations[$operationKeys[$i]];
            if (!$operation['isCover']) {
                $this->revealOperation($operation);
                $this->operations[$operationKeys[$i]]['isCover'] = true;
            }
        }
    }

    protected function hasOperation($start, $end, $name)
    {
        $operationKeys = array_keys($this->operations);
        $operationKeysFlip = array_flip($operationKeys);
        $start = $operationKeysFlip[$start];
        $end = $operationKeysFlip[$end];
        for ($i = $start + 1; $i < $end; $i++) {
            $operation = $this->operations[$operationKeys[$i]];
            if ($operation['name']==$name){
                return true;
            }
        }
        return false;
    }

    public function revealOperation($operation)
    {
        $op = Constant::_Opcode[$operation['id']];
        switch ($op['op']) {
            case 'JSOP_SETRVAL':
                $rVal = $this->popStack();
                if ($rVal->type == 'script') {
                    $this->writeScript($operation['parserIndex'], $rVal->value . ';');
                }
                break;
            case 'JSOP_RETRVAL':
            case 'JSOP_ENDINIT':
                break;
            case 'JSOP_RETURN':
                $val = $this->popStack();
                $this->writeScript($operation['parserIndex'], 'return ' . $val->getValue() . ';');
                break;
            //change stack
            case 'JSOP_POP':
                $this->popStack();
                break;
            case 'JSOP_DUP':
                $val = $this->popStack();
                $this->pushStack($val);
                $this->pushStack($val);
                break;
            case 'JSOP_PICK':
            case 'JSOP_SWAP':
                $number = $op['op'] == 'JSOP_PICK' ? $operation['params']['n'] : 2;
                $temp = [];
                for ($i = 0; $i < $number; $i++) {
                    $temp[$i] = $this->popStack();
                }
                for ($i = $number - 1; $i >= 0; $i--) {
                    $this->pushStack($temp[$i]);
                }
                break;
            //math
            case 'JSOP_ADD':
                $right = $this->popStack();
                $left = $this->popStack();
                $this->pushStack(['value' => $left->getValue() . '+' . $right->getValue(), 'type' => 'script']);
                break;
            //control goto
            case 'JSOP_GOTO':
                if ($operation['params']['offset'] < 0) {
                    $nextOperation = $this->gotoNextOperation($operation);
                    $nextOp = Constant::_Opcode[$nextOperation['id']];
                    if ($nextOp['op'] == 'JSOP_LOOPENTRY') {
                        $this->writeScript($operation['parserIndex'], 'continue;');
                        return;
                    }
                }
                break;
            //control branch
            case 'JSOP_IFEQ':
                $script = $this->popStack();
                //storage stack for k=x?a:b
                $stack = $this->stack;
                $this->writeScript($operation['parserIndex'], 'if(' . $script->getValue() . '){');
                $elseStart = $this->gotoNextOperation($operation);
                $this->revealOperations($operation['parserIndex'], $elseStart['parserIndex']);
                $this->writeScriptEndings($operation['parserIndex'] + $operation['params']['offset'], '}');
                $this->writeScript($elseStart['parserIndex'], 'else');
                $oldCount = count($stack);
                $newCount = count($this->stack);
                if ($oldCount != $newCount) {
                    if (($newCount - $oldCount) == 1) {
                        $this->dropScript($operation['parserIndex']);
                        $this->dropScript($elseStart['parserIndex']);
                        $this->dropScriptEndings($operation['parserIndex'] + $operation['params']['offset']);
                        $left = $this->popStack();
                        $name = $this->popStack();
                        $this->writeScript($operation['parserIndex'], $script->getValue() . '?' . $name->value . '=' . $left->getValue() . ':');
                        $this->stack = $stack;
                    } else {
                        $this->writeScript($operation['parserIndex'] - 1, '[error] JSOP_IFEQ');
                        $this->stack = $stack;
                    }
                    return;
                }
                if (isset($this->operations[$elseStart['parserIndex'] - 5]) && $this->operations[$elseStart['parserIndex'] - 5]['name'] == 'JSOP_GOTO') {
                    $goto = $this->operations[$elseStart['parserIndex'] - 5];
                    if ($goto['params']['offset'] > 0) {
                        if ($this->hasOperation($goto['parserIndex'],$goto['parserIndex'] + $goto['params']['offset'],'JSOP_LOOPENTRY')){
                            $this->writeScript($goto['parserIndex'], 'break;');
                        }else{
                            $this->writeScript($goto['parserIndex'] + $goto['params']['offset'], '}');
                        }
                    }
                }
                break;
            case 'JSOP_TABLESWITCH':
                //case type is int
                break;
            //control loop
            case 'JSOP_IFNE':
                $script = $this->popStack();
                $this->writeScript($operation['parserIndex'], 'while(' . $script->getValue() . ')');
                break;
            case 'JSOP_LOOPHEAD':
                $this->pushControlStack('loop', ['head' => $operation['parserIndex']]);
                $this->writeScript($operation['parserIndex'], '{');
                break;
            case 'JSOP_LOOPENTRY':
                $this->writeScript($operation['parserIndex'], 'JSOP_LOOPENTRY');
                break;
            //logic
            case 'JSOP_EQ':
            case 'JSOP_NE':
            case 'JSOP_LT':
            case 'JSOP_LE':
            case 'JSOP_GT':
            case 'JSOP_GE':
                $right = $this->popStack();
                $left = $this->popStack();
                $this->pushStack(['value' => $left->getValue() . $operation['image'] . $right->getValue(), 'type' => 'script']);
                break;
            //typeof
            case 'JSOP_TYPEOF':
            case 'JSOP_TYPEOFEXPR':
                $name = $this->popStack();
                $this->pushStack(['value' => 'typeof ' . $name->getValue(), 'type' => 'script']);
                break;
            //Function
            case 'JSOP_CALL':
                $_argc = $operation['params']['argc'];
                $_argv = [];
                for ($i = 0; $i < $_argc; $i++) {
                    $_argv[] = $this->popStack();
                }
                $_this = $this->popStack();
                $_callee = $this->popStack();
                if ($_callee->type == 'function') {
                    $_callee->value = '(' . $_callee->value . ')';
                }
                $this->pushStack([]);
                $write = $_callee->value . '(';
                if ($_argc) {
                    for ($i = $_argc - 1; $i >= 0; $i--) {
                        $write .= $_argv[$i]->getValue() . ',';
                    }
                    $write = substr($write, 0, strlen($write) - 1);
                }
                $write .= ');';
                $this->writeScript($operation['parserIndex'], $write);
                break;
            //Object
            case 'JSOP_NEWINIT':
                $this->pushStack(['isJson' => true, 'value' => [], 'type' => 'object']);
                break;
            case 'JSOP_INITPROP':
                $name = $this->atoms[$operation['params']['nameIndex']];
                $val = $this->popStack();
                $array = $this->popStack();
                $array->value[$name] = $val->value;
                $this->pushStack($array);
                break;
            case 'JSOP_INITELEM':
                $val = $this->popStack();
                $name = $this->popStack();
                $array = $this->popStack();
                $array->value[$name->value] = $val->value;
                $this->pushStack($array);
                break;
            //Array
            case 'JSOP_NEWARRAY':
                $this->pushStack(['isJson' => true, 'value' => [], 'type' => 'object']);
                break;
            case 'JSOP_INITELEM_ARRAY':
                $val = $this->popStack();
                $array = $this->popStack();
                $array->value[] = $val->value;
                $this->pushStack($array);
                break;
            //压入变量 ['isJson'=>false,'value'=>'xxxx']
            case 'JSOP_NAME':
            case 'JSOP_BINDNAME':
            case 'JSOP_IMPLICITTHIS':
                $this->pushStack(['value' => $this->atoms[$operation['params']['nameIndex']], 'type' => '__var__']);
                break;
            //定义变量
            case 'JSOP_DEFVAR':
                $this->writeScript($operation['parserIndex'], 'var ' . $this->atoms[$operation['params']['nameIndex']] . ';');
                break;
            case 'JSOP_DEFCONST':
                $this->writeScript($operation['parserIndex'], 'const ' . $this->atoms[$operation['params']['nameIndex']] . ';');
                break;
            case 'JSOP_DEFFUN':
                $object = $this->objects[$operation['params']['funcIndex']];
                $this->writeScript($operation['parserIndex'], 'function ' . $object['name'] . '(){ __INDEX_' . $object['context']->index . '__ }');
                break;
            //定义常量 ['isJson'=>false,'value'=>'xxxx']
            case 'JSOP_TRUE':
                $this->pushStack(['value' => 'true', 'type' => 'true']);
                break;
            case 'JSOP_FALSE':
                $this->pushStack(['value' => 'false', 'type' => 'false']);
                break;
            case 'JSOP_UNDEFINED':
                $this->pushStack(['value' => 'undefined', 'type' => 'undefined']);
                break;
            case 'JSOP_ZERO':
                $this->pushStack(['value' => 0, 'type' => 'number']);
                break;
            case 'JSOP_ONE':
                $this->pushStack(['value' => 1, 'type' => 'number']);
                break;
            case 'JSOP_INT8':
                $this->pushStack(['value' => $operation['params']['val'], 'type' => 'number']);
                break;
            case 'JSOP_INT32':
                $this->pushStack(['value' => $operation['params']['val'], 'type' => 'number']);
                break;
            case 'JSOP_DOUBLE':
                $this->pushStack(['value' => $this->consts[$operation['params']['constIndex']]['value'], 'type' => 'number']);
                break;
            case 'JSOP_STRING':
                $this->pushStack(['isJson' => true, 'value' => $this->atoms[$operation['params']['atomIndex']], 'type' => 'string']);
                break;
            case 'JSOP_LAMBDA':
                $object = $this->objects[$operation['params']['funcIndex']];
                $this->pushStack(['value' => 'function ' . $object['name'] . '(){ __INDEX_' . $object['context']->index . '__ }', 'type' => 'function']);
                break;
            //赋值
            case 'JSOP_SETNAME':
                $val = $this->popStack();
                $name = $this->popStack();
                $this->writeScript($operation['parserIndex'], $name->value . '=' . $val->getValue() . ';');
                $this->pushStack($val);
                break;
            case 'JSOP_SETCONST':
                $val = $this->popStack();
                $name = $this->atoms[$operation['params']['nameIndex']];
                $this->writeScript($operation['parserIndex'], $name . '=' . $val->getValue() . ';');
                $this->pushStack($val);
                break;
        }
    }
}