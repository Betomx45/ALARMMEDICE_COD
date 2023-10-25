import TreatmentsDatasource from "../../domain/datasources/treatmentsDatasource";
import Treatments from "../../domain/entities/treatments";
import Medicines from "../../domain/entities/medicamentos";
import TreatmentsResult from "../../domain/entities/treatmentsResult";
import backendConfig from "../../../../config/backend/config";

class TreatmentsDatasourceImp extends TreatmentsDatasource {
    async addTreatments(treatment: Treatments): Promise<Treatments> {
        return fetch(`${backendConfig.url}/api/tratamiento`, {
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
   getTreatments(): Promise<TreatmentsResult> {
        return fetch(`${backendConfig.url}/api/tratamiento`)
            .then((response) => response.json())
            .then((response) => {
                //response.data { info, results }
                const treatments = response.map((item: any) => new Treatments(
                    item.nombreTratamiento,
                    item.fechaInicio,
                    item.fechaFinal,
                    item.intervaloDosis,
                    item.status,
                    item.id,
                ),

                );
                return new TreatmentsResult(
                    treatments,
                )
            });
    }
}

export default TreatmentsDatasourceImp;