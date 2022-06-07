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
    marginLeft: 160,
    fontSize: 30,
    fontWeight:"bold"
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
  },
  contentInformations: {
    marginLeft:'auto',
    marginRight:'auto',
    width: "90%",
    height: "auto",
    backgroundColor:"black",
    borderRadius: 50,
    padding: 10,
    marginTop:20,
    alignItems:'center',
    marginBottom:30,
  },
  contentInformationsAlign: {
    alignItems:'center',
    alignContent:"center"
  },
  textContentInformations: {
    color: "white",
    fontWeight:"bold",
    marginBottom: 15,
    alignItems:'center',
    alignContent:"center"
  }
  
});

export default styles;