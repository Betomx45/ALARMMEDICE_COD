
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MedicinesScreen from "./features/medicines/application/screens/medicinesScreen";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from "./features/users/application/screens/logout";
import TreatmentScreen from "./features/treatments/application/screens/treatmentsScreen";


const Tab = createBottomTabNavigator();

export default function MainScreen({ }) {
    return (
        <Tab.Navigator
            initialRouteName="Alarm Medicine"
            screenOptions={{
                tabBarActiveTintColor: '#002BD9',
            }}
        >
            <Tab.Screen
                name="Medicines"
                component={TreatmentScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="alarm-plus" size={size} color={color} />
                    ),
                    title: 'Medicamentos'
                }}
            />
            <Tab.Screen
                name="Tratamiento"
                component={MedicinesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="medicinebox" size={24} color={color} />
                    ),
                    title: 'Tratamientos'
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