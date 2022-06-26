import { OrderState } from "../abstract/order-state";
import { OrderStateType } from "./order-state-type";
import { Traveling } from '../concrete/traveling';
import { Delivered } from "../concrete/Delivered";
import { Undelivered } from "../concrete/Undelivered";

export class StateFactory {
    // Factory Method
    public static getConcreteState(orderStateType: OrderStateType): OrderState {
        if (orderStateType == OrderStateType.TRAVELING)
            return new Traveling();

        if (orderStateType == OrderStateType.DELIVERED)
            return new Delivered();

            
        if (orderStateType == OrderStateType.UNDELIVERED)
             return new Undelivered();
        
        return new Traveling();
    }
}