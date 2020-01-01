import {Input} from "../model/input";
import minimist = require("minimist");
import {Validator} from "../validation/validator";
import * as path from "path";

export class InputService{

    public getInput(args: string[]): Input {
        const rawInput = minimist(args);

        const input = {
            filePath: rawInput._[0],
            outputPath: '.',
        };
        if (rawInput.out){
            input.outputPath = rawInput.out;
        }
        Validator.isParametersValid(input);
        return input;
    }

}