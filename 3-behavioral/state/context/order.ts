import { OrderState } from "../abstract/order-state";

export class Order {
    private state: OrderState;

    constructor(state: OrderState) {
        this.transitionTo(state);
    }

    public transitionTo(state: OrderState): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public request(): void {
        this.state.handle();
    }
}