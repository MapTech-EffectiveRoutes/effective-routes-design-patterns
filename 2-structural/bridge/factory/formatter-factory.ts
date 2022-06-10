import {Formatter} from "../implementor/abstract/formatter";
import {FormatterType} from "./formatter-type";
import {StandardFormatter} from "../implementor/concrete/standard-formatter";
import {FancyFormatter} from "../implementor/concrete/fancy-formatter";
import {BackwardsFormatter} from "../implementor/concrete/backwards-formatter";
import {APAFormatter} from "../implementor/concrete/apa-formatter";
import {IEEEFormatter} from "../implementor/concrete/ieee-formatter";

export class FormatterFactory {
    // Factory Method
    public static getType(formatterType: FormatterType): Formatter {
        if (formatterType == FormatterType.STANDARD) {
            return new StandardFormatter();
        }
        if (formatterType == FormatterType.FANCY) {
            return new FancyFormatter();
        }
        if (formatterType == FormatterType.BACKWARDS) {
            return new BackwardsFormatter();
        }
        if (formatterType == FormatterType.APA) {
            return new APAFormatter();
        }
        if (formatterType == FormatterType.IEEE) {
            return new IEEEFormatter();
        }
        if (formatterType == FormatterType.VANCOUVER) {
            return new VancouverFormatter();
        }
        return new StandardFormatter();
    }
}