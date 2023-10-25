import { View, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import Treatments from '../../../domain/entities/treatments';
import moment from 'moment';
import 'moment/locale/es';
import { TouchableOpacity } from 'react-native';
import React from 'react';


type TreatmentsProps = {
    treatments: Treatments
}


export default function TreatmentsCard(props: TreatmentsProps) {
    // Define un objeto de estilos para el estado
    const fechaInicio: Date = props.treatments.fechaInicio;
    const fechaFinal: Date = props.treatments.fechaFinal;
    const fechaFormateada1 = moment(fechaInicio);
    fechaFormateada1.locale('es')
    const fechaFormateada2 = moment(fechaFinal);
    fechaFormateada2.locale('es')

    const nombreMes1: string = fechaFormateada1.format('DD [de] MMMM [de] YYYY');
    const nombreMes2: string = fechaFormateada2.format('DD [de] MMMM [de] YYYY');

    
    return (
        <ScrollView>
            <Card>
                <Card.Title>{props.treatments.nombreTratamiento}</Card.Title>
                <Card.Divider />
                <View style={styles.container}>
                    <Text style={styles.texts}>Inicio:  {nombreMes1}</Text>
                    <Text style={styles.texts}>Fin:  {nombreMes2}</Text>
                    <Text style={styles.texts}>Cada  {props.treatments.intervaloDosis} hrs</Text>
                    <Text style={styles.texts}>Este tratamiento esta  {props.treatments.status}</Text>
                </View>

                <View style={styles.contenidoDeLaTarjeta}>
                    <TouchableOpacity style={styles.boton}>
                        <Icon name="edit" size={24} color="blue" />
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boton}>
                        <Icon name="trash" size={24} color="red" />
                        <Text>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </Card>

        </ScrollView>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    texts: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    container: {
        flex: 1,
        marginBottom:15
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    button: {
        backgroundColor: '#33AEFF',
        borderRadius: 11,
    },
    contenidoDeLaTarjeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boton: {
        // Estilos para los botones
        alignItems: 'center',
    },
});