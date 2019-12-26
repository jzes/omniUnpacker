import {InputService} from "./inputService";

export const main = () => {
    const inputService = new InputService();
    inputService.getInput(process.argv.slice(2));
};
