import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import Treatments from "../../domain/entities/treatments";
import Medicines from "../../domain/entities/medicamentos";
import TreatmentsResult from "../../domain/entities/treatmentsResult";
import TreatmentsRepositoryImp from "../../insfraestructure/repositories/treatmentsRepositoryImp";
import TreatmentsDatasourceImp from "../../insfraestructure/datasources/treatmentsDatasourceImp";



// definir la estrucutura que tendra el context
interface ContextDefinition {
    // definición de estado
    loading: boolean,
    saving: boolean,
    message?: undefined,
    treatment: Treatments,

    // acciones que tendrá el context
    setTreatmentsProp: (property: string, value: any) => void;
}

// crear el objeto context de React
const AddTreatmentsContext = createContext({} as ContextDefinition);

// estrucutura del estado
// debe coincidir con la estructura del context
// no lleva accione                                                                                                                                                                                     s
// el state represneta los valores
interface AddTreatmentsState {
    loading: boolean,
    saving: boolean,
    message?: undefined,
    treatment: Treatments,
}

// definir los tipos de acciones que podrá ejecutar el context / provider
type AddTreatmentsActionType =
    | { type: "Set Loading"; payload: boolean }
    | { type: "Set Saving"; payload: boolean }
    | { type: "Set Treatments"; payload: Treatments };

// inciializar el state
const initialState: AddTreatmentsState = {
    loading: false,
    saving: false,
    message: undefined,
    treatment: new Treatments('',new Date(),new Date(),'',''),
};

// definición del reducer
// se encarga de manipular el state con base en
// las acciones y datos recibidos (payload)
function addTreatmentsReducer(
    state: AddTreatmentsState,
    action: AddTreatmentsActionType
) {
    switch (action.type) {
        case "Set Loading":
            return { ...state, loading: action.payload };

        case "Set Saving":
            return {
                ...state,
                saving: action.payload,

                // otras manipulaciones de estado
            };
        case "Set Treatments":
            return {
                ...state,
                treatments: action.payload,

                // otras manipulaciones de estado
            };

        default:
            return state;
    }
}

// implementar el proveedor de estado para Characters
type Props = {
    children?: ReactNode
}

const AddTreatmentsProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(addTreatmentsReducer, initialState);

    // acciones 
    function setTreatmentsProp(property: string, value: any) {
        dispatch({
            type:'Set Treatments',
            payload:{
                ...state.treatment,
                [property]: value,
            }
        })
    }
    // retornar la estructura del provider
    return (
        <AddTreatmentsContext.Provider value={{
            ...state,
            setTreatmentsProp,
        }}>
            {children}
        </AddTreatmentsContext.Provider>
    )

};

function useAddTreatmentsState() {
    const context = useContext(AddTreatmentsContext);
    if (context === undefined) {
        throw new Error("useAddTreatmentsState debe ser usado" +
            " con un AddTreatmentsProvider");
    }

    return context;
}

export { AddTreatmentsProvider, useAddTreatmentsState };