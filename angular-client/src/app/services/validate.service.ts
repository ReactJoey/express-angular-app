import { Injectable } from "@angular/core";

@Injectable()
export class ValidateService {
    constructor() {};

    validateRegister(user) {
        if(
            user.username == undefined || 
            user.name == undefined || 
            user.email == undefined || 
            user.password == undefined
        ) return false; {
            else {
                return true;
            };
        };
        validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };
    };
};

function email(email: any) {
    throw new Error("Function not implemented.");
}
function validateEmail(email: (email: any) => void) {
    throw new Error("Function not implemented.");
}

