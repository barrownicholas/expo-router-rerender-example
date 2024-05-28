import { router } from "expo-router";
import { useEffect } from "react";
import {Button, Text} from "react-native";

export default function IndexPage() {

    return (
        <>
            <Button title="Login" onPress={() => router.push("/initd/dashboard")} />
        </>
    )
}