import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Input } from 'react-native-elements';
import { AddTreatmentsProvider, useAddTreatmentsState } from "../providers/addTreatments";
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from "@rneui/themed";

const AddTreatmentsView = () => {

  const {
    loading,
    saving,
    treatments,
    setTreatmentsProp,
    saveTreatments
  } = useAddTreatmentsState();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [treatmentName, setTreatmentName] = React.useState<string>('');
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [endDate, setEndDate] = React.useState<Date>(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = React.useState<boolean>(false);
  const [showEndDatePicker, setShowEndDatePicker] = React.useState<boolean>(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRegistration = () => {

  };

  const showStartDate = () => {

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
      <Text style={styles.title}>
        Registro de tratamiento
      </Text>
      <Input
        label="Nombre del Tratamiento"
        placeholder="tratamiento"
        value={treatments?.nombreTratamiento || ''}
        onChangeText={(text) => {
          setTreatmentsProp('nombreTratamiento', text);
        }}
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />

      <View style={styles.datePickerContainer}>
        <Text style={styles.dateLabel}>Fecha de Inicio:</Text>
        <Icon
          name="calendar"
          size={12}
          type="font-awesome"
          onPress={showEndDate}
        />
        <Text style={styles.dateText}>{endDate.toDateString()}</Text>
        {showEndDatePicker && (
          <DateTimePicker
            value={treatments?.fechaFinal || new Date()}
            mode="date"
            onChange={(date) => {
              setTreatmentsProp('fechaFinal', date)
            }}
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
            value={treatments?.fechaFinal || new Date()}
            mode="date"
            onChange={(date) => {
              setTreatmentsProp('fechaFinal', date)
            }}
            display="spinner"
          />
        )}
      </View>

      <Input
        label="Dosis"
        placeholder="Ingresa el intervalo de dosis"
        value={treatments?.intervaloDosis || ''}
        onChangeText={(text) => {
          setTreatmentsProp('intervaloDosis', text);
        }}
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.inputLabel}
        inputStyle={styles.input}
      />
      <Button
        title="Registrar"
        onPress={() => {
          saveTreatments();
        }}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
    </View>
  );
}

const AddTreatmentsScreen = (props: any) => (
  <AddTreatmentsProvider>
    <AddTreatmentsView {...props} />
  </AddTreatmentsProvider>
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
  labelStyle: {
    fontSize: 12,
    color: '#333',
  },
  datePickerContainer: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
    marginVertical: 5,

  },
  dateLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginRight: 8,
    marginLeft: 8
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10
  },
  text: {
    top: -45,
    fontSize: 30,
    fontWeight: '600',
    justifyContent: 'center',
    color: 'black'
  },
});

export default AddTreatmentsScreen;