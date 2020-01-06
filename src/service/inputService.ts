import { Input } from "../model/input";
import { Validator } from "../validation/validator";
import minimist = require("minimist");

export class InputService{

    public getInput(args: string[]): Input {
        const rawInput = minimist(args);
        const teste = "teste";
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