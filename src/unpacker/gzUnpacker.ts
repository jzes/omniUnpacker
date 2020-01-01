import {Unpacker} from "./unpacker";

export class GzUnpacker extends Unpacker{
    protected buildCommandString() {
        let command = `tar -vzxf ${this.input.filePath}`;
        if (this.input.outputPath){
            command = `${command} -C ${this.input.outputPath}`;
        }
        return command;
    }
}