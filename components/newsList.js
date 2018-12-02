import React, {Component} from 'react'
import {View,Text,TextInput} from 'react-native'
export default class NewsList extends Component{
    render()
    {
        return (
            <View style={{flex:1,backgroundColor: "green"}}>
             <Text> Hello World</Text>
            <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
            </View>
        )
    }
}