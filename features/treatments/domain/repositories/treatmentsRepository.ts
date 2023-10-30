import TreatmentsResult from "../entities/treatmentsResult";
import Treatments from "../entities/treatments";
import AddTreatmentsResult from "../entities/addTreatmentsResult";

abstract class TreatmentsRepository{
    abstract getTreatments():Promise<TreatmentsResult>;
    abstract addTreatments(treatment:Treatments):Promise<AddTreatmentsResult>;
}

export default TreatmentsRepository;