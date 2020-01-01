import {Input} from "../model/input";
import {Validator} from "../validation/validator";
import * as shelljs from "shelljs";

export abstract class Unpacker{
    constructor(protected input: Input){
        Validator.fileExists(this.input.filePath);
        Validator.isFile(this.input.filePath);
    }

    unpack() {
        shelljs.exec(this.buildCommandString());
    }

    protected abstract buildCommandString();
}