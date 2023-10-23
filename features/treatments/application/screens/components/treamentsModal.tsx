import { View, StyleSheet, Modal, TextInput } from 'react-native';
import { Icon } from "@rneui/themed";
import React, { useState } from 'react';
import { Input, Text, Button } from '@rneui/base';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AddTreatmentsProvider, useAddTreatmentsState } from '../../providers/addTreatments';

const TreatmentsModalView = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [treatmentName, setTreatmentName] = useState<string>('');
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState<boolean>(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);

    const {
        loading,
        treatment,
        saving,
        setTreatmentsProp,

    } = useAddTreatmentsState();



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
        <View style={styles.btn}>
            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
                <Icon name="add" size={26} color="white" style={styles.icon} />
            </TouchableOpacity>

            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text style={styles.text}>Registrar nuevo tratamiento</Text>
                    <Input
                        label="Nombre del Tratamiento"
                        placeholder="Ingrese el nombre del tratamiento"
                        value={treatment?.nombreTratamiento || ''}
                        onChangeText={(text) => {
                            setTreatmentsProp('nombreTratamiento', text);
                        }}
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
                                value={treatment?.fechaInicio || new Date()}
                                mode="date"
                                onChange={(date) => {
                                    setTreatmentsProp('fechaInicio', date)
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
                                value={treatment.fechaFinal || new Date()}
                                mode="date"
                                onChange={(date) => {
                                    setTreatmentsProp('fechaFinal', date)
                                }}
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
                    <View style={styles.buttonContainer}>
                        <Button title="Guardar" onPress={toggleModal}/>
                        <Button title="Cancelar" onPress={toggleModal} type="outline"/>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    // ... (otros estilos)
    addButton: {
        backgroundColor: 'black',
        borderRadius: 25,
        width: 40,
        height: 40,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        right: 20,
    },
    btn: {
        top: 26,
    },
    icon: {
        color: 'white',
        fontSize: 24,
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
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

const TreatmentsModal = (props: any) => (
    <AddTreatmentsProvider>
        <TreatmentsModal {...props} />
    </AddTreatmentsProvider>
)

export default TreatmentsModalView;
