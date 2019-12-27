import {Input} from "../model/input";
import {Validator} from "../validation/validator";

export abstract class Unpacker{
    constructor(protected input: Input){
        Validator.fileExists(this.input.filePath);
        Validator.isFile(this.input.filePath);
    }

    public abstract unpack();
}