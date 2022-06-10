import {Caretaker} from "./caretaker/caretaker";
import {EmployeeOriginator} from "./originator/employee-originator";

export class Client {
    public execute(): void {
        let employeeOriginator: EmployeeOriginator = new EmployeeOriginator();
        employeeOriginator.setName("John Wick");
        employeeOriginator.setAddress("111 Main Street");
        employeeOriginator.setPhone("888-555-1212");
        console.log("Employee before save: " + employeeOriginator);

        let caretaker: Caretaker = new Caretaker();
        caretaker.save(employeeOriginator);

        employeeOriginator.setPhone("444-555-6666");
        caretaker.save(employeeOriginator);
        console.log("Employee after changed phone number save: " + employeeOriginator);

        employeeOriginator.setPhone("555-444-6666");
        caretaker.save(employeeOriginator);
        console.log("Employee after changed phone number save: " + employeeOriginator);

        employeeOriginator.setPhone("333-999-6666"); // <--- we haven't called save!
        caretaker.revert(employeeOriginator);
        console.log("Reverts to last save point: " + employeeOriginator);

        caretaker.revert(employeeOriginator);
        console.log("Reverted to original: " + employeeOriginator);

        caretaker.revert(employeeOriginator);
        console.log("Reverted to original: " + employeeOriginator);
    }
}

const client: Client = new Client();
client.execute();