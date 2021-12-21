import React from "react";
import{View, Text,StyleSheet} from 'react-native';
const Message = () => {
    const isMe = true;
    return (
        <View style = {styles.container}>
           <Text style ={styles.text}>Message </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        padding: 10,
        margin: 10,
        borderRadius:15,
        width: '75%', 
    },
    text:{
        color:'white',
    }
});




export default Message;