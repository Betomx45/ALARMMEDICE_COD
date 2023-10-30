import { Text } from '@rneui/base';
import { StyleSheet, ScrollView } from 'react-native';
import { MedicinesProvider, useMedicinesState } from '../providers/medicinesProvider';
import MedicineCard from './components/medicineCard';
import { useEffect } from 'react';
import React from 'react';


const MedicinesScreenView = () => {
  const {
    medicines,

    getMedicines,
  } = useMedicinesState();

  const renderCards = () => {
    if(medicines == null)
    {
      return null;
    }
    return medicines?.map((medicine) => (<MedicineCard key={`medicine${medicine.id}`} medicine={medicine} />
    ));
  }

  useEffect(() => {
    getMedicines();
  }, []);

  return (
    <ScrollView>
      {renderCards()}
    </ScrollView>
  );
}

const MedicinesScreen = (props : any) => (
  <MedicinesProvider>
    <MedicinesScreenView {...props} />
  </MedicinesProvider>
);

export default MedicinesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#f0f0f0',
  }
});