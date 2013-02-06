import sys

if len(sys.argv) < 2:
    print "please specify an input and output"
    quit()
inputPath = sys.argv[1]
outputPath = sys.argv[2]

#keywords
var = '("\\x76"+((!!+[]+"")[+!![]])+((!+[]+"")[+!![]]))'
function = '(((!!+[]+"")[+[]])+((!+[]+"")[(+!![])+(+!![])])+((+!![]/+[]+"")[+!![]])+((({})+"")[(+!![])+(+!![])+(+!![])+(+!![])+(+!![])])+((!+[]+"")[+[]])+((+!![]/+[]+"")[(+!![])+(+!![])+(+!![])])+((({})+"")[+!![]])+((+!![]/+[]+"")[+!![]]))'
#letters / numbers
symbols={
    'a':'((!!+[]+"")[+!![]])',
    'b':'((({})+"")[(+!![])+(+!![])])',
    'c':'((({})+"")[(+!![])+(+!![])+(+!![])+(+!![])+(+!![])])',
    'd':'((({})[""]+"")[(+!![])+(+!![])])',
    'e':'((!!+[]+"")[(+!![])+(+!![])+(+!![])+(+!![])])',
    'f':'((!!+[]+"")[+[]])',
    'g':'"\\x67"',
    'h':'"\\x68"',
    'i':'((+!![]/+[]+"")[(+!![])+(+!![])+(+!![])])',
    'j':'((({})+"")[(+!![])+(+!![])+(+!![])])',
    'k':'"\\x6B"',
    'l':'((!!+[]+"")[(+!![])+(+!![])])',
    'm':'"\\x6D"',
    'n':'((+!![]/+[]+"")[+!![]])',
    'o':'((({})+"")[+!![]])',
    'p':'"\\x70"',
    'q':'"\\x71"',
    'r':'((!+[]+"")[+!![]])',
    's':'((!!+[]+"")[(+!![])+(+!![])+(+!![])])',
    't':'((!+[]+"")[+[]])',
    'u':'((!+[]+"")[(+!![])+(+!![])])',
    'v':'"\\x76"',
    'w':'"\\x77"',
    'x':"'x'",
    'y':'((+!![]/+[]+"")[(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])])',
    'z':'"\\x7A"',
    'A':'"\\x41"',
    'B':'"\\x42"',
    'C':'"\\x43"',
    'D':'"\\x44"',
    'E':'"\\x45"',
    'F':'"\\x46"',
    'G':'"\\x47"',
    'H':'"\\x48"',
    'I':'((+!![]/+[]+"")[+[]])',
    'J':'"\\x4A"',
    'K':'"\\x4B"',
    'L':'"\\x4C"',
    'M':'"\\x4D"',
    'N':'((+[]/+[]+"")[+[]])',
    'O':'((({})+"")[(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])])',
    'P':'"\\x50"',
    'Q':'"\\x51"',
    'R':'"\\x52"',
    'S':'"\\x53"',
    'T':'"\\x54"',
    'U':'"\\x55"',
    'V':'"\\x56"',
    'W':'"\\x57"',
    'X':'"\\x58"',
    'Y':'"\\x59"',
    'Z':'"\\x5A"',
    "(":"'('",
    ")":"')'",
    "{":"'{'",
    "}":"'}'",
    "[":"'['",
    "]":"']'",
    ".":"'.'",
    ";":"';'",
    "@":"'@'",
    "*":"'*'",
    '"':"'\"'",
    "/":"'/'",
    ":":"':'",
    ",":"','",
    "'":'"\'"',
    "=":"'='",
    ">":"'>'",
    "<":"'<'",
    "!":"'!'",
    "$":"'$'",
    "_":"'_'",
    "#":"'#'",
    "+":"'+'",
    "-":"'-'",
    "%":"'%'",
    "\\":"'\\'",
    "0":"(+[])",
    "1":"(+!![])",
    "2":"((+!![])+(+!![]))",
    "3":"((+!![])+(+!![])+(+!![]))",
    "4":"((+!![])+(+!![])+(+!![])+(+!![]))",
    "5":"((+!![])+(+!![])+(+!![])+(+!![])+(+!![]))",
    "6":"((+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![]))",
    "7":"((+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![]))",
    "8":"((+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![]))",
    "9":"((+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![])+(+!![]))"
}

inputFile = open(inputPath, 'r+')
lines = inputFile.readlines()
sentences = []
currSentence = 0
for line in lines:
    if line:
        if line[0] != "\n":
            sentences.append(line)
inputFile.close()
outputFile = open(outputPath, 'w+')
outputFile.write("eval(")
if len(sentences) > 0:
    for sentence in sentences:
        skip = "false"
        for i in range(len(sentence)):
            if sentence[i] == "/":
                if sentence[i+1] == "/":
                    sentence = sentence[0:i]
                    whitespaceTest = sentence.strip()
                    if len(whitespaceTest) <= 1:
                        skip = "true"
                    break
        currSentence+=1
        if skip == "true":
            continue
        words = sentence.split(" ")
        transformedWords = []
        for word in words:
            if word == "\n" or word == "\t" or word == " ":
                continue
            if word == "function":
                transformedWords.append(function)
            elif word == "var":
                transformedWords.append(var)
            elif word == "++":
                transformedWords.append("'++'")
            elif word == "===":
                transformedWords.append("'==='")
            elif word == "==":
                transformedWords.append("'=='")
            elif word == "=":
                transformedWords.append("'='")
            elif word == ">>":
                transformedWords.append("'>>'")
            elif word == ">":
                transformedWords.append("'>'")
            elif word == "<<":
                transformedWords.append("'<<'")
            elif word == "<":
                transformedWords.append("'<'")
            elif word == "!==":
                transformedWords.append("'!=='")
            elif word == "!=":
                transformedWords.append("'!='")
            else:
                transformed = ""
                for i in range(len(word)):
                    if word[i] == "\t":
                        continue
                    if word[i] == "\n":
                        if word[i-1] == "]" or word[i-1] == ")" or word[i-1] == "}":
                            transformed+= "';'+"
                        continue                 
                    if i == len(word)-1:
                        transformed += (symbols[word[i]])
                    elif i == 0 and len(words) > 1:
                        transformed += (symbols[word[i]])+"+"
                    else:
                        transformed += (symbols[word[i]])+"+"
                transformedWords.append(transformed)
        for i in range(len(transformedWords)):
            if transformedWords[i] == "":
                transformedWords[i] = "' '"
            if i == 0 and len(words) > 1:
                transformedWords[i] += "+"+"' '"+"+"
            elif i == len(transformedWords)-1:
                transformedWords[i] = transformedWords[i]
            else:
                transformedWords[i] = transformedWords[i]+"+' '+"
        str = "".join(transformedWords)
        if str[len(str)-1] == "+" and currSentence == len(sentences):
            str = str[0:-1]
        outputFile.write(str)
outputFile.write(")")
outputFile.close()