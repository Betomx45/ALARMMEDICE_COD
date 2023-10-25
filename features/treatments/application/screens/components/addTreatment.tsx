import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AddTreatmentsProvider, useAddTreatmentsState } from '../../providers/addTreatments';
import { Input } from 'react-native-elements';
import { Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native';

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [treatmentName, setTreatmentName] = useState<string>('');
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState<boolean>(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);

    const {
        loading,
        saving,
        treatments,
        setTreatmentsProp,
        saveTreatments
    } = useAddTreatmentsState();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
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
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalContent}>
                    <Text style={styles.text}>Registrar nuevo tratamiento</Text>
                    <Input
                        label="Nombre del Tratamiento"
                        placeholder="Ingrese el nombre del tratamiento"
                        value={treatments?.nombreTratamiento || ''}
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
                                value={treatments?.fechaInicio || new Date()}
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

                </View>
            </Modal>
            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
                <Icon name="add" size={26} color="white" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
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

export default App;