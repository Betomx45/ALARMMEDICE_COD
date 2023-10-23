import { FC, ReactNode, createContext, useContext, useReducer } from "react";

// definir la estrucutura que tendra el context
interface ContextDefinition {
    // definición de estado
    loading: boolean;
    saving: boolean;
    message?: undefined;

    // acciones que tendrá el context
}

// crear el objeto context de React
const AddTreatmentsContext = createContext({} as ContextDefinition);

// estrucutura del estado
// debe coincidir con la estructura del context
// no lleva accione                                                                                                                                                                                     s
// el state represneta los valores
interface AddTreatmentsState {
    loading: boolean;
    saving: boolean;
    message?: undefined;
}

// definir los tipos de acciones que podrá ejecutar el context / provider
type AddTreatmentsActionType =
    | { type: "Set Loading"; payload: boolean }
    | { type: "Set Saving"; payload: boolean };

// inciializar el state
const initialState: AddTreatmentsState = {
    loading: false,
    saving: false,
    message: undefined,
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


    // retornar la estructura del provider
    return (
        <AddTreatmentsContext.Provider value={{
            ...state,

        }}>
            {children}
        </AddTreatmentsContext.Provider>
    )

};

function useAddSampleState() {
    const context = useContext(AddTreatmentsContext);
    if (context === undefined) {
        throw new Error("useAddSampleState debe ser usado" +
            " con un AddTreatmentsProvider");
    }

    return context;
}

export { AddTreatmentsProvider, useAddSampleState };