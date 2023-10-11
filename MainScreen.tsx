
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicinesScreen from "./features/medicines/application/screens/medicinesScreen";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import ProfileScreen from "./features/auth/application/screens/logout";
import TreatmentScreen from "./features/users/application/screens/usersScreen";


const Tab = createBottomTabNavigator();

export default function MainScreen ({}) {
    return(
        <Tab.Navigator
            initialRouteName="Alarm Medicine"
            screenOptions={{
                tabBarActiveTintColor: '#002BD9',
            }}
        >
            <Tab.Screen
                name="Medicines"
                component={MedicinesScreen}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="alarm-plus" size={size} color={color} />
                    ),
                    title: 'Registro de Medicamento'
                }}
            />
            <Tab.Screen
                name="Tratamiento"
                
                component={TreatmentScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="medicinebox" size={24} color={color} />
                    ),
                    title: 'Registro de Tratamiento'
                }}
            />
            <Tab.Screen 
                name="Perfil"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="profile" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}