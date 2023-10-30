import { ScrollView, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import {Button, Input} from 'react-native-elements';
import { AddUserProvider, useAddUserState } from "../providers/addUserProvider";
import React, { useEffect } from 'react';

const AddUserView = () => {

  const {
    message,
    loading,
    saving,
    user,
    errors,
    success,
    setUserProp,
    saveUser,
  } = useAddUserState();

  const clearInputs = () => {
    setUserProp('nombre', ''); 
    setUserProp('correo', ''); 
    setUserProp('password', ''); 
  };

  useEffect(() => {
    if (success || message) {
      Alert.alert(
        success ? 'Éxito' : 'Alerta', 
        message ?? '',
        [
          {
            text: 'OK',
            onPress: () => {
              clearInputs();
            }
          }
        ]
      );
    }
  }, [success, message]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Registro de Usuario
      </Text>
      <Input style={(errors?.nombre ? styles.textError : null)}
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={user?.nombre || ''}
        onChangeText={(text) => {
          setUserProp('nombre', text);
        }}
        textContentType="name"
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />
      {errors?.nombre ? (<Text style={styles.textError}>{errors.nombre }</Text>) : null }

      <Input style={(errors?.correo ? styles.textError : null)}
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
      {errors?.correo ? (<Text style={styles.textError}>{errors.correo }</Text>) : null }

      <Input style={(errors?.password ? styles.textError : null)}
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        value={user?.password || ''}
        onChangeText={(text) => {
          setUserProp('password', text);
        }}
        textContentType="emailAddress"
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />
      {errors?.password ? (<Text style={styles.textError}>{errors.password }</Text>) : null }

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
  alert: {
    backgroundColor: 'orange',
    marginTop: 0.5,
  },
  success: {
    backgroundColor: 'green',
    marginTop: 0.5,
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
  textInput: {},
  button: {
    backgroundColor: '#007bff',
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 18,
  },
  textError: {
    color: 'red'
  }
});

export default AddUserScreen;