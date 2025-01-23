'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("./tokens");
const JsMin = require('jsmin');
const Fs = require('node:fs');
const NodeZlib = require('node:zlib');
const NodeBuffer = require('node:buffer');
const Strip = require("strip-comments");
const beautify = require('js-beautify/js').js;
const prefix = '[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](';
const postfix = ')()';
class Garble {
    garble(inputPath, outputPath, compress = false, log) {
        if (inputPath === undefined || outputPath === undefined) {
            throw new Error('please specify an input and output');
        }
        if (log) {
            log('grabling ' + inputPath + ' to ' + outputPath + ' with gzip compression ' + compress);
        }
        let input = Fs.readFileSync(inputPath);
        let ut8Encoded = unescape(encodeURIComponent(input));
        let utf8Decoded = decodeURIComponent(escape(ut8Encoded));
        if (log) {
            log('stripping comments');
        }
        let stripped = Strip(utf8Decoded).trim();
        if (log) {
            log('minifying');
        }
        let minified = JsMin.jsmin(stripped, 3);
        var output = prefix.split('').join('');
        let chars = minified.split('');
        let transformed = chars.map((chr, index) => {
            if (index == chars.length - 1) {
                return tokens_1.tokens.get(chr);
            }
            else {
                return tokens_1.tokens.get(chr) + '+';
            }
        });
        output += transformed.join('') + postfix;
        if (compress) {
            if (log) {
                log('gzip garbled file');
            }
            NodeZlib.gzip(output, (err, buf) => {
                Fs.writeFile(outputPath + '.gz', buf, (err) => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        if (log) {
                            log('gzip created');
                        }
                    }
                });
            });
        }
        else {
            Fs.writeFile(outputPath, output, (err) => {
                if (err) {
                    console.error(err);
                }
                else {
                    if (log) {
                        log('garbled successfully');
                    }
                }
            });
        }
    }
    ungarble(inputPath, outputPath, log) {
        if (log) {
            log('un-garbling ' + inputPath);
        }
        let input = Fs.readFileSync(inputPath) + '';
        var output = input.split('').join('');
        output = output.replace(prefix, '');
        output = output.substring(0, output.length - postfix.length);
        output = eval(output);
        output = beautify(output, {
            indent_size: 4,
            space_in_empty_paren: true
        });
        Fs.writeFile(outputPath, output, (err) => {
            if (err) {
                console.error(err);
            }
            else {
                if (log) {
                    log('un-garbled successfully');
                }
            }
        });
    }
}
;
const garble = module.exports = new Garble();
