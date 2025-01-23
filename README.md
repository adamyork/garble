_**garble** is a node.js tool that takes javascript obfuscation to the extreme._

### How it works
The garble procedure is as follows
1. Attempt to read an input javascript file
2. Attempt to UTF-8 encode it
3. Attempt to minify it; stripping whitespace and comments wherever possible
4. Tokenize the normalized input; characters are substituted with garble equivalents
5. Reassemble the output
6. Write the file

### Why should I use garble ?
- You want deployed code to become unreadable and extraordinarily difficult to debug.
- You want to 10x the file size of your javascript.(optional)
- Be amazed that this is valid

## How to use.

### As a stand alone dependency
TBD

### From Source

1. install node (version 22.13.0 or higher)
2. git clone repo
3. npm run build
4. npm link
5. cd into your own project directory
6. npm link garble

#### Using in code

````javascript
const garble = require('garble');
garble.garble('helloWorld.js', 'helloWorldGarbled.js', false, console.log);
````
*hellworld.js*
````javascript
console.log("hello world");
````
*helloWorldGarbled.js*
````
[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](((({})+"")[(+!![])+(+!![])+(+!![])+(+!![])+(+!![])])+((({})+"")[+!![]])+((+!![]/+[]+"")[+!![]])+((!!+[]+"")[(+!![])+(+!![])+(+!![])])+((({})+"")[+!![]])+((!!+[]+"")[(+!![])+(+!![])])+((!!+[]+"")[(+!![])+(+!![])+(+!![])+(+!![])])+"."+((!!+[]+"")[(+!![])+(+!![])])+((({})+"")[+!![]])+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](((!+[]+"")[+!![]]+((!!+[]+"")[(+!![])+(+!![])+(+!![])+(+!![])])+((!+[]+"")[+[]])+((!+[]+"")[(+!![])+(+!![])])+((!+[]+"")[+!![]])+((+!![]/+[]+"")[+!![]])) + " " + ((({})+"")[(+!![])+(+!![])])+((!+[]+"")[+[]])+((({})+"")[+!![]])+((!!+[]+"")[+!![]]) +" ('"+((({})+"")[(+!![])+(+!![])])+"')")()[(+!![])]+"("+'"'+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](((!+[]+"")[+!![]]+((!!+[]+"")[(+!![])+(+!![])+(+!![])+(+!![])])+((!+[]+"")[+[]])+((!+[]+"")[(+!![])+(+!![])])+((!+[]+"")[+!![]])+((+!![]/+[]+"")[+!![]])) + " " + ((({})+"")[(+!![])+(+!![])])+((!+[]+"")[+[]])+((({})+"")[+!![]])+((!!+[]+"")[+!![]]) +" ('"+((!!+[]+"")[+!![]])+((!!+[]+"")[+!![]])+((!!+[]+"")[+!![]])+"')")()[((+!![])+(+!![])+(+!![]))]+((!!+[]+"")[(+!![])+(+!![])+(+!![])+(+!![])])+((!!+[]+"")[(+!![])+(+!![])])+((!!+[]+"")[(+!![])+(+!![])])+((({})+"")[+!![]])+" "+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](((!+[]+"")[+!![]]+((!!+[]+"")[(+!![])+(+!![])+(+!![])+(+!![])])+((!+[]+"")[+[]])+((!+[]+"")[(+!![])+(+!![])])+((!+[]+"")[+!![]])+((+!![]/+[]+"")[+!![]])) + " " + ((({})+"")[(+!![])+(+!![])])+((!+[]+"")[+[]])+((({})+"")[+!![]])+((!!+[]+"")[+!![]]) +" ('"+((({})+"")[(+!![])+(+!![])+(+!![])])+((!!+[]+"")[(+!![])+(+!![])])+"')")()[((+!![])+(+!![]))]+((({})+"")[+!![]])+((!+[]+"")[+!![]])+((!!+[]+"")[(+!![])+(+!![])])+((({})[""]+"")[(+!![])+(+!![])])+'"'+")"+";")()
````
##### (un)garbling
````javascript
garble.ungarble('helloWorldGarbled.js', 'helloWorldUnGarbled.js', console.log);
````

### API

#### Syntax

````
garble(input,output,compress,log)
````

##### Parameters

`input`

**string** The input javascript file to garble

`output`

**string** The output file

`compress`
**boolean** `optional`

Output a *gzip* file instead of js

`log`
**function** `optional`

Logger function used for debugging

##### Return
`undefined`

------

````
ungarble(input,output,log)
````

##### Parameters

`input`

**string** The input javascript file to ungarble

`output`

**string** The output file

`log`
**function** `optional`

Logger function used for debugging

##### Return
`undefined`

### TODOS
publish to npm