import { Input } from "@rneui/base";
import { Button, Icon } from "@rneui/themed";
import { Text, View, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";

interface TreatmentRegistrationScreenProps {}

const TreatmentScreen:React.FC<TreatmentRegistrationScreenProps> = () => {
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
            <Button
                title="Registrar Tratamiento"
                onPress={handleRegistration}
                buttonStyle={styles.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'white',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    labelStyle: {
      fontSize: 16,
      color: '#333',
      marginBottom: 5,
    },
    datePickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    dateLabel: {
      fontSize: 16,
      marginRight: 10,
      color: '#333',
    },
    dateText: {
      fontSize: 16,
      color: '#333',
    },
    button: {
      marginTop: 20,
      backgroundColor: '#007bff',
    },
});

export default TreatmentScreen;