import { Button, Input, Text } from '@rneui/base';
import { View, StyleSheet } from 'react-native';


const MedicinesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre del Medicamento</Text>
            <Input
                placeholder="Ingrese el nombre del medicamento"
                inputStyle={styles.input}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Dosis</Text>
            <Input
                placeholder="Ingrese la dosis"
                inputStyle={styles.input}
            />
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Frecuencia</Text>
            <Input
                placeholder="Ingrese la frecuencia"
                inputStyle={styles.input}
            />
            </View>
            <Button
            title="Registrar Medicamento"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    inputContainer: {
      marginBottom: 20,
    },
    inputLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#333',
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize: 16,
    },
    button: {
      marginTop: 20,
      backgroundColor: '#007bff',
    },
    buttonTitle: {
      fontSize: 18,
    },
});  

export default MedicinesScreen;