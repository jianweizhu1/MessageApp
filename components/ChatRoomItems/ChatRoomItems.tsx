import React from "react";
import {Text, StyleSheet,View, Image} from 'react-native';
import styles from "./styles";
export default function chatRoomItem({ chatRoom }){
  const users = chatRoom.users[1];
    return (
        <View style ={styles.container}>
        <Image source={{uri:users.imageUri}} style={styles.Image}/>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}> {users.name}</Text>
            <Text style={styles.text}> {chatRoom.lastMessage.createdAt}</Text>
          </View>
            <Text numberOfLines={1}style={styles.text}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
    );

}

