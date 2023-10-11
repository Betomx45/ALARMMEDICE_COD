
import { useState, FC } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { View, Text, TextInput, Button, StyleSheet, Image, ToastAndroid, TouchableOpacity } from 'react-native';
import firebaseApp from '../../../../config/database/firebase';
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

const LoginScreen:FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onLogin = () => {
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email.toLocaleLowerCase(), password)
    .then((userCredential) => {
      console.log(userCredential);
      console.log("Usuario autenticado");
      showMessage("Usuario autenticado");
      navigation.replace("Alarm Medice");
    })
    .catch((error) => {
      console.log(error.message);
      console.log(error);
      showMessage(`Error al iniciar sesion: ${error.message}`);
    });
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../.././assets/temporaly.jpg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot your password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
      <Button 
        title="Iniciar sesión" 
        onPress={onLogin}
      />
      </View>
      <View style={styles.row}>
        <Text>You do not have an account yet ?</Text> 
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10
  },
  forgot: {
    fontSize: 13,
    // color: theme.colors.secondary,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: '80%',
    marginTop: 20
  }
});
