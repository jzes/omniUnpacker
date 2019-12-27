import {InputService} from "./service/inputService";
import {Unpacker} from "./service/unpacker";
import * as path from "path";


export const main = () => {
    const inputService = new InputService();
    const input = inputService.getInput(process.argv.slice(2));
    const callString = buildCallString(input.filePath);
    let unpacker: Unpacker;
    eval(callString);
    unpacker.unpack();
};

const buildCallString = (filePath: string) => {
    const extension = path.extname(filePath);
    const className = `${extension[1].toUpperCase()}${extension.slice(2)}Unpacker`;
    const packageName = `${extension.slice(1)}Unpacker`;
    const importString = `const ${className} = require("./service/${packageName}").${className};`;
    const createString = `unpacker = new ${extension[1].toUpperCase()}${extension.slice(2)}Unpacker(input);`;
    return `${importString}\n${createString}`;
}
