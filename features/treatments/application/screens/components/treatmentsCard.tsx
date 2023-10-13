import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Treatments from '../../../domain/entities/treatments';


type TreatmentsProps = {
    treatments: Treatments
}


export default function TreatmentsCard(props: TreatmentsProps) {
    // Define un objeto de estilos para el estado
    return (
        <View style={styles.card}>
            <Text style={styles.texts}>Inicio:  {props.treatments.fechaInicio}</Text>
            <Text style={styles.texts}>Fin:  {props.treatments.fechaFinal}</Text>
            <Text style={styles.texts}>Cada  {props.treatments.intervaloDosis} hrs</Text>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        width: windowWidth - 20, // Resta 20 para tener un pequeño margen a los lados
        backgroundColor: 'rgb(60, 62, 68)',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,
        alignItems: 'baseline',
    },
    texts: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'orange',
    },
});