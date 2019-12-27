import {Unpacker} from './unpacker';
import {Validator} from '../validation/validator';
import * as shelljs from 'shelljs';

export class ZipUnpacker extends Unpacker{
    unpack() {
        shelljs.exec(this.buildCommandString());
    }
    private buildCommandString(): string{
        let command = `unzip ${this.input.filePath}`;
        if (this.input.outputPath){
            command = `${command} -d ${this.input.outputPath}`;
        }
        return command;
    }
}