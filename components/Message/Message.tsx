import React from "react";
import{View, Text,StyleSheet} from 'react-native';
const blue = '#3777f0';
const grey = 'lightgrey';
const myId = 'u1';
const Message = ({ message })  => {

    const isMe = message.user.id ==myId;
    
    return (
        <View style = {
            [styles.container, {
            backgroundColor: isMe ? grey: blue,
        marginLeft: isMe ? 'auto' : 10 }]}>
           <Text style ={{color: isMe ? 'black' : 'white'}}> {message.content}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: blue,
        padding: 10,
        margin: 10,
        borderRadius:15,
        maxWidth: '75%', 
        
    },
    text:{
        color:'white',
    }
});




export default Message;