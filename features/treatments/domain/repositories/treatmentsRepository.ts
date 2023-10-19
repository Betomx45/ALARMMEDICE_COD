import TreatmentsResult from "../entities/treatmentsResult";

abstract class TreatmentsRepository{
    abstract getTreatments():Promise<TreatmentsResult>;
}

export default TreatmentsRepository;