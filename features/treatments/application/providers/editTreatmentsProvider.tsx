import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import Treatments from "../../domain/entities/treatments";
import TreatmentsRepositoryImp from "../../insfraestructure/repositories/treatmentsRepositoryImp";
import TreatmentsDatasourceImp from "../../insfraestructure/datasources/treatmentsDatasourceImp";
import React from 'react';
import Medicines from "../../domain/entities/medicamentos";
import Treatment from "../../domain/entities/treatments";


interface ContextDefinition {
  loading: boolean,
  saving: boolean,
  success: boolean,
  message: string | null,
  treatments: Treatments,
  errors: any,
  setTreatmentsProp: (property: string, value: any) => void,
  saveTreatments: (onSaced: Function) => void,
  setTreatments: (treatment:Treatments) => void;
}
const EditTreatmentsContext = createContext({} as ContextDefinition)

interface EditTreatmentsState {
  loading: boolean,
  saving: boolean,
  success: boolean,
  message: string | null,
  treatments: Treatments,
  errors: any
}

type EditTreatmentsActionType =
  { type: 'Set Loading', payload: boolean }
  | { type: 'Set Saving', payload: boolean }
  | { type: 'Set Treatments', payload: Treatments }
  | { type: 'Set Message', payload: string | null }
  | {
    type: 'Set Errors', payload: {
      message: string,
      errors: any
    }
  }
  | {
    type: 'Set Success', payload: {
      success: boolean,
      treatment?: Treatments,
      message: string,
    }
  }

const initialState: EditTreatmentsState = {
  loading: false,
  saving: false,
  success: false,
  message: null,
  treatments: new Treatments(
    '',
    new Date(),
    new Date(),
    '',
    new Medicines('', '')
  ),
  errors: {}
}

function editTreatmentsReducer(
  state: EditTreatmentsState,
  action: EditTreatmentsActionType
) {
  switch (action.type) {
    case "Set Message":
      return {
        ...state,
        message: action.payload
      }
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
      };
    case "Set Errors":
      return {
        ...state,
        errors: action.payload.errors || {},
        message: action.payload.message,
        saving: false
      };
    case "Set Success":
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
        error: {},
        saving: false,
        //treatment: action.payload.treatments || state.treatments
      };
    default:
      return state;
  }
}
type Props = {
  children?: ReactNode
}

const EditTreatmentsProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(editTreatmentsReducer, initialState);

  function setTreatmentsProp(property: string, value: any) {
    dispatch({
      type: 'Set Treatments',
      payload: {
        ...state.treatments,
        [property]: value,
      }
    });
  }

  async function saveTreatments(onSaved: Function) {

    const TreatmentsRepository = new TreatmentsRepositoryImp(
      new TreatmentsDatasourceImp()
    );

    dispatch({
      type: 'Set Saving',
      payload: true
    });

    //si ya se guardo cerrar el modal
    onSaved(null);
     //dejar continuar cuando tenga implementado el update
    const result = await TreatmentsRepository.addTreatments(state.treatments);

    if (result.treatment) {

      dispatch({
        type: 'Set Success',
        payload: {
          success: true,
          treatment: result.treatment,
          message: result.message,
        }
      });
      return;
    }

    let errors: any = {};

    result.errors?.forEach((item) => {
      errors[item.field] = item.error;
    });


    dispatch({
      type: 'Set Errors',
      payload: {
        message: result.message,
        errors,
      }
    });

  }
  function setTreatments(treatment:Treatments){
    dispatch({
      type: 'Set Treatments',
      payload: treatment
    })
  }
  return (
    <EditTreatmentsContext.Provider value={{
      ...state,
      setTreatmentsProp,
      saveTreatments,
      setTreatments
    }}>
      {children}
    </EditTreatmentsContext.Provider>
  )
};

function useEditTreatmentsState() {
  const context = useContext(EditTreatmentsContext);
  if (context === undefined) {
    throw new Error("useEditTreatmentsState debe ser usado" +
      " con un EditTreatmentsProvider");
  }
  return context;
}

export { EditTreatmentsProvider, useEditTreatmentsState };