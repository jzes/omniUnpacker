import {Unpacker} from "./unpacker";

export class RarUnpacker extends Unpacker{
    protected buildCommandString() {
        let command = `unrar x ${this.input.filePath}`;
        if (this.input.outputPath){
            command = `${command} ${this.input.outputPath}`;
        }
        return command;
    }

}