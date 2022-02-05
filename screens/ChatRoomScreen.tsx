import React from "react";
import {Text,View,StyleSheet, FlatList,SafeAreaView} from "react-native";
import Message from '../components/Message'
import chatRoomData from '../assets/data/Chats';
import MessageInput from '../components/MessageInput';
import { useRoute } from "@react-navigation/native";
export default function ChatRoomScreen(){
    const route = useRoute();
    console.warn("Displaying chat room: ", route.params?.id)
    
    return (
        <SafeAreaView style = {styles.page}>
            <FlatList
                data = {chatRoomData.messages}
                renderItem={({item}) => <Message message={item} />}
                inverted
                />
            <MessageInput />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    page:{
        flex:1,
    }
})

