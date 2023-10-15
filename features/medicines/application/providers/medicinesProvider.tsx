import { FC, ReactNode, createContext, useReducer, useContext } from "react"
import Medicine from "../../domain/entities/medicine";
import MedicinesResult from "../../domain/entities/medicinesResult";
import MedicinesRepositoryImp from "../../infraestructure/repositories/medicinesRepositoryImp";
import MedicinesDatasourceImp from "../../infraestructure/datasources/medicinesDarasourceImp";

interface ContextDefinition {
    loading : boolean,
    medicines : Medicine[],

    getMedicines : () => void;
}

const MedicinesContext = createContext({} as ContextDefinition);

interface MedicinesState {
    loading : boolean,
    medicines : Medicine[],
}

type MedicinesActionType =
{ type: 'Set Loading', payload: boolean } | { type: 'Set Data', payload: MedicinesResult }

const initialState : MedicinesState = {
    loading : false,
    medicines : [],
}

function MedicinesReducer (
    state: MedicinesState,
    action: MedicinesActionType
) {
    switch (action.type) {
        case 'Set Loading':
            return { ...state, loading: action.payload }
        case 'Set Data':
            return {
                ...state,
                medicines: action.payload.medicines,
                loading: false
            }
    
        default:
            return state;
    }
}

type Props = {
    children? : ReactNode
}

const MedicinesProvider : FC<Props> = ({ children }) => {
    const [ state, dispatch ] = useReducer( MedicinesReducer, initialState );

    const getMedicines = async () => {

        const repository = new MedicinesRepositoryImp(
            new MedicinesDatasourceImp()
        );

        dispatch ({
            type: 'Set Loading',
            payload: true
        });

        const apiResponse = await repository.getMedicines();
        dispatch ({
            type: 'Set Data',
            payload: apiResponse,
        });
    }

    return (
        <MedicinesContext.Provider value={{
            ...state,

            getMedicines,
        }}>
            { children }
        </MedicinesContext.Provider>
    )
};

function useMedicinesState () {
    const context = useContext(MedicinesContext);
    if (context === undefined) {
        throw new Error(" useMedicinesState debe ser usado " + " con un     MedicinesProvider ");
    }
    return context;
}

export { MedicinesProvider, useMedicinesState };