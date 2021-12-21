import * as React from 'react';
import {Text, StyleSheet,View, FlatList} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItems/ChatRoomItems';
import ChatRoomsData from '../assets/data/ChatRooms';

const chatRoom1 = ChatRoomsData[0];
const chatRoom2 = ChatRoomsData[1];
const chatRoom3 = ChatRoomsData[2];
const chatRoom4 = ChatRoomsData[3];
const chatRoom5 = ChatRoomsData[4];
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      {/* <ChatRoomItem chatRoom = {chatRoom1} />
      <ChatRoomItem chatRoom = {chatRoom2} />
      <ChatRoomItem chatRoom = {chatRoom3} />
      <ChatRoomItem chatRoom = {chatRoom4} />
      <ChatRoomItem chatRoom = {chatRoom5} /> */}

      <FlatList
        data={ChatRoomsData}
        renderItem ={({item}) => <ChatRoomItem chatRoom={item} />} 
        />
    </View>
  );
}

  const styles = StyleSheet.create({
    page:{
      backgroundColor:'white',
      flex: 1
    }
  }
    
  );





