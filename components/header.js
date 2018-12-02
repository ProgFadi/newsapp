import React, {Component} from 'react'
import {View,Image,Text,TextInput} from 'react-native'

export default class Header extends Component{
    render()
    {
        return (
            <View style={{height:60,flexDirection:"row",backgroundColor:"red"}}>
            <Image source={require('../assets/add.png')} style={{height:60}} resizeMode="stretch"/>
           
            </View>
        )
    }
}