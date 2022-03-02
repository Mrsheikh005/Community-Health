import { StyleSheet } from "react-native";
import { Colors, primaryColor, secondryColor } from "../../utils/Styles";

// import { Fonts } from "../../Theme";
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "center",
        marginHorizontal: 10,
        marginTop: 30
    },
    AccountSection:{
        marginTop: 20, 
        marginHorizontal: 20
    },
    GeneralSection:{
        marginTop: 30, 
        marginHorizontal: 20
    },
    SupportSection:{
        marginTop: 30, 
        marginHorizontal: 20,
        marginBottom: 10
    },
    AccountSectionHeading:{
        fontSize: 15, 
        color: secondryColor,
        fontWeight: '700'
    },
    AccountSectionInformation:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 15
    },
    InformationSectionHeading:{
        color: Colors.black,
        fontWeight: '600'
    },
    CustomerSupportHeading:{
        color: Colors.black,
        marginLeft: 5
    },
    SubSectionStyling:{
        flexDirection: 'row', 
        alignContent: 'center'
    },
    SubSectionAmount:{
        marginRight: 10, 
        color: Colors.black, 
        fontSize: 15, 
        fontWeight: '700'
    },
    ProfileName:{
        marginTop: 5, 
        fontSize: 18, 
        fontWeight: '600', 
        color: primaryColor
    },
    ProfileEmail:{
        marginTop: 5,
    },
    ButtonComponentStyling:{
        backgroundColor: Colors.black, 
        width: "70%", 
        borderRadius: 10,
    }
})

export default styles