import Medicine from "./medicine";

class MedicinesResult {
    medicines : Medicine[];

    constructor (
        medicines : Medicine[],
    ) {
        this.medicines = medicines;
    }
}

export default MedicinesResult;