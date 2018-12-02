import React, { Component } from 'react'
import {View} from 'react-native'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
import NewsList from '../components/newsList'
import {Constants } from 'expo'
export default class Main extends Component {
  render() {
    return (
      <View style={{flex: 1,marginTop:Constants.statusBarHeight}}>
        <Header/>
        <SearchBar/>
        <NewsList/>
      </View>
    )
  }
}
