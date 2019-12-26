import {Input} from "../model/input";

export abstract class Unpacker{
    constructor(protected input: Input){}

    public abstract unpack();

}