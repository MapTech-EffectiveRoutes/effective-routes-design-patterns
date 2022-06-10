import {Prototype} from "./prototype";
import {CircularReference} from "./circular-reference";
import { User } from "./user";
import { UserId } from "./user-id";
import { UserType } from './user-type';
import { UserNumber } from "./user-number";
import { UserDni } from "./user-dni";


function clientCode() {
    const userOriginalPrototype: User = new User();
    
    userOriginalPrototype.id = new UserId(1);
    userOriginalPrototype.type = new UserType(userOriginalPrototype);
    userOriginalPrototype.number = new UserNumber(924476178);
    userOriginalPrototype.dni = new UserDni(7834126);
    userOriginalPrototype.email = 'test@upc.edu.pe';
    userOriginalPrototype.name = "Alejandro Magno";
    userOriginalPrototype.password = "soyElMejor123";
    
    const userCopy: User = userOriginalPrototype.deepCopy();
    
    if (userOriginalPrototype === userCopy)
        console.log('Original and Copy/Clone have the same memory address');
    else
        console.log('Original and Copy/Clone have different memory address');
    
    if (userOriginalPrototype.id === userCopy.id)
        console.log('Same memory address, the ID has not been cloned');
    else
        console.log('Different memory address, the ID has been cloned');
    
    if (userOriginalPrototype.type === userCopy.type)
        console.log('Same memory address, the preference has not been cloned');
    else
        console.log('Different memory address, the preference has been cloned');
    
    if (userOriginalPrototype.type.user === userCopy.type.user)
        console.log('Same memory address, the user type has not been cloned');
    else
        console.log('Different memory address, the user type has been cloned');
    
    if (userOriginalPrototype.number === userCopy.number)
        console.log('Same memory address, the user number has not been cloned');
    else
        console.log('Different memory address, the user number has been cloned');
    

    console.log(userOriginalPrototype.id + userOriginalPrototype.name);
}


clientCode();