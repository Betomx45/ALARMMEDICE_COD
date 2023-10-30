import TreatmentsResult from "../entities/treatmentsResult";
import Treatments from "../entities/treatments";
import AddTreatmentsResult from "../entities/addTreatmentsResult";

abstract class TreatmentsDatasource{
    abstract getTreatments():Promise<TreatmentsResult>;
    abstract addTreatments(treatment:Treatments):Promise<AddTreatmentsResult>;
}

export default TreatmentsDatasource;