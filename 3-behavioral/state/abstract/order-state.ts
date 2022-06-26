import { Order } from "../context/order";

export abstract class OrderState {
    protected order: Order;

    public setContext(order: Order) {
        this.order = order;
    }

    public abstract handle(): void;
}