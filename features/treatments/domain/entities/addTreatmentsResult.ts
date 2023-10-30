import Treatments from "./treatments";

class AddTreatmentsResult {
    treatment: Treatments;
    error?:boolean;
    message:string;
    errors?:{
        error:string,
        field:string,
    }[] | null;


    constructor(
        message: string,
        treatment: Treatments,
    ) {
        this.message = message;
        this.treatment = treatment;
    }
}

export default AddTreatmentsResult;