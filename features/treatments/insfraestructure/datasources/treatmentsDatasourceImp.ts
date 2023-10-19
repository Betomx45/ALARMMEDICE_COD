import TreatmentsDatasource from "../../domain/datasources/treatmentsDatasource";
import Treatments from "../../domain/entities/treatments";
import Medicines from "../../domain/entities/medicamentos";
import TreatmentsResult from "../../domain/entities/treatmentsResult";

class   TreatmentsDatasourceImp extends TreatmentsDatasource {
    getTreatments(): Promise<TreatmentsResult> {

        return fetch('http://192.168.8.100:3000/api/tratamiento')
            .then((response) => response.json())
            .then((response) => {
                //response.data { info, results }
                const treatments = response.map((item: any) => new Treatments(
                    item.id,
                    item.nombreTratamiento,
                    item.fechaInicio,
                    item.fechaFinal,
                    item.intervaloDosis,
                    item.status,
                ),
                
                );
                return new TreatmentsResult(
                    treatments,
                )
            });
    }

}

export default  TreatmentsDatasourceImp;