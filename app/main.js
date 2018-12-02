import React, { Component } from 'react'
import {View} from 'react-native'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
import NewsList from '../components/newsList'
import {Constants } from 'expo'
export default class Main extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      news:[]
    }
  }
  componentDidMount()
  {
    this.search("iraq")
    
  }

  search(q)
  {
    console.log('11111')
    fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=ea74d2ab35164ad9b48bb00d80a22edd`)
    .then(res => res.json())
    .then(news => {
      this.setState({news:news.articles})
     
    }).catch((err)=>{
      console.log('erro loading data'+err)
    })
  }
  render() {
    return (
      <View style={{flex: 1,marginTop:Constants.statusBarHeight}}>
        <Header/>
        <SearchBar searchFun={this.search.bind(this)}/>
        <NewsList news={this.state.news}/>
      </View>
    )
  }
}
