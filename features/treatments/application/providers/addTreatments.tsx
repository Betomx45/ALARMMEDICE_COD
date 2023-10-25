import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import Treatments from "../../domain/entities/treatments";
import TreatmentsRepositoryImp from "../../insfraestructure/repositories/treatmentsRepositoryImp";
import TreatmentsDatasourceImp from "../../insfraestructure/datasources/treatmentsDatasourceImp";
import React from 'react';
import Medicines from "../../domain/entities/medicamentos";


interface ContextDefinition {
  loading : boolean,
  saving : boolean,
  message? : string,
  treatments : Treatments,
  setTreatmentsProp: (property: string, value: any) => void,
  saveTreatments: () => void,
}

const AddTreatmentsContext = createContext({} as ContextDefinition)

interface AddTreatmentsState {
  loading : boolean,
  saving : boolean,
  message? : string,
  treatments : Treatments,
}

type AddTreatmentsActionType = 
  { type: 'Set Loading', payload: boolean }
  | { type: 'Set Saving', payload: boolean }
  | { type: 'Set Treatments', payload: Treatments }

const initialState : AddTreatmentsState = {
  loading: false,
  saving: false,
  message: undefined,
  treatments: new Treatments(
    '',
    new Date(),
    new Date(), 
    '',
    new Medicines('Pearls', 'Lactobacilus')
  ),
}

function addTreatmentsReducer(
  state: AddTreatmentsState,
  action: AddTreatmentsActionType
) {
  switch (action.type) {
    case "Set Loading":
      return { 
        ...state, 
        loading: action.payload 
      };

    case "Set Saving":
      return {
        ...state,
        saving: action.payload,
      };

    case "Set Treatments":
      return {
        ...state,
        treatments: action.payload,
      }  

    default:
      return state;
  }
}

type Props = {
  children?: ReactNode
}

const AddTreatmentsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(addTreatmentsReducer, initialState);

  function setTreatmentsProp (property: string, value: any) {
    dispatch({
      type: 'Set Treatments',
      payload: {
        ...state.treatments,
        [property]: value,
      }
    });
  }

  async function saveTreatments () {

    const TreatmentsRepository = new TreatmentsRepositoryImp(
      new TreatmentsDatasourceImp()
    ); 

    dispatch({
      type: 'Set Saving',
      payload: true
    });

    const saveTreatments = await TreatmentsRepository.addTreatments(state.treatments);
    console.log(saveTreatments);
    dispatch({
      type: 'Set Saving',
      payload: false
    });
  }

  return (
    <AddTreatmentsContext.Provider value={{
      ...state,
      setTreatmentsProp,
      saveTreatments,
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