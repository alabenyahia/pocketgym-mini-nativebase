import React, {useContext, useEffect, useState} from 'react';
import {View} from "react-native";
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

//import {signOut} from "firebase/auth";
import {Avatar, Divider, Select} from "native-base";
/*import {auth} from "../config/firebase";
import GlobalContext from "../context/GlobalContext";
import {getDatabase, onValue, ref} from "firebase/database";
import {useAuthentication} from "../utils/hooks/useAuthentication";*/


const CustomDrawerContent = (props) => {
/*    const {stores, selectedStore, setSelectedStore} = useContext(GlobalContext)
    const [selectedStoreData, setSelectedStoreData] = useState([])

    const {user} = useAuthentication();

    useEffect(() => {
        const db = getDatabase();
        const storeRef = ref(db, user?.uid +'/stores/' + selectedStore);
        onValue(storeRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                console.log("store", data)
                setSelectedStoreData(data)
            }
        });

    }, [selectedStore]);*/



    return (
        <DrawerContentScrollView {...props}>
            {/*<View style={{width: "100%", height: 180, backgroundColor: selectedStoreData?.color || "#F16B44", marginBottom: 16, padding: 16, justifyContent: "flex-end"}}>
                <View >
                    <Select placeholder="Choose a store" mb={8} value={selectedStore} onValueChange={itemValue => {
                        setSelectedStore(itemValue)
                        console.log("selected store", selectedStore)
                    }}>
                        {stores.map(store => <Select.Item label={store.value.name} value={store.key} key={store.key}/>)}
                    </Select>
                </View>
            </View>*/}

            <DrawerItemList {...props} activeTintColor="#ffffff"/>

            <Divider/>
            {/*<DrawerItem
                label="Log Out"
                labelStyle={{ color: '#cc0000'}}
                onPress={() => { signOut(auth) }}
            />*/}
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;