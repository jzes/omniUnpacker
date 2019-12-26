import {Unpacker} from './unpacker';
import {Validator} from '../validation/validator';
import * as shelljs from 'shelljs';

export class ZipUnpacker extends Unpacker{
    unpack() {
        Validator.fileExists(this.input.filePath);
        Validator.isFile(this.input.filePath);
        const result = shelljs.exec(this.buildCommandString());
        console.log(result);
    }
    private buildCommandString(): string{
        let command = `unzip ${this.input.filePath}`;
        if (this.input.outputPath){
            command = `${command} -d ${this.input.outputPath}`;
        }
        return command;
    }
}