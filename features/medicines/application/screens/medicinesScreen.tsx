import { Button, Input, Text } from '@rneui/base';
import { Icon } from "@rneui/themed";
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const MedicinesScreen = () => {
  const [treatmentName, setTreatmentName] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState<boolean>(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);

  const handleRegistration = () => {

  };

  const showStartDate = () => {
    setShowStartDatePicker(true);
  };

  const showEndDate = () => {
    setShowEndDatePicker(true);
  };

  const handleStartDateChange = (event: Event, selectedDate?: Date) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event: Event, selectedDate?: Date) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Nombre del Tratamiento"
        placeholder="Ingrese el nombre del tratamiento"
        value={treatmentName}
        onChangeText={(text) => setTreatmentName(text)}
        labelStyle={styles.labelStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />

      <View style={styles.datePickerContainer}>
        <Text style={styles.dateLabel}>Fecha de Inicio:</Text>
        <Icon
          name="calendar"
          size={12}
          type="font-awesome"
          onPress={showStartDate}
        />
        <Text style={styles.dateText}>{startDate.toDateString()}</Text>
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="spinner"
          />
        )}
      </View>

      <View style={styles.datePickerContainer}>
        <Text style={styles.dateLabel}>Fecha de Fin:</Text>
        <Icon
          name="calendar"
          size={12}
          type="font-awesome"
          onPress={showEndDate}
        />
        <Text style={styles.dateText}>{endDate.toDateString()}</Text>
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="spinner"
          />
        )}
      </View>

      <Input
        label="Nombre del Medicamento"
        labelStyle={styles.labelStyle}
        placeholder="Ingrese el nombre del medicamento"
        inputContainerStyle={styles.inputContainerStyle}
      />

      <Input
        label="Descripción"
        labelStyle={styles.labelStyle}
        placeholder="Ingrese la dosis"
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Input
        label="Dosis"
        labelStyle={styles.labelStyle}
        placeholder="Ingrese la frecuencia"
        inputContainerStyle={styles.inputContainerStyle}
      />

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
    padding: 4,
    backgroundColor: '#f0f0f0',
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
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  labelStyle: {
    fontSize: 12,
    color: '#333',
  },
  datePickerContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    marginVertical: 10,
    
  },
  dateLabel: {
    fontSize: 12,
    fontWeight:'600',
    marginRight: 10,
    marginLeft:10
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    marginLeft:10
  },
});

export default MedicinesScreen;