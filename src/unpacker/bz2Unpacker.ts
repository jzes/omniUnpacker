import { Unpacker } from "./unpacker";

export class Bz2Unpacker extends Unpacker{
    protected buildCommandString(): string {
        if (this.input.filePath.includes('tar')){
            let command = `tar -jxvf ${this.input.filePath}`;
            if (this.input.outputPath){
                command = `${command} -C ${this.input.outputPath}`;
            }
            return command;
        }
        let command = `bunzip2 ${this.input.filePath}`;
        if (this.input.outputPath !== '.'){
            console.error('bz2 utility dont support an output param');
            process.exit(0);
        }
        return command;
    }

}