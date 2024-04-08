import { StyleSheet } from "react-native";
import { Colors } from "@src/themes";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.placeholder,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: Colors.primary,
    },
    mergedDot: {
        width: 20, 
    },
});

export { styles };