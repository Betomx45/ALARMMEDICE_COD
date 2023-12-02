import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View, TouchableOpacity,Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAddTreatmentsState, AddTreatmentsProvider } from '../../providers/addTreatments';
import { Icon, Button } from "@rneui/base";



interface CustomModalProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

const CustomModalView: React.FC<CustomModalProps> = ({ modalVisible, setModalVisible }) => {
    const {
        treatments,
        message,
        errors,
        success,
        saving,
        loading,
        setTreatmentsProp,
        saveTreatments
    } = useAddTreatmentsState();

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState<boolean>(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);

    const showEndModal = () => {
        setModalVisible(false);
    };
    const showStartDate = () => {
        setShowEndDatePicker(false);
    };

    const showEndDate = () => {
        setShowEndDatePicker(true);
    };

    const handleStartDateChange = (event: Event, selectedDate?: Date) => {
        const currentDate = selectedDate || startDate;
        setShowStartDatePicker(Platform.OS === 'ios');
        setStartDate(currentDate);
    };

    const handleEndDateChange = (event: Event, selectedDate?: Date) => {
        const currentDate = selectedDate || endDate;
        setShowEndDatePicker(Platform.OS === 'ios');
        setEndDate(currentDate);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <Text style={styles.modalTitle}>Registrar nuevo tratamiento</Text>

                    <Text style={success ? styles.success : styles.alert}>{message}</Text>


                    <Text style={styles.textLabel}>Nombre del tratamiento:</Text>

                    <TextInput
                        style={[styles.input, (errors?.nombreTratamiento ? styles.textError : null)]}
                        placeholder="Ingrese el nombre del tratamiento"
                        value={treatments?.nombreTratamiento || ''}
                        onChangeText={(text) => {
                            setTreatmentsProp('nombreTratamiento', text);
                        }}
                    ></TextInput>

                    {errors?.nombreTratamiento ? (
                        <Text style={styles.textError}>{errors.nombreTratamiento}</Text>
                    ) : null}
                    <View style={styles.datePickerContainer}>
                        <Text style={styles.dateLabel}>Fecha de Inicio:</Text>
                        <TouchableOpacity>
                            <Icon
                                name="calendar"
                                size={12}
                                type="font-awesome"
                                onPress={showEndDate}
                            />
                            {showStartDatePicker &&(
                                <DateTimePicker
                                    testID='dateTimePicker'
                                    mode='date'
                                    is24Hour={true}
                                    display='default'
                                    onChange={handleStartDateChange}
                                />
                            )

                            }
                        </TouchableOpacity>
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

                    <Text style={styles.textLabel}>Intervalo de dosis:</Text>
                    <TextInput
                        style={[styles.input, (errors?.intervaloDosis ? styles.textError : null)]}
                        placeholder="Ingrese la frecuencia"
                        value={treatments?.intervaloDosis || ''}
                        onChangeText={(text) => {
                            setTreatmentsProp('intervaloDosis', text);
                        }}
                    ></TextInput>

                    {errors?.intervaloDosis ? (
                        <Text style={styles.textError}>{errors.intervaloDosis}</Text>
                    ) : null}

                    <Text style={styles.textLabel}>Nombre del medicamento:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese el nombre del medicamento"
                    />

                    <Text style={styles.textLabel}>Descripción del medicamento:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escriba la descripción"
                    />

                    <View style={styles.buttonContainer}>
                        <Button
                            title="Guardar"
                            buttonStyle={styles.saveButton}
                            onPress={() => { saveTreatments(); }}
                            icon={
                                <View style={styles.buttonIconContainer}>
                                    <Icon name="content-save" type="material-community" size={18} color="white" />
                                </View>
                            }
                        />

                        <Button
                            title="Cancelar"
                            buttonStyle={styles.cancelButton}
                            onPress={showEndModal}
                            icon={
                                <View style={styles.buttonIconContainer}>
                                    <Icon name="cancel" type="material-community" size={18} color="white" />
                                </View>
                            }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const CustomModal = (props: any) => (
    <AddTreatmentsProvider>
        <CustomModalView {...props}></CustomModalView>
    </AddTreatmentsProvider>
)

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
        alignItems: 'baseline',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginBottom: 33
    },
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    dateLabel: {
        fontSize: 12,
        fontWeight: '600',
        marginRight: 8,
        marginLeft: 8,
    },
    dateText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    saveButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 10,
        marginRight: 22,
    },
    cancelButton: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 10,
        marginLeft: 22,
    },
    buttonIconContainer: {
        marginRight: 8, // Espacio entre el icono y el texto del botón
    },
    textLabel: {
        fontWeight: '600',
        textAlign: 'left'
    },
    alert: {
        backgroundColor: 'green',
    },
    success: {
        backgroundColor: 'green',
    },
    textError: {
        color: 'red',
    }
});

export default CustomModal;
