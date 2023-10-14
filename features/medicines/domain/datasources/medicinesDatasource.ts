
import MedicinesResult from "../entities/medicinesResult";

abstract class MedicinesDatasource {
    abstract getMedicines() : Promise<MedicinesResult>
}

export default MedicinesDatasource;