import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"

const Property = () => {
    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>Propertie {id} </Text>
        </View>
    )
}

export default Property