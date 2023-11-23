import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useEffect } from 'react';
import { Icon } from "@rneui/themed";
import CustomModal from "./components/addTreatment";
import TreatmentsCard from "./components/treatmentsCard";
import { TreatmentsProvider, useTreatmentsState } from "../providers/treatmentsProvider";

const TreatmentScreenView = () => {

  const {
    loading,
    treatments,
    treatmentsSelected,
    getTreatments,
    setTreatmentsSelected,
  } = useTreatmentsState();

  const [modalVisible, setModalVisible] = React.useState(false);

  const showModal = () => {
    setModalVisible(true);
  }

  const renderCards = () => {
    if (treatments == null) {
      return null;
    }
    return treatments?.map((treatment, index) => (
      <TreatmentsCard key={index} treatments={treatment} />
    ))
  }
  useEffect(() => {
    getTreatments()
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={showModal}>
        <Icon name="add" size={26} color="white" style={styles.icon} />
      </TouchableOpacity>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <ScrollView>
        {renderCards()}
      </ScrollView>
    </View>
  );
}

const TreatmentsScreen = (props: any) => (
  <>
    <TreatmentsProvider>
      <TreatmentScreenView {...props} />
    </TreatmentsProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  addButton: {
    backgroundColor: 'black',
    borderRadius: 25,
    width: 50,
    height: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    right: 10,
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
});

export default TreatmentsScreen;