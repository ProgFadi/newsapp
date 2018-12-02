import React, {Component} from 'react'
import {View,TextInput} from 'react-native'
export default class SearchBar extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            value:""
        }
    }
    search(text="iraq"){
        if(text.length==0)
        {
            this.setState({
                value:''
            })
            return;
        }
        console.log('hhjjk')
        this.setState({
            value:text
        })
        this.props.searchFun(text)
       
    }
    render()
    {
        return (
            <View style={{height:50,backgroundColor:"white",marginTop:5}}>
             <TextInput  onChangeText={this.search.bind(this)} value={this.state.value} placeholder="Search"  style={{borderRadius: 15,marginLeft:5,marginRight:5,backgroundColor:'white',color:'black',borderColor:'#f2f2f2',paddingLeft:15,paddingRight:15,height: 40, borderColor: '#d9d9d9', borderWidth: 1}}/>
            </View>
        )
    }
}