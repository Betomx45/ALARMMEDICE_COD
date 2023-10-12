
import { useState, FC } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { View, Text, TextInput, Button, StyleSheet, Image, ToastAndroid, TouchableOpacity } from 'react-native';
import firebaseApp from '../../../../config/database/firebase';
import { Avatar, ButtonGroup, ListItem } from '@rneui/base';
import { Divider, useTheme, Input } from '@rneui/themed';
// import { theme } from '../core/theme'

const showMessage = (message : string) => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
} 

type Props = {
  navigation : any
}

  const ProfileScreen: FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onLogout = () => {
      const auth = getAuth(firebaseApp);
      signOut(auth)
        .then(() => {
          console.log("Usuario desconectado");
          showMessage("Usuario desconectado");
          // Redirige a la pantalla de inicio o cualquier otra pantalla necesaria
          navigation.replace("Inicio"); // Reemplaza "Inicio" con el nombre de tu pantalla de inicio
        })
        .catch((error) => {
          console.log(error.message);
          console.log(error);
          showMessage(`Error al cerrar sesión: ${error.message}`);
        });
    }
  
    const { theme } = useTheme();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Perfil</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
        <Avatar
          rounded
          icon={{
            name: "person-outline",
            type: "material",
            size: 150,
          }}
          size='xlarge'
          containerStyle={styles.avatarContainer}
        />
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Mi Cuenta</Text>
          <Divider width={2} color={theme?.colors?.black} />
          <Text style={styles.listItem}>Email from John Doe</Text>
          <Text style={styles.listItem}>Email from John Doe</Text>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Información de Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder='Usuario'
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder='Nombre'
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder='Correo Electrónico'
            editable={false}
          />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    heading: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
    },
    logoutButton: {
      backgroundColor: 'blue',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    logoutButtonText: {
      color: 'white',
      fontSize: 15,
    },
    avatarContainer: {
      backgroundColor: "#c2c2c2",
      margin: 50,
      alignSelf: 'center',
    },
    section: {
      margin: 16,
    },
    sectionHeading: {
      fontSize: 20,
      marginBottom: 8,
    },
    listItem: {
      fontSize: 16,
      marginBottom: 4,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      marginBottom: 12,
      paddingHorizontal: 16,
    },
  });
  
  export default ProfileScreen;