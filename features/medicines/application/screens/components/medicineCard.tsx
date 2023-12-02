import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import Medicine from "../../../domain/entities/medicine"
import { Button, Card, Icon } from "@rneui/base";
import React from 'react';

type CardProps = {
    medicine : Medicine,
}

export default function MedicineCard(props: CardProps) {
  
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Icon
                name="pill"
                type="material-community"
                size={30}
                color="#666666"
                iconStyle={styles.icon}
              />
              <Card.Title style={styles.cardTitle}>Nombre: {props.medicine.nombre}</Card.Title>
            </View>
            <Card.Divider />
            <Card.FeaturedSubtitle style={styles.info}>Descripción: {props.medicine.descripcion}</Card.FeaturedSubtitle>
            <View style={styles.buttonContainer}>
                <Button
                title="Editar"
                buttonStyle={styles.editButton}
                icon={
                    <View style={styles.buttonIconContainer}>
                    <Icon name="pencil" type="material-community" size={18} color="white" />
                    </View>
                }
                />
                <Button
                title="Eliminar"
                buttonStyle={styles.deleteButton}
                icon={
                    <View style={styles.buttonIconContainer}>
                    <Icon name="trash-can" type="material-community" size={18} color="white" />
                    </View>
                }
                />
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      padding: 10,
    },
  
    cardContainer: {
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      width: 'auto',
    },
  
    cardImage: {
      width: '100%',
      height: 150,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    icon: {
      marginRight: 10,
    },
  
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333333',
    },
  
    info: {
      fontSize: 16,
      color: '#666666',
    },
    
    buttton: {
      flex: 1,
      marginHorizontal: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
  
    editButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 10,
    },
  
    deleteButton: {
      backgroundColor: '#FF0000',
      padding: 10,
      borderRadius: 10,
    },
    buttonIconContainer: {
        marginRight: 8, // Espacio entre el icono y el texto del botón
      },
  });