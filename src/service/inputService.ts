import {Input} from "../model/input";
import minimist = require("minimist");
import {Validator} from "../validation/validator";

export class InputService{

    public getInput(args: string[]): Input {
        const rawInput = minimist(args);
        const input = {filePath: rawInput._[0], outputPath: rawInput._[0].slice(rawInput._.length-1) };
        if (rawInput.out){
            input.outputPath = rawInput.out;
        }
        Validator.isParametersValid(input);
        return input;
    }

}