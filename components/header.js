import React, {Component} from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'

export default class Header extends Component{
    render()
    {
        return (
            <View style={style.headerContainer}>
            <Image source={require('../assets/setting.png')} style={{width:30,height:30,marginLeft:8}} />
            <Image source={require('../assets/logo.png')} style={style.image}  resizeMode="cover"/>
           <Text style={style.title}>News App</Text>
            </View>
        )
    }
}


const style=StyleSheet.create({
   headerContainer:{height:60,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",backgroundColor:"white", shadowColor: '#000',
   shadowOffset: { width: 0, height: 1 },
   shadowOpacity: 0.8,
   shadowRadius: 2,  
   elevation: 5},
image:{height:35,width:80,marginLeft:10},
title:{fontWeight:"bold"},

})