import { StyleSheet } from "react-native";
// import Colors from "../../../Theme/Colors";
import { Colors, primaryColor, secondryColor } from "../../utils/Styles";

const styles = StyleSheet.create({

    ContainerStyle:{
        height:50,
        width:'94.5%',
        borderWidth:0.5,
        borderColor:primaryColor,
        paddingLeft:'2%',
        // marginVertical:'0%',
        borderRadius:5,
        marginHorizontal:'3%',
        // color:colors.BLACK,
        // backgroundColor:'red'
        
    },
    ContainerStyleR:{
        height:50,
        width:'94.5%',
        borderWidth:0.5,
        borderColor:primaryColor,
        paddingLeft:'2%',
        // marginVertical:'0%',
        borderRadius:5,
        marginHorizontal:'3%',
        // color:colors.BLACK,
        // backgroundColor:'red'
        
    },
    RadioContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:0.5,
    borderColor:primaryColor,
    height:50,
    borderRadius:5,
    alignItems:'center',
    // height:'15%',
    marginVertical:'2%',
    marginHorizontal:'3%'
},
    ContainerStyle1:{
        height:50,
        // width:'50%',
        borderWidth:0.5,
        borderColor:primaryColor,
        paddingHorizontal:'12%',
        marginVertical:'2%',
        borderRadius:5,
        // marginRight:'2%',
        // backgroundColor:'red'
        
    },
    ContainerStyle0:{
        height:50,
        // width:'30%',
        borderWidth:0.5,
        borderColor:primaryColor,
        // paddingLeft:'2%',
        paddingHorizontal:'10%',
        marginVertical:'2%',
        borderRadius:5,
        marginHorizontal:'3%',
        // backgroundColor:'red',
        flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center'
        
    },
    Icons:{
        // bottom:5

    },
    NextButton:{
        // backgroundColor:colors.BLACK,
        borderRadius:5,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center',
        aspectRatio:6.5,
        padding:10,
        color:'white',
        // marginTop:100,
    
        
        
        
    },
    headingtxt:{ left:'5%' , marginTop:'6%',marginBottom:'2%'},
    hide:{
        color:'white',
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center',
        aspectRatio:0,
        // backgroundColor:'red'
        
        
    },
    Centre:{
        justifyContent:'center',
        alignItems:'center',
        // flex:1
    },
    HeaderImage:{
        height:'100%',
        width:'100%',
        zIndex:100
    },
    MostSellingProductsSection:{ 
        flex: 1, 
        // flexDirection: 'row', 
        marginHorizontal: '1%', 
        alignItems: 'center', 
        borderColor: Colors.white,
        borderWidth: 1,
        elevation: 5,
        backgroundColor: Colors.white,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical:'2%'
    },
    flex: {
        flex: 1,
      },
      mainContainer: {
        flexDirection: "row",
        paddingVertical: '5%',
        paddingHorizontal:'3%',
        justifyContent:'space-between',
        backgroundColor:Colors.white,
        // backgroundColor:'red'
      },
      titleView: {
        // flex: 1,
        justifyContent: "center",
        alignItems:'center',
        // backgroundColor:'red'
      },
      title: {
        paddingRight: '2%',
        fontSize: 20,
        color: Colors.PRIMARY_02_1,
        // fontStyle: Fonts.OpenSans,
        fontWeight: "600",
      },
    InnerView:{ flex:1,marginHorizontal:'1%', justifyContent:'space-evenly'},
    cartImage:{width:'90%',height:'10%',alignItems:'center',justifyContent:'center',alignSelf:'center'},
    MostSellingProductsSection1:{ 
        // flex: 1, 
        flexDirection: 'row', 
        marginHorizontal: '1%', 
        alignItems: 'center', 
        justifyContent:'space-evenly',
        borderColor: Colors.white,
        borderWidth: 1,
        marginVertical:'2%',
        // elevation: 5,
        backgroundColor: Colors.white,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    myDropdownContainerStyle:{
        borderRadius:10,
        borderWidth:2,
        // width:50,
        padding:14,
        borderColor:'grey'
    },
    RowStyle:{
        flexDirection:'row',
        marginHorizontal:'3%',
        alignItems:'flex-start',
        // backgroundColor:'blue',
        // width:200
       
    },
    MostSellingProductsImage:{
        height: 85, 
        width: 70, 
        borderColor: Colors.white, 
        borderWidth: 1, 
        borderRadius: 15, 
        marginBottom: '2%'
    },
    MostSellingProductsDescriptionSection:{ 
        alignContent: 'center',
        flex: 1, 
        left:'5%',
        // paddingTop: 12 ,

        // backgroundColor:'red'
    },
    MostSellingProductsDescription:{ 
        color: Colors.gray, 
        fontSize: 14,
        top:5,
        // fontFamily: Fonts.OpenSans, 
        // fontWeight: '700'
    },
    MostSellingProductsQuantity:{ 
        color: secondryColor, 
        fontSize: 14,
        textAlign:'center',
        // marginTop: '2%' ,
        fontWeight: '700',
        // backgroundColor:'green'
        
    },
    MostSellingProductsQuantity1:{ 
        color: Colors.black, 
        fontSize: 14,
        textAlign:'center',
        // marginTop: '2%' ,
        fontWeight: '700',
        // backgroundColor:'green'
        
    },
    OrderListLabel:{
        // borderColor: Colors.labelColor, 
        borderWidth: 1, 
        paddingHorizontal: 4, 
        borderRadius: 15, 
        // backgroundColor: Colors.labelColor, 
    },
    OrderListLabelText:{
        fontSize: 12, 
        color: Colors.black, 
        // fontFamily: Fonts.OpenSans,
        marginHorizontal: 3,
        fontWeight: '700' 
    },
    OrderListPrice:{
        marginTop:'34%', 
        fontSize: 17, 
        // alignSelf: 'flex-end', 
        // fontFamily: Fonts.OpenSans,
        fontWeight: '700',
        marginHorizontal:'7%',
        color: secondryColor
    },
    OrderListPriceAndLabelSection:{
        marginRight: 7, 
        // backgroundColor:'red',
        width:'100%',
        paddingBottom:'2%',
        flexDirection:'row',
        justifyContent:'space-between',
        // alignContent: 'center', 
        alignItems: 'baseline'
    },
    Info:{
        marginLeft:'2%',
        // marginTop:'4%',
        // backgroundColor:'red',
        justifyContent:'space-evenly',

    },
        Headings:{
    color:secondryColor, 
    fontSize:14, 
    fontWeight:'bold',
},
    Headings2:{
    color:secondryColor, 
    fontSize:14, 
    fontWeight:'bold',
},

    Inner:{
    color:secondryColor,
    fontSize:16,
    fontWeight:'bold',
    // marginTop:'3%'
    alignSelf:'center'
},

    RadioButton:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:0.5,
    borderColor:primaryColor,
    borderRadius:5,
    alignItems:'center',
    height:50,
    marginVertical:'2%',
    marginHorizontal:'3%'
},
    Triplet:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:'9%',
    alignItems:'center'
},
    Bottons:{
       borderRadius:200,
       marginTop:'30%',
       borderWidth:0.5,
       width:30,
       height:30,
       justifyContent:"center",
       alignItems:'center',

        backgroundColor:Colors.white
    },
    spacings:{ 
        left:'5%' ,
    marginVertical:'5%'
},
ButtonComponentStyling:{
    backgroundColor: Colors.black, 
    width: "85%", 
    borderRadius: 5,
    // marginTop:'10%',
    marginBottom:'5%',
    // height:  
},

});

export default styles;
