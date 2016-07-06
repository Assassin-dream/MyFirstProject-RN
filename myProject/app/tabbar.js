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

var TabBarExample = React.createClass({

    getInitialState: function() {
        return {
            selectedTab: 'redTab',
            notifCount: 1, //这是tabbar上的角标数值
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
                tintColor="white"
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                    title="Blue Tab"
                    systemIcon="favorites"
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
                    {this._renderContent('grey', '灰色的tabbar')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="history"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}>
                    {this._renderContent('#783E33', '红色的tabbar')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="more"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
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
