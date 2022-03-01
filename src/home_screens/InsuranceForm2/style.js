import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils/Styles";
// import { Fonts } from "../../Theme";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    Maincontainer: {
        justifyContent:'space-between',
        flex:1,
        // height:1200,
        // backgroundColor:'red',
        marginTop:'5%'
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
    
    HeadingText: {
        color: Colors.black,
        fontSize: 14,
        // alignSelf:'center',
        // fontFamily:
        // fontWeight: 'bold',
        paddingVertical: '1%'

    },
    HeadingText2: {
        color: Colors.black,
        fontSize: 14,
        alignSelf:'center',
        // fontFamily:
        // fontWeight: 'bold',
        paddingVertical: '1%'

    },
    HeadingText3: {
        color: Colors.black,
        fontSize: 16,
        alignSelf:'center',
        marginHorizontal:'5%',
        textAlign:"center",
        // fontFamily:
        fontWeight: 'bold',
        paddingVertical: '1%'

    },
    HeadingText4: {
        color: Colors.black,
        fontSize: 16,
        alignSelf:'center',
        marginHorizontal:'3%',
        textAlign:"center",
        // fontFamily:
        // fontWeight: 'bold',
        paddingVertical: '1%'

    },
    MostSellingProductsQuantity:{ 
        color: Colors.gray, 
        fontSize: 14,
        marginLeft: '2%' ,
        alignItems:'center',
        justifyContent:'center',
        // fontWeight: '700',
        
    },
    HeaderHeading: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 18,
        marginLeft: '0%',
        alignSelf:'center',
        textAlign:"center"
    },
    
    Container3: {
        marginTop: '5%',
        // flex:1
        // width:'95%',
        // backgroundColor:'blue',
        // flex:1
    },
    
    ContainerStyle: {
        height: 50,
        width: '90%',
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY_02_4,
        paddingLeft: '0%',
        marginVertical: '1%',
        borderRadius: 5,
        //marginHorizontal: '0%',
        color: Colors.black,
        // backgroundColor:'blue',
        // alignItems: "center",
        // zIndex: 100

    },
    ContainerStyleL: {
        height: 50,
        width: '90%',
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY_02_4,
        paddingLeft: '0%',
        marginVertical: '1%',
        borderRadius: 5,
        //marginHorizontal: '0%',
        color: Colors.black,
        // backgroundColor:"#cce5f0",
        // alignItems: "center",
        // zIndex: 100

    },
    
    Inputs: {
        color: Colors.black

    },
    ContainerStyle1: {
        height: 50,
        width: 100,
        backgroundColor:Colors.white,
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY_02_4,
        paddingLeft: '2%',
        marginVertical: '4%',
        borderRadius: 5,
        marginHorizontal: '1%'

    },
    
    
    InputStyle: {
        marginHorizontal: '5%',
        alignItems:'flex-start',
         marginVertical: '2%',
        //marginBottom: 5
    },
    InputStyle2: {
        paddingHorizontal: '5%',
        alignItems:'flex-start',
         marginVertical: '2%',
         backgroundColor:"#bce5f7"
    },
   
    ContainerLast: {
        // height: 150,
        width: '90%',
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY_02_4,
        paddingLeft: '0%',
        marginVertical: '1%',
        borderRadius: 5,
        //marginHorizontal: '0%',
        color: Colors.black,
        // backgroundColor:'blue',
        // alignItems: "center",
        // zIndex: 100
    },
    ContainerLast2: {
        // height: 150,
        width: '90%',
        borderWidth: 0.5,
        borderColor: Colors.PRIMARY_02_4,
        paddingLeft: '0%',
        marginVertical: '1%',
        borderRadius: 5,
        //marginHorizontal: '0%',
        color: Colors.black,
        // backgroundColor:"#cce5f0",
        // alignItems: "center",
        // zIndex: 100
    },
    sku: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical:'1%'
    },
    
    
})
export default styles;