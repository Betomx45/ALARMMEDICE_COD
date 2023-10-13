import TreatmentsDatasource from "../../domain/datasources/treatmentsDatasource";
import Treatments from "../../domain/entities/treatments";
import TreatmentsResult from "../../domain/entities/treatmentsResult";

class   TreatmentsDatasourceImp extends TreatmentsDatasource {
    getTreatments(): Promise<TreatmentsResult> {

        return fetch('http://192.168.137.73:3000/api/tratamiento')
            .then((response) => response.json())
            .then((response) => {
                //response.data { info, results }
                const treatments = response.map((item: any) => new Treatments(
                    item.id,
                    item.fechaInicio,
                    item.fechaFinal,
                    item.intervaloDosis,
                )
                );
                return new TreatmentsResult(
                    treatments
                )
            });
    }

}

export default  TreatmentsDatasourceImp;