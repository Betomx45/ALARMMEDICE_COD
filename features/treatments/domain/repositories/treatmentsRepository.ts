//import Character from "../entities/character";
import TreatmentsResult from "../entities/treatmentsResult";

abstract class TreatmentsRepository{
    //Habra una función para leer los personajes por numerode pagina, retornarlos en un array
    abstract getTreatments():Promise<TreatmentsResult>;
}

export default TreatmentsRepository;