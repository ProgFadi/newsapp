import React, {Component} from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'

export default class NewsItem extends Component{

   
    render()
    {
        let {item}=this.props;
        const {description,publishedAt,title,urlToImage}=item;
        return (
            <View style={style.headerContainer}>
           
            <Image source={{url:urlToImage}} style={style.image}  resizeMode="cover"/>
            <Text style={style.title}>{title}</Text>
           <Text style={style.title}>{description}</Text>
           <Text style={style.title}>{publishedAt}</Text>
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