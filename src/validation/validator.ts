import {Input} from "../model/input";
import * as fs from 'fs';

export class Validator{
    public static isParametersValid(input: Input) {
        if (!input.filePath) {
            console.error('filePath parameter not found');
            process.exit(0);
        }
    }

    public static async fileExists(filePath: string){
        try {
            const result = await fs.accessSync(filePath);
        }catch (error) {
            console.error(`O arquivo ${filePath} não existe`);
            process.exit(0);
        }
    }

    public static async isFile(filePath: string) {
        if (!fs.lstatSync(filePath).isFile()){
            console.error('O item indicado para descompactação não é um arquivo');
            process.exit(0);
        }
    }
}