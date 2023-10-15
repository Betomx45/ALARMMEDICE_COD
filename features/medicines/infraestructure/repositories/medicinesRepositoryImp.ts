import MedicinesDatasource from "../../domain/datasources/medicinesDatasource";
import MedicinesResult from "../../domain/entities/medicinesResult";
import MedicinesRepository from "../../domain/repositories/medicinesRepository";

class MedicinesRepositoryImp extends MedicinesRepository {
    datasource : MedicinesDatasource;

    constructor (datasource : MedicinesDatasource) {
        super();
        this.datasource = datasource;
    }
    getMedicines(): Promise<MedicinesResult> {
        return this.datasource.getMedicines();
    }
}

export default MedicinesRepositoryImp;