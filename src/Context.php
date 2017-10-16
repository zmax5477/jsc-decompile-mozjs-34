<?php

/**
 * Created by PhpStorm.
 * User: irelance
 * Date: 2017/10/1
 * Time: 下午3:25
 */
namespace Irelance\Mozjs34;

use Irelance\Mozjs34\Helper\Operation;
use Irelance\Mozjs34\Helper\Reveal;
use Irelance\Mozjs34\Helper\Stack;

class Context
{
    use Reveal;
    use Operation;

    public $index = null;

    protected $content = '';
    protected $stack = [];

    protected $summaries = [];
    protected $operations = [];
    protected $nodes = [];
    protected $atoms = [];
    protected $consts = [];
    protected $objects = [];
    protected $regexps = [];
    protected $tryNotes = [];
    protected $scopeNotes = [];
    protected $hasLazyScript;

    public function addSummary($key, $value)
    {
        if (isset($this->summaries[$key])) {
            return false;
        }
        $this->summaries[$key] = $value;
        return true;
    }

    public function addOperation($parserIndex, array $operation)
    {
        $this->operations[$parserIndex] = $operation;
    }

    public function addNode($node)
    {
        $this->nodes[] = $node;
    }

    public function addAtom($atom)
    {
        $this->atoms[] = $atom;
    }

    public function addConst($const)
    {
        $this->consts[] = $const;
    }

    public function addObject($classKind, array $extra)
    {
        $this->objects[] = array_merge($extra, ['classKind' => $classKind]);
    }

    public function addRegexp($source, $flagsword)
    {
        $this->regexps[] = [
            'source' => $source,
            'flagsword' => $flagsword,
        ];
    }

    public function addTryNote($kind, $stackDepth, $start, $length)
    {
        $this->tryNotes[] = ['kind' => $kind, 'stackDepth' => $stackDepth, 'start' => $start, 'length' => $length];
    }

    public function addScopeNote($index, $start, $length, $parent)
    {
        $this->tryNotes[$index] = ['parent' => $parent, 'start' => $start, 'length' => $length];
    }

    public function addHasLazyScript($packedFields)
    {
        $this->hasLazyScript = $packedFields;
    }

    public function getSummary($key)
    {
        return $this->summaries[$key];
    }

    /**
     * @param $stack Stack|array
     */
    public function pushStack($stack)
    {
        if (is_array($stack)) {
            $stack = new Stack($stack);
        }
        array_push($this->stack, $stack);
    }

    /**
     * @return Stack
     */
    public function popStack()
    {
        return array_pop($this->stack);
    }

    protected $storageScript = [];

    public function writeScript($parserIndex, $string)
    {
        $this->storageScript[$parserIndex * 2] = ['value' => $string];
    }

    public function getScript($parserIndex)
    {
        return $this->storageScript[$parserIndex * 2];
    }

    public function writeScriptEndings($parserIndex, $ending = '}')
    {
        if (isset($this->storageScript[$parserIndex * 2 - 1])) {
            $this->storageScript[$parserIndex * 2 - 1]['value'] .= $ending;
            return;
        }
        $this->storageScript[$parserIndex * 2 - 1] = ['value' => $ending];
    }

    public function dropScriptEndings($parserIndex)
    {
        unset($this->storageScript[$parserIndex * 2 - 1]);
    }

    public function dropScript($parserIndex)
    {
        unset($this->storageScript[$parserIndex * 2]);
    }
}