import {Slot, router} from "expo-router";
import { useEffect } from "react";
import {View, Button} from "react-native";

export default function Layout() {

    const expensiveInitdLoadingTask = async () => {
        console.log("expensiveInitdLoadingTask: ran")
    };

    useEffect(() => {
        expensiveInitdLoadingTask();
    }, []);

    return (
        <View>
            <Button title="Dashboard" onPress={() => router.push("/initd/dashboard")} />
            <Button title="Settings" onPress={() => router.push("/initd/settings")} />
        </View>
    )
}