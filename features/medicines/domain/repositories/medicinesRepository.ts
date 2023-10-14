import MedicinesResult from "../entities/medicinesResult";

abstract class MedicinesRepository {
    abstract getMedicines() : Promise<MedicinesResult>
}

export default MedicinesRepository;