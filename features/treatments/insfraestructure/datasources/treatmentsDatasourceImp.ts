import TreatmentsDatasource from "../../domain/datasources/treatmentsDatasource";
import Treatments from "../../domain/entities/treatments";
import Medicines from "../../domain/entities/medicamentos";
import TreatmentsResult from "../../domain/entities/treatmentsResult";
import backendConfig from "../../../../config/backend/config";
import AddTreatmentsResult from "../../domain/entities/addTreatmentsResult";

class TreatmentsDatasourceImp extends TreatmentsDatasource {
    async addTreatments(treatment: Treatments): Promise<AddTreatmentsResult> {
        return fetch(`${backendConfig.url}/api/tratamiento`, {
            method: !treatment "POST",
            body: JSON.stringify(treatment),
            headers: {
                "Content-Type": "application/json"
            },
        })

            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                const result = new AddTreatmentsResult(response.message, response.treatment || null);
                result.errors = response.errors || null;
                result.error = response.error || false;

                return result;
            });
    }
    getTreatments(): Promise<TreatmentsResult> {
        return fetch(`${backendConfig.url}/api/tratamiento`)
            .then((response) => response.json())
            .then((response) => {
                const treatments = response.map((item: any) => new Treatments(
                    item.nombreTratamiento,
                    item.fechaInicio,
                    item.fechaFinal,
                    item.intervaloDosis,
                    item.id,
                    item.status,
                ),

                );
                return new TreatmentsResult(
                    treatments,
                )
            });
    }
}

export default TreatmentsDatasourceImp;