import React, {useContext} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import CustomDrawerContent from "../components/CustomDrawerContent";

import Dashboard from "../screens/Dashboard";
import Memberships from "../screens/manage/Memberships";
import Members from "../screens/manage/Members";
import Welcome from "../screens/Welcome";

const Drawer = createDrawerNavigator();

export default function UserDrawer() {
    return (
        <NavigationContainer independent={true} >
            <Drawer.Navigator initialRouteName="Dashboard" drawerContent={(props) => <CustomDrawerContent {...props} />}
                              screenOptions={{headerStyle: {backgroundColor: '#345872'}, headerTintColor: '#dcdcdc'}}>

                <Drawer.Screen name="Dashboard" component={Dashboard}/>
                <Drawer.Screen name="Memberships" component={Memberships}/>
                <Drawer.Screen name="Members" component={Members}/>


                <Drawer.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        drawerItemStyle: { display: "none" },
                        title: "Welcome"
                    }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}