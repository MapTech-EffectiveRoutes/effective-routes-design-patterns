import {Expression} from "../abstract/expression";

export class AndExpression implements Expression {
    private expression1: Expression = null;
    private expression2: Expression = null;

    constructor(expression1: Expression, expression2: Expression) {
        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    public interpret(context: string): boolean {
        return this.expression1.interpret(context) && this.expression2.interpret(context);
    }
}