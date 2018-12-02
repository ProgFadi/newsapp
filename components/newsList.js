import React, {Component} from 'react'
import {View,Text,TextInput} from 'react-native'
import NewsItem from "./newsItem"
export default class NewsList extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            news:props.news
        }

    }
    render()
    {
        const {news}=this.props
        const newsList=news.map((itemData,i)=> <NewsItem key={i} item={itemData}/>)
        return (
            <View style={{flex:1,backgroundColor: "white",marginTop:5}}>
            {
                newsList
            }
           
            </View>
        )
    }
}