import {Input} from "./model/input";
import minimist = require("minimist");

export class InputService{
    public getInput(args: string[]): Input {
        const rawInput = minimist(args);
        const input = {outputPath: rawInput._[0], inputPath: rawInput._[0]};
        if (rawInput.out){
            input.outputPath = rawInput.out;
        }
        return input;
    }
}