
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
const MessageInput = () => {
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        console.warn("Sending:", message);
        setMessage('');
        }
    const onPlusClicked = () => {
        console.warn("On plus clicked");
    }
    const onPress = () => { 
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }
  return (
    <View style = {styles.root}>
      <View style = { styles.inputContainer} >
        <TextInput 
        style = {styles.input}
        value = {message}
        onChangeText ={setMessage}
        placeholder = "type here..."
        />
      </View>

      <View style = { styles.buttonContainer} >
          <Text style = { styles.buttonText }> + </Text>
      </View>
        <Pressable onPress={onPress} style = {styles.buttonContainer}>
            
        </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
    },

    inputContainer: {
        backgroundColor: '#99a39c',
        flex: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 25,
        borderColor : '#dedede',
        justifyContent: 'center',
    },

    buttonContainer: {
        width : 50,
        height : 50,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 35,
    },
    input: {
        flex: 1,
        marginHorizontal:5,
    },
    icon: {
        marginHorizontal:2,
    }

});

export default MessageInput;
