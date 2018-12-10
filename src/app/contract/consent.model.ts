export class Consent {

    public name: string;
    public company_name: string;
    public email: string;
    public address: string;
    public mobile_number: string;
    public consent: boolean;
    public verify: boolean;

    constructor(name: string,company_name: string,email: string,address: string,mobile_number: string,consent: boolean,verify: boolean){
        this.name = name;
        this.company_name = company_name;
        this.email = email;
        this.address = address;
        this.mobile_number = mobile_number;
        this.consent = consent;
        this.verify = verify;
    }
}