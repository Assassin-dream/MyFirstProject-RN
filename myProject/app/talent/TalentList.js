/**
 * Created by xuhuan on 16/7/7.
 */


'use strict'

import React,{Component} from 'react';

import {
  Navigator,
  StyleSheet,
  Text,
} from 'react-native';

export default class TalentList extends Component{

    render(){
        return(
            <Text style={styles.textStyle}>这是人才列表</Text>
        )
    }

}

const styles = StyleSheet.create({
    textStyle:{
        margin:80,
        fontSize:20,
        backgroundColor:'white',
    }
});