import {Unpacker} from "./unpacker";

export class TarUnpacker extends Unpacker{
    protected buildCommandString() {
        let command = `tar -xvf ${this.input.filePath}`;
        if (this.input.outputPath){
            command = `${command} -C ${this.input.outputPath}`;
        }
        return command;
    }
}