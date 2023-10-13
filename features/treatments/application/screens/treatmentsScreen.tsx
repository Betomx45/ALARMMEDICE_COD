import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import TreatmentsCard from './components/treatmentsCard';
import { TreatmentsProvider, useTreatmentsState } from '../providers/charactersPrivider';


const TreatmentScreenView = () => {
  const {
    treatments,
    loading,
    getTreatments
} = useTreatmentsState();

const renderCards = () => {
    if (treatments == null) {
        return null;
    }
    return treatments?.map((treatment) => (
        <TreatmentsCard key={`treatment${treatment.id}`} treatments={treatment} />
    ))
}
useEffect(() => {
  getTreatments()
}, []);

/*
if (loading) {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size={120} color="#00ff00" />
        </View>
    )
}*/
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estos son tus tratamientos:</Text>
      <ScrollView>
        {renderCards()}
      </ScrollView>
    </View>
  );
}

const TreatmentsScreen = (props: any) => (
  <TreatmentsProvider>
      <TreatmentScreenView {...props} />
  </TreatmentsProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
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
  text: {
    fontSize: 20,
    fontWeight: '600',
    justifyContent: 'center',
    color: 'black'
},
horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

});

export default TreatmentsScreen;