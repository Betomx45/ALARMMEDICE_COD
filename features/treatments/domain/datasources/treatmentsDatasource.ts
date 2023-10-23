import TreatmentsResult from "../entities/treatmentsResult";
import Treatments from "../entities/treatments";

abstract class TreatmentsDatasource{
    abstract getTreatments():Promise<TreatmentsResult>;
    abstract addTreatments(treatment:Treatments):Promise<Treatments>;
}

export default TreatmentsDatasource;