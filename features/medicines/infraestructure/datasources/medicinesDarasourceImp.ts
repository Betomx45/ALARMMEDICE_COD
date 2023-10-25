import MedicinesDatasource from "../../domain/datasources/medicinesDatasource";
import Medicine from "../../domain/entities/medicine";
import MedicinesResult from "../../domain/entities/medicinesResult";

class MedicinesDatasourceImp extends MedicinesDatasource {
    getMedicines(): Promise<MedicinesResult> {
        return fetch('http://192.168.137.251:3000/api/medicine')
        .then((response) => response.json())
        .then((response) => {
            const medicines = response.map((item : any) => new Medicine(
                item.id,
                item.nombre,
                item.descripcion
            )
            );
            return new MedicinesResult(
                medicines
            )
        });
    }
}

export default MedicinesDatasourceImp;