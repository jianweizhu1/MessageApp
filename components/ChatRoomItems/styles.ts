import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 10,
      
      },
      rightContainer:{
        //backgroundColor: 'red',
        flex:1,
      },
      text:{
        fontSize: 20, color: 'black',
      },
      Image:{
        height: 60,
        width: 60,
        borderRadius:30,
        marginRight: 15,
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      name:{
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
        marginBottom:4,
      }
})

export default styles;

