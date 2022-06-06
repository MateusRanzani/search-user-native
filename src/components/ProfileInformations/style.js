import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  tinyLogo: {
    marginLeft: 25,
    width: 130,
    height: 130,
    borderRadius:100,
  },
  textAvatar: {
    color: "white",
    marginLeft: 175,
    fontSize: 25,

  },
  header: {
    flexDirection: "row",
  },
  backgroundAvatar: {
    marginTop:12,
    width: "100%",
    height: 90,
    backgroundColor: "black",
    position:"absolute",
    justifyContent:"center",
  }
});

export default styles;