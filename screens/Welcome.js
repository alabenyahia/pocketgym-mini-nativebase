import {Text, View} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Welcome() {
    return (
        <SafeAreaView style={{padding: 16}}>
            <Text>Welcome Screen</Text>
        </SafeAreaView>
    )
}