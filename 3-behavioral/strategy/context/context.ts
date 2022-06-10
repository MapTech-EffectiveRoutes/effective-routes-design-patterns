import {Shipping} from "../abstract/shipping";
import {OlvaCourier} from "../concret/OlvaCourier";

export class Context {
    private strategy: Shipping;

    constructor() {
        this.strategy = new OlvaCourier();
    }

    public setStrategy(strategy: Shipping) {
        this.strategy = strategy;
    }

    public calculateCost(data: string): number {
        return this.strategy.calculateCost(data);
    }
}