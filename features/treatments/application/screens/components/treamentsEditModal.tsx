import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View, TouchableOpacity,Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, Button } from "@rneui/base";
import Treatments from '../../../domain/entities/treatments';
import { EditTreatmentsProvider, useEditTreatmentsState } from '../../providers/editTreatmentsProvider';



interface EditModalProps {
    treatmentsEdit: Treatments,
    onSaved: Function,
    modalVisible: boolean,
    onCancelEdit: Function,
}

const EditModalTreatmentsView: React.FC<EditModalProps> = ({
    treatmentsEdit,
    onSaved,
    modalVisible,
    onCancelEdit
    }) => {

        const {
            treatments,
            message,
            errors,
            success,
            saving,
            loading,
            setTreatmentsProp,
            saveTreatments,
            setTreatments,
        } = useEditTreatmentsState();
        const [showStartDatePicker, setShowStartDatePicker] = useState<boolean>(false);
        const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);

        const showEndModal = () => {
            onCancelEdit(false);
        };

        //Al recibire el tratamiento pasarlo al estado
        useEffect(() => {
            setTreatments(treatmentsEdit)
        }, [treatmentsEdit]);


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onCancelEdit(null);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Editar tratamiento</Text>

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
                    <Icon
                    name="calendar"
                    size={12}
                    type="font-awesome"
                    onPress={() => setShowStartDatePicker(true)}
                    />
                    <Text style={styles.dateText}>{treatments.fechaInicio instanceof Date ? treatments.fechaInicio.toDateString() : 'Fecha no válida'}</Text>
                    {showStartDatePicker && (
                    <DateTimePicker
                        value={treatments?.fechaInicio || new Date().toDateString}
                        mode="date"
                        onChange={(event, date) => {
                            setShowStartDatePicker(Platform.OS === 'ios');
                            setTreatmentsProp('fechaInicio', date);
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
                    onPress={() => setShowEndDatePicker(true)}
                    />
                    <Text style={styles.dateText}>{treatments.fechaFinal instanceof Date ? treatments.fechaFinal.toDateString() : 'Fecha no válida'}</Text>
                    {showEndDatePicker && (
                    <DateTimePicker
                        value={treatments?.fechaFinal || new Date().toDateString}
                        mode="date"
                        onChange={(event, date) => {
                            setShowEndDatePicker(Platform.OS === 'ios');
                            setTreatmentsProp('fechaFinal', date);
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

        
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Guardar Cambios"
                            buttonStyle={styles.saveButton}
                            onPress={() => {
                                saveTreatments(onSaved)
                            }}
                            icon={
                                <View style={styles.buttonIconContainer}>
                                    <Icon name="content-save" type="material-community" size={18} color="white" />
                                </View>
                            }
                        />

                        <Button
                            title="Cancelar"
                            buttonStyle={styles.cancelButton}
                            onPress={() => {
                                onCancelEdit(null)
                            }}
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

const EditModalTreatments = (props: EditModalProps) => (
    <EditTreatmentsProvider>
        <EditModalTreatmentsView {...props}></EditModalTreatmentsView>
    </EditTreatmentsProvider>
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

export default EditModalTreatments;
