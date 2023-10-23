import TreatmentsResult from "../entities/treatmentsResult";
import Treatments from "../entities/treatments";

abstract class TreatmentsRepository{
    abstract getTreatments():Promise<TreatmentsResult>;
    abstract addTreatments(treatment:Treatments):Promise<Treatments>;
}

export default TreatmentsRepository;