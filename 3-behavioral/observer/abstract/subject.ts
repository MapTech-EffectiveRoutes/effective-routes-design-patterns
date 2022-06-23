import {User} from "./client";

export interface Subject {
    attach(observer: User): void;
    detach(observer: User): void;
    notify(): void;
}