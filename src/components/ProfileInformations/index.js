import { View, Text, Image } from "react-native";
import { format } from "date-fns";
import styles from "./style";

export default function ProfileInformations(props) {
  var date = new Date(props.data.created_at);
  var formattedDate = format(date, "MMMM do, yyyy");

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

      <View style={styles.contentInformations}>
        <View style={styles.contentInformationsAlign}>
          {props.data.location != null ? (
            <Text style={styles.textContentInformations}>
              Location: {props.data.location}
            </Text>
          ) : (
            <View></View>
          )}
          {props.data.bio != null ? (
            <Text style={styles.textContentInformations}>{props.data.bio}</Text>
          ) : (
            <View></View>
          )}
          {props.data.blog != null ? (
            <Text style={styles.textContentInformations}>
              Blog: {props.data.blog}
            </Text>
          ) : (
            <View></View>
          )}
          {props.data.email != null ? (
            <Text style={styles.textContentInformations}>
              Email: {props.data.email}
            </Text>
          ) : (
            <View></View>
          )}
          {props.data.created_at != null ? (
            <Text style={styles.textContentInformations}>
              Created at: {formattedDate}
            </Text>
          ) : (
            <View></View>
          )}
        </View>
        <View style={styles.contentInformationsAlign}>
          <Text style={styles.textContentInformations}>
            Following: {props.data.following}
          </Text>
          <Text style={styles.textContentInformations}>
            Followers: {props.data.followers}
          </Text>
        </View>
      </View>
    </View>
  );
}
