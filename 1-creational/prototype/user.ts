import { UserDni } from "./user-dni";
import { UserId } from "./user-id";
import { UserNumber } from "./user-number";
import { UserType } from "./user-type";

export class User {
    public id: UserId;
    public type: UserType;
    public number: UserNumber;
    public dni: UserDni;
    public email: string;
    public name: string;
    public password: string;
   

    public shallowCopy(): this {
        const clone = Object.create(this);
        return clone;
    }

    public deepCopy(): this {
        const clone = Object.create(this);
        clone.id = Object.create(this.id);
        clone.type = Object.create(this.type);
        clone.type.user = Object.create(this.type.user);
        clone.number = Object.create(this.number);
        clone.dni = Object.create(this.dni);
        clone.number = Object.create(this.number);

        /*clone.preference = {
            ...this.preference,
            user: { ...this },
        };*/

        return clone;
    }
}