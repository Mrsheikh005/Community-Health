import { StyleSheet } from "react-native";
// import { Colors, Fonts } from "../../../Theme";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal:20,
    alignContent: 'center',
    justifyContent: 'space-between'
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
