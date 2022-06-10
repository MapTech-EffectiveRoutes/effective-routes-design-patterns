import {Formatter} from "../implementor/abstract/formatter";

export abstract class Manuscript {
    protected formatter: Formatter;

    protected constructor(formatter: Formatter) {
        this.formatter = formatter;
    }

    abstract print(): void;
}