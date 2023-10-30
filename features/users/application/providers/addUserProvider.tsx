import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import User from "../../domain/entities/user";
import UsersRepositoryImp from "../../infraestructure/repositories/usersRepositoryImp";
import UsersDatasourceImp from "../../infraestructure/datasources/usersDatasourceImp";
import React from 'react';

interface ContextDefinition {
  loading : boolean,
  saving : boolean,
  message : string | null,
  user : User,
  errors : any,
  success : boolean,

  setUserProp: (property: string, value: any) => void,
  saveUser: () => void,
}

const AddUserContext = createContext({} as ContextDefinition)

interface AddUserState {
  loading : boolean,
  saving : boolean,
  message : string | null,
  user : User,
  errors : any,
  success : boolean,
}

type AddUserActionType = 
  { type: 'Set Loading', payload: boolean }
  | { type: 'Set Saving', payload: boolean }
  | { type: 'Set User', payload: User }
  | { type: 'Set Message', payload: string | null }
  | { type: 'Set Errors', payload: {
      message: string,
      errors: any,
    } }
  | { type: 'Set Success', payload: {
      success: boolean, 
      user?: User,
      message: string
    } }

const initialState : AddUserState = {
  loading: false,
  saving: false,
  message: null,
  success : false,
  user: new User(
    '',
    '',
    '', 
    undefined,
  ),
  errors : {},
}

function addUserReducer(
  state: AddUserState,
  action: AddUserActionType
) {
  switch (action.type) {
    case 'Set Message':
      return { 
        ...state, 
        message: action.payload 
      };

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

    case "Set User":
      return {
        ...state,
        user: action.payload,
      };
    
    case "Set Errors":
      return {
        ...state,
        errors: action.payload.errors || {},
        message: action.payload.message,
        saving: false,
      };

    case "Set Success":
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message,
        errors: {},
        saving: false,
      };
    default:
      return state;
  }
}

type Props = {
  children?: ReactNode
}

const AddUserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(addUserReducer, initialState);

  function setUserProp (property: string, value: any) {
    dispatch({
      type: 'Set User',
      payload: {
        ...state.user,
        [property]: value,
      }
    });
  }

  async function saveUser () {
    const usersRepository = new UsersRepositoryImp(
      new UsersDatasourceImp()
    ); 

    dispatch({
      type: 'Set Saving',
      payload: true
    });

    const result = await usersRepository.addUsers(state.user);
    if(result.user) {
      dispatch({
        type: 'Set Success',
        payload: {
          success: true,
          user: result.user,
          message: result.message,
        },
      });
      return;
    }

    let errors : any = {};
    result.errors?.forEach((item) => {
      errors[item.fiel] = item.error;
    });

    dispatch({
      type: 'Set Errors',
      payload: {
        message: result.message,
        errors,
      }
    });
  }

  return (
    <AddUserContext.Provider value={{
      ...state,
      setUserProp,
      saveUser,
    }}>
      {children}
    </AddUserContext.Provider>
  )
};

function useAddUserState() {
  const context = useContext(AddUserContext);
  if (context === undefined) {
    throw new Error("useAddUserState debe ser usado" +
      " con un AddUserProvider");
  }
  return context;
}

export { AddUserProvider, useAddUserState };