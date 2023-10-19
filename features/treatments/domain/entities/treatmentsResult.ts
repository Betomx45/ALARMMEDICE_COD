import Treatments from "./treatments";

class TreatmentsResult {
    treatments: Treatments[];


    constructor(
        treatments: Treatments[],
    ) {
        this.treatments=treatments;


    }
}

export default TreatmentsResult;