import {Unpacker} from './unpacker';
import * as shelljs from 'shelljs';

export class ZipUnpacker extends Unpacker{
    protected buildCommandString(): string{
        let command = `unzip ${this.input.filePath}`;
        if (this.input.outputPath){
            command = `${command} -d ${this.input.outputPath}`;
        }
        return command;
    }
}