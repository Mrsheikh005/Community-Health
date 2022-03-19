import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Styles";
// import { Colors, Fonts } from "../../../Theme";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: "row",
    height:'8%',
    paddingHorizontal:20,
    alignContent: 'center',
    justifyContent: 'space-between',
    elevation:20,backgroundColor:Colors.white,
    borderBottomLeftRadius:15,borderBottomRightRadius:15
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  title: {
    color:'black', 
    fontSize:20,
    fontWeight:'bold'

    // paddingLeft: 10,
    // fontSize: 20,
    // color: Colors.PRIMARY_02_1,
    // fontStyle: Fonts.OpenSans,
    // fontWeight: "600",
  },
});

export default styles;
