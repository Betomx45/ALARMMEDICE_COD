import TreatmentsResult from "../entities/treatmentsResult";

abstract class TreatmentsDatasource{
    abstract getTreatments():Promise<TreatmentsResult>;
}

export default TreatmentsDatasource;