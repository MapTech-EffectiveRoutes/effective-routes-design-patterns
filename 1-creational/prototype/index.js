"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var user_id_1 = require("./user-id");
var user_type_1 = require("./user-type");
var user_number_1 = require("./user-number");
var user_dni_1 = require("./user-dni");
function clientCode() {
    var userOriginalPrototype = new user_1.User();
    userOriginalPrototype.id = new user_id_1.UserId(1);
    userOriginalPrototype.type = new user_type_1.UserType(userOriginalPrototype);
    userOriginalPrototype.number = new user_number_1.UserNumber(924476178);
    userOriginalPrototype.dni = new user_dni_1.UserDni(7834126);
    userOriginalPrototype.email = 'test@upc.edu.pe';
    userOriginalPrototype.name = "Alejandro Magno";
    userOriginalPrototype.password = "soyElMejor123";
    var userCopy = userOriginalPrototype.deepCopy();
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
}
clientCode();
