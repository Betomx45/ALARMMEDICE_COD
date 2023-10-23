import TreatmentsDatasource from "../../domain/datasources/treatmentsDatasource";
import Treatments from "../../domain/entities/treatments";
import Medicines from "../../domain/entities/medicamentos";
import TreatmentsResult from "../../domain/entities/treatmentsResult";
import babelConfig from "../../../../babel.config";

class TreatmentsDatasourceImp extends TreatmentsDatasource {
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
    async addTreatments(treatment: Treatments): Promise<Treatments> {
        return fetch('http://192.168.8.100:3000/api/tratamiento', {
            method: "POST",
            body: JSON.stringify(treatment),
            headers: {
                "Content-Type": "application/json"
            },
        })

            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                return treatment

            })
    }

}

export default TreatmentsDatasourceImp;