import {InputService} from "./service/inputService";

export const main = () => {
    const inputService = new InputService();
    const input = inputService.getInput(process.argv.slice(2));


};
