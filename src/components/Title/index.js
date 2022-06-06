import { View, Text,Image } from 'react-native';
import InputSearch from '../InputSearch';
import styles from "./style"

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Image
        style={styles.tinyLogo}
        source={
          require('../../../assets/25231.png')
        }
      />
      <Text style={styles.textTitle}>Which user do you want to search?</Text>
      
    </View>
  );
}