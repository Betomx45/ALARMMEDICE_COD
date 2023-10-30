import TreatmentsDatasource from "../../domain/datasources/treatmentsDatasource";
import AddTreatmentsResult from "../../domain/entities/addTreatmentsResult";
import Treatments from "../../domain/entities/treatments";
import TreatmentsResult from "../../domain/entities/treatmentsResult";
import TreatmentsRepository from "../../domain/repositories/treatmentsRepository";

class TreatmentsRepositoryImp extends TreatmentsRepository{
    datasource: TreatmentsDatasource;

    //una instacia de datasource debe recibir la fuente de datos con la que va a intecractuar
    constructor(datasource:TreatmentsDatasource){
        super();
        this.datasource = datasource;
    }

    addTreatments(treatment: Treatments): Promise<AddTreatmentsResult> {
        return this.datasource.addTreatments(treatment);
    }
    
   getTreatments(): Promise<TreatmentsResult> {
        return this.datasource.getTreatments();
    }
}

export default TreatmentsRepositoryImp;