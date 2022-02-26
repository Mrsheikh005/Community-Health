import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils/Styles";
// import { Fonts } from "../../Theme";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    Maincontainer: {
        // justifyContent:'space-between',
        // flex:1,
        // height:1200,
        // backgroundColor:'red',
        // marginTop:'10%'
    },
    Container: {
        flexDirection: 'row',
        width: '100%',
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        // backgroundColor:'yellow',
        justifyContent: 'space-between'
    },
    SelectionContainer: {
        borderWidth: 3,
        borderStyle: "dotted",
        height: '35%',
        marginVertical: '5%'
    },
    HeaderSection: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    HeadingText: {
        // color: colors.BLACK,
        fontSize: 14,
        // fontFamily:
        fontWeight: 'bold',
        paddingVertical: '1%'

    },
    HeaderHeading: {
        fontWeight: 'bold',
        // color: Colors.BLACK,
        fontSize: 22,
        marginLeft: '0%'
    },
    ButtonComponentStyling: {
        backgroundColor: Colors.black,
        width: "85%",
        borderRadius: 10,
        // marginTop: '10%',
        marginBottom: '20%',
        // height: 65
    },
    RadioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        // borderColor: colors.TEXTCOLOR_GRAY,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: '1%',
        height: '30%',
        marginHorizontal: '4%'
    },
    InnerBotton: {
        flexDirection: 'row',
        // justifyContent:'space-between'
    },
    Container2: {
        marginVertical: '10%',
        marginHorizontal: '3%'
        // backgroundColor:'red',
        // height:'25%'
    },
    Container3: {
        marginTop: '5%',
        // flex:1
        // width:'95%',
        // backgroundColor:'blue',
        // flex:1
    },
    innerContainer3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: '4%'
    },
    ContainerStyle: {
        height: 50,
        width: '90%',
        borderWidth: 2,
        borderColor: 'silver',
        paddingLeft: '0%',
        marginVertical: '1%',
        borderRadius: 10,
        //marginHorizontal: '0%',
        color: Colors.black,
        // backgroundColor:'blue',
        alignItems: "center",
        zIndex: 100

    },
    ContainerStyleD1: {
        height:45,
        width: '26%',
        borderWidth: 0,
        borderColor: 'silver',
       paddingLeft:'2%',
        // marginVertical: '0%',
        borderRadius: 10,
        // borderColor: Colors.Red,
        // color: colors.BLACK,
        paddingVertical:'3%',
        zIndex: 1,
        
        // backgroundColor:'red'

    },
    ContainerStyleStock: {
        height: 50,
        width: '90%',
        borderWidth: 2,
        borderColor: 'silver',
        paddingLeft: '2%',
        marginVertical: '2%',
        borderRadius: 10,
        marginHorizontal: '0%',
        color: 'black',

        // backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center'

    },
    ContainerStyleD: {
        // height:60,
        width: '90%',
        borderWidth: 2,
        borderColor: Colors.black,
        // paddingLeft: '2%',
        // marginVertical: '0%',
        borderRadius: 10,
//marginLeft:-40
        // marginHorizontal: '0%',
        // color:'black'

    },
    DiscriptionContainerStyle: {
        height: 180,
        width: '90%',
        borderWidth: 0.5,
        // backgroundColor:'red',
        borderColor: Colors.PRIMARY_02_4,
        // paddingLeft:'10%',
        marginVertical: '0%',
        borderRadius: 5,
        marginHorizontal: '0%',
        color: 'black',
        // justifyContent:'flex-start',
        // alignItems:'flex-start'

    },
    Inputs: {
        color: Colors.black

    },
    ContainerStyle1: {
        height: 50,
        width: 120,
        borderWidth: 2,
        borderColor: 'silver',
        paddingLeft: '2%',
        marginVertical: '4%',
        borderRadius: 10,
        marginHorizontal: '0%'

    },
    ContainerStyleLast: {
        height: 60,
        width: '90%',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'silver',
        paddingHorizontal: '2%',
        marginVertical: '0%',
        borderRadius: 10,
        marginHorizontal: '0%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor:'yellow'

    },
    MostSellingProductsQuantity: {
        color: Colors.black,
        fontSize: 15,
        marginTop: '0%',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',

    },
    LoginB: {
        color: "blue",
        fontSize: 14,
        fontWeight: '700',

    },
    MostSellingProductsSection1: {

        flexDirection: 'row',
        marginHorizontal: '1%',
        marginVertical: '2%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: Colors.white,
        borderWidth: 1,
        // elevation: 5,
        backgroundColor: Colors.white,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    InputStyle: {
        left: '5%',
        alignItems:'flex-start',
         marginVertical: '2%',
        //marginBottom: 5
    },
    ImageStyling:{
        width: 150, 
        height: 140, 
        alignSelf: 'center', 
        marginTop: 10 
    },
    ContainerLast: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '4%'
    },
    sku: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical:'1%'
    },
    Bottons: {
        borderRadius: 200,
        // marginTop:'30%',
        borderWidth: 0.5,
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: 'center',

        // backgroundColor: colors.WHITE
    },
    OrderListPrice: {
        // marginTop:'34%', 
        fontSize: 17,
        // alignSelf: 'flex-end', 
        // fontFamily: Fonts.OpenSans,
        fontWeight: '700',
        marginHorizontal: '7%',
        color: Colors.black
    },
    MaxWords: {
        // marginTop:'34%', 
        fontSize: 15,
        // alignSelf: 'flex-end', 
        // fontFamily: Fonts.OpenSans,
        fontWeight: '700',
        // marginHorizontal:'7%',
        // color: Colors.TEXTCOLOR_GRAY
    },
})
export default styles;