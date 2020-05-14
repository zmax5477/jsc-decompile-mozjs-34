1、需要先安装php7.0
下载php7.0 加入环境变量
需要node运行环境

2、修改php.ini
memory_limit = 512M #大小可根据自己内存大小调节

3、反编译成js文件
$ php jsc2js.php *.jsc > test.js

4、反汇编成js 字节码文件
$ php jsc-byte.php > test.bytecode

5. jsc放到jsc, cd到本目录，执行命令 node ./js-src/readFile.js
```
