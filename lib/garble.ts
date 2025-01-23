'use strict';

import {
    tokens
} from "./tokens";

const JsMin = require('jsmin');
const Fs = require('node:fs');
const NodeZlib = require('node:zlib');
const NodeBuffer = require('node:buffer');
const Strip = require("strip-comments");
const beautify = require('js-beautify/js').js;

const prefix = '[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]](';
const postfix = ')()';

interface GenericError {}

class Garble {

    garble(inputPath: string, outputPath: string, compress: boolean = false, log: Function): void {
        if (inputPath === undefined || outputPath === undefined) {
            throw new Error('please specify an input and output');
        }
        if (log) {
            log('garbling ' + inputPath + ' to ' + outputPath + ' with gzip compression ' + compress);
        }
        let input: string = Fs.readFileSync(inputPath);
        let ut8Encoded: string = unescape(encodeURIComponent(input));
        let utf8Decoded: string = decodeURIComponent(escape(ut8Encoded));
        if (log) {
            log('stripping comments');
        }
        let stripped: string = Strip(utf8Decoded).trim();
        if (log) {
            log('minifying');
        }
        let minified: string = JsMin.jsmin(stripped, 3);
        var output: string = prefix.split('').join('');
        let chars: Array < String > = minified.split('');
        let transformed: Array < String > = chars.map((chr: string, index: number) => {
            if (index == chars.length - 1) {
                return tokens.get(chr);
            } else {
                return tokens.get(chr) + '+';
            }
        });
        output += transformed.join('') + postfix;
        if (compress) {
            if (log) {
                log('gzip garbled file');
            }
            NodeZlib.gzip(output, (err: GenericError, buf: Buffer) => {
                Fs.writeFile(outputPath + '.gz', buf, (err: GenericError) => {
                    if (err) {
                        console.error(err);
                    } else {
                        if (log) {
                            log('gzip created');
                        }
                    }
                });
            });
        } else {
            Fs.writeFile(outputPath, output, (err: GenericError) => {
                if (err) {
                    console.error(err);
                } else {
                    if (log) {
                        log('garbled successfully');
                    }
                }
            });
        }
    }
    ungarble(inputPath: string, outputPath: string, log: any): void {
        if (log) {
            log('un-garbling ' + inputPath);
        }
        let input: string = Fs.readFileSync(inputPath) + '';
        var output: string = input.split('').join('');
        output = output.replace(prefix, '');
        output = output.substring(0, output.length - postfix.length);
        output = eval(output);
        output = beautify(output, {
            indent_size: 4,
            space_in_empty_paren: true
        });
        Fs.writeFile(outputPath, output, (err: GenericError) => {
            if (err) {
                console.error(err);
            } else {
                if (log) {
                    log('un-garbled successfully');
                }
            }
        });
    }
};

const garble = module.exports = new Garble();