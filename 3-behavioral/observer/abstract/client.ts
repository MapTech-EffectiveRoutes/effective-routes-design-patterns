import {Subject} from "./subject";

export interface User {
    update(subject: Subject): void;
}