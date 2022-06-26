import {Delivered} from "./concrete/Delivered";
import {Traveling} from "./concrete/traveling";
import {Undelivered} from "./concrete/Undelivered";
import { Order } from "./context/order";
import { OrderState } from "./abstract/order-state";
import { StateFactory } from "./factory/factory";
import { OrderStateType } from "./factory/order-state-type";




export class Client {
    public execute(): void {
        let orderState: OrderState = StateFactory.getConcreteState(OrderStateType.TRAVELING);
        let order = new Order(orderState);
        order.request();
        
        orderState = StateFactory.getConcreteState(OrderStateType.DELIVERED);
        order.transitionTo(orderState);
        order.request();

        orderState = StateFactory.getConcreteState(OrderStateType.UNDELIVERED);
        order.transitionTo(orderState);
        order.request();
    }
}

const client: Client = new Client();
client.execute();