/**
 * Created by xuhuan on 16/7/5.
 */


'use strict';

var React = require('react');

var ReactNative = require('react-native');
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} = ReactNative;

import TalentList from './talent/TalentList';

var TabBarExample = React.createClass({

    getInitialState: function() {
        return {
            selectedTab: 'First',
            notifCount: 1, //这是tabbar上的角标
        };
    },

    _renderContent: function(color: string, pageText: string) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>你点击了{pageText}</Text>
            </View>
        );
    },

    render: function() {
        return (
            <TabBarIOS
                tintColor="red"
                barTintColor="white">
                <TabBarIOS.Item
                    title="首页"
                    icon={{uri:''}}
                    selected={this.state.selectedTab === 'First'}
                    onPress={() => {
            this.setState({
              selectedTab: 'First',
            });
          }}>
                    {this._renderContent('grey', '灰色的tabbar')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    selected={this.state.selectedTab === 'TalentList'}
                    onPress={() => {
            this.setState({
              selectedTab: 'TalentList',
            });
          }}>
                    <TalentList></TalentList>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="more"
                    selected={this.state.selectedTab === 'UserCenter'}
                    onPress={() => {
            this.setState({
              selectedTab: 'UserCenter',
            });
          }}>
                    {this._renderContent('#21551C', '绿色的tabbar')}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },

});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

module.exports = TabBarExample;
