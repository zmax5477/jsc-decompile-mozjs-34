/**
 * @ Author: max
 * @ Create Time: 2019-10-22 22:50:02
 * @ Modified by: max
 * @ Modified time: 2019-10-23 15:17:49
 * @ Description: 用来读取文件夹下的jsc文件路径
 */

const fs = require('fs');
const Rd = require('rd');
const Path = require('path');
const Async = require('async');
const Exec = require('child_process');
const Res_Dir = '../jsc';

const print = console.info;
const error = console.error;
const warn = console.warn;

//文件路径组成
class MFile{
    constructor(){
        this.dir = ''; //路径
        this.fileName = ''; //文件名 不带后缀
        this.endFix = ''; //后缀名  jsc / js
    }
    getFullFilePath(){
        return Path.join(this.dir, this.fileName + '.' + this.endFix);
    }
}

function getFilesInDir(){
    console.info('开始在源文件目录查找文件...');
    Rd.read(Res_Dir, (err, dirArr) => {
        if(err){
            console.error('read dir error : ' + JSON.stringify(err));
            return;
        }
        
        let mFileArr = [];
        dirArr.map((value, index, arr) => {
            //简单的排除下非文件
            if(value.indexOf('.') == -1){
                arr.splice(index, 1);
                console.log("删除元素 : " + value + ', index : ' + index);
            } 
            if(value.endsWith('jsc')){
                let idx = value.lastIndexOf('\\');
                if(idx > -1){
                    let dir = value.substring(0, idx);
                    let dotIdx = value.lastIndexOf('.');
                    let fileName = value.substr(idx + '\\'.length, dotIdx - idx - 1);
                    let endFix = value.substring(dotIdx + '.'.length, value.length);
                    let mfile = new MFile();
                    mfile.dir = dir;
                    mfile.fileName = fileName;
                    mfile.endFix = endFix;
                    mFileArr.push(mfile);
                }
            }
        });
        console.log('路径信息处理完毕! : ' + Date.now());
        console.log('路径信息处理完毕! 总共有: ' + mFileArr.length + ' 个文件！');
        readFiles(mFileArr);
    });
}
/**
 * 
 * @param {Array<MFile>} fileArr 
 */
function readFiles(fileArr){
    console.log("处理jsc文件 : " + !!fileArr);
    if(!fileArr || fileArr.length <= 0){
        console.error("readFiles : 文件信息为空！！！");
        return;
    }
    var curArr;
    if(!Array.isArray(fileArr)){
        curArr = [fileArr];
    }else{
        curArr = [].concat(fileArr);
    }

    let curIndex = 0;
    let count = curArr.length;
    let item = null;
    let task = function(whcb){
        print("====================== Task[ "+ curIndex +' ] start ======================');
        item = curArr[curIndex];
        print("处理文件 : " + item.getFullFilePath());
        let inFile = item.getFullFilePath();
        let outFile = Path.join(item.dir,item.fileName+ '.' +'js');
        var cmd = "php ../jsc2js.php " + inFile + " > " + outFile;
        print("处理文件 cmd: " + cmd);
        //调用php
        Exec.exec(cmd);
       
        curIndex ++;
        whcb();
    }

    Async.whilst(
        cb => {
            cb(null, curIndex < count);
        },
        task,
        (err) => {
            //关闭PHP进程
            Exec.exec("taskkill /f /t /im php.exe");
            print("执行完毕！");
        }
    );
    
}

getFilesInDir();