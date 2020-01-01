import {InputService} from "./service/inputService";
import {Unpacker} from "./unpacker/unpacker";
import * as path from "path";


export const main = () => {
    const inputService = new InputService();
    const input = inputService.getInput(process.argv.slice(2));
    const callString = buildCallString(input.filePath);
    let unpacker: Unpacker;
    eval(callString);
    unpacker.unpack();
    console.log('unpack successful');
    process.exit(0);
};

const buildCallString = (filePath: string) => {
    const extension = path.extname(filePath).replace('.', '');
    const className = `${extension[0].toUpperCase()}${extension.slice(1)}Unpacker`;
    const packageName = `${extension}Unpacker`;
    const importString = `const ${className} = require("./unpacker/${packageName}").${className};`;
    const createString = `unpacker = new ${className}(input);`;
    return `${importString}\n${createString}`;
};
