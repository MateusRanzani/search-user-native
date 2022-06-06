import { View, Text, Image } from "react-native";
import styles from "./style";

export default function ProfileInformations(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backgroundAvatar}>
          <Text style={styles.textAvatar}> {props.data.name} </Text>
        </View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `${props.data.avatar_url}`,
          }}
        />
      </View>

      <View >
        <Text> {props.data.name} </Text>
        <Text> {props.data.location} </Text>
      </View>
    </View>
  );
}
