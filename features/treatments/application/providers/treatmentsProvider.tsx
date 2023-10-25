import React from 'react';
import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import Treatments from "../../domain/entities/treatments";
import Medicines from "../../domain/entities/medicamentos";
import TreatmentsResult from "../../domain/entities/treatmentsResult";
import TreatmentsRepositoryImp from "../../insfraestructure/repositories/treatmentsRepositoryImp";
import TreatmentsDatasourceImp from "../../insfraestructure/datasources/treatmentsDatasourceImp";



// definir la estrucutura que tendra el context
interface ContextDefinition {
  // definición de estado
  loading: boolean;
  treatments: Treatments[];

  // acciones que tendrá el context
  getTreatments: () => void;
}

// crear el objeto context de React
const TreatmentsContext = createContext({} as ContextDefinition);

// estrucutura del estado
// debe coincidir con la estructura del context
// no lleva accione                                                                                                                                                                                     s
// el state represneta los valores
interface TreatmentsState {
  loading: boolean;
  treatments: Treatments[];
}

// definir los tipos de acciones que podrá ejecutar el context / provider
type TreatmentsActionType =
  | { type: "Set Loading"; payload: boolean }
  | { type: "Set Data"; payload: TreatmentsResult };

// inciializar el state
const initialState: TreatmentsState = {
  loading: false,
  treatments: [],
};

// definición del reducer
// se encarga de manipular el state con base en
// las acciones y datos recibidos (payload)
function treatmentsReducer(
  state: TreatmentsState,
  action: TreatmentsActionType
) {
  switch (action.type) {
    case "Set Loading":
      return { ...state, loading: action.payload };

    case "Set Data":
      return {
        ...state,
        treatments: action.payload.treatments,
        loading: false,

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

const TreatmentsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(treatmentsReducer, initialState);

  // acciones 
  const getTreatments = async () => {
    // instancia del repositorio
    const repository = new TreatmentsRepositoryImp(
      new TreatmentsDatasourceImp()
    )
    dispatch({
      type: 'Set Loading',
      payload: true
    })

    // llamar al repositorio y obtener el resultado
    const apiResult = await repository.getTreatments();

    // mandar a establecer los datos en el estado
    dispatch({
      type: 'Set Data',
      payload: apiResult,
    });
  }

  // retornar la estructura del provider
  return (
    <TreatmentsContext.Provider value={{
      ...state,

      getTreatments,
    }}>
      {children}
    </TreatmentsContext.Provider>
  )

};

function useTreatmentsState() {
  const context = useContext(TreatmentsContext);
  if (context === undefined) {
    throw new Error("useTreatmentsState debe ser usado" +
      " con un TreatmentsProvider");
  }

  return context;
}

export { TreatmentsProvider, useTreatmentsState };