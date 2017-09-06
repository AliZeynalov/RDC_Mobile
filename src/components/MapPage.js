/**
 * Created by alizeynalov on 06/09/2017.
 */
import React, {Component} from 'react';
import {Dimensions, AsyncStorage,Picker,Alert,TouchableOpacity} from 'react-native';
import {Container, Form, H3, Header, Footer, Button, Text, Spinner,Card,Left,Right, Body,Content,ListItem, List, Radio,View, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class MapPage extends Component {

    componentWillMount()
    {
        console.log(this.props.userID, this.props.description, this.props.photo);
    }

    render()
    {
        return(
            <View>
                <Text>
                    Welcome to the Map Page!
                </Text>
            </View>
        );
    }


}
