import {Input} from "../model/input";
import * as fs from 'fs';

export class Validator{
    public static isParametersValid(input: Input) {
        if (!input.filePath) {
            throw new Error('filePath parameter not found');
        }
    }

    public static async fileExists(filePath: string){
        try {
            await fs.accessSync(filePath);
        }catch (error) {
            throw new Error(`O arquivo em ${filePath} não existe`);
        }
    }

    public static async isFile(filePath: string) {
        if (!fs.lstatSync(filePath).isFile()) throw new Error('O item indicado para descompactação não é um arquivo');
    }
}