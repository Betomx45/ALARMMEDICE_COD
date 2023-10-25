import { FC, ReactNode, createContext, useContext, useReducer } from "react";
import User from "../../domain/entities/user";
import UsersRepository from "../../domain/repositories/usersRepository";
import UsersRepositoryImp from "../../infraestructure/repositories/usersRepositoryImp";
import UsersDatasourceImp from "../../infraestructure/datasources/usersDatasourceImp";
import React from 'react';

interface ContextDefinition {
  loading : boolean,
  saving : boolean,
  message? : string,
  user : User,

  setUserProp: (property: string, value: any) => void,
  saveUser: () => void,
}

const AddUserContext = createContext({} as ContextDefinition)

interface AddUserState {
  loading : boolean,
  saving : boolean,
  message? : string,
  user : User,
}

type AddUserActionType = 
  { type: 'Set Loading', payload: boolean }
  | { type: 'Set Saving', payload: boolean }
  | { type: 'Set User', payload: User }

const initialState : AddUserState = {
  loading: false,
  saving: false,
  message: undefined,
  user: new User(
    '',
    '',
    '', 
    undefined,
  ),
}

function addUserReducer(
  state: AddUserState,
  action: AddUserActionType
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

    case "Set User":
      return {
        ...state,
        user: action.payload,
      }  

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

    const saveUser = await usersRepository.addUsers(state.user);
    console.log(saveUser);
    dispatch({
      type: 'Set Saving',
      payload: false
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