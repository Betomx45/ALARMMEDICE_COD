import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import {Button, Input} from 'react-native-elements';
import { AddUserProvider, useAddUserState } from "../providers/addUserProvider";
import React from 'react';

const AddUserView = () => {

  const {
    loading,
    saving,
    user,
    
    setUserProp,
    saveUser,
  } = useAddUserState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Registro de Usuario
      </Text>
      <Input
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={user?.nombre || ''}
        onChangeText={(text) => {
          setUserProp('nombre', text);
        }}
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />
      <Input
        label="Correo"
        placeholder="Ingresa tu correo"
        value={user?.correo || ''}
        onChangeText={(text) => {
          setUserProp('correo', text);
        }}
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />
      <Input
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        value={user?.password || ''}
        onChangeText={(text) => {
          setUserProp('password', text);
        }}
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />
      <Button
        title="Registrarse"
        onPress={() => {
          saveUser();
        }}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    </View>
  );
}

const AddUserScreen = (props: any) => (
  <AddUserProvider>
      <AddUserView {...props} />
  </AddUserProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    marginBottom: 20,
    fontSize: 30
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 18,
  },
});

export default AddUserScreen;