import React, {Component} from 'react';
import {Dimensions, AsyncStorage,Picker,Alert} from 'react-native';
import {Container, Form, H3, Header, Footer, Button, Text, Spinner,Card,Left,Body,Content,ListItem, List, Radio,View, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get("window"),
    vw = width / 100
vh = height / 100

export default class EntryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }




    componentWillMount()
    {
    }



    render() {
        return(
            // <Container style={{justifyContent: 'center', alignItems: 'center'}}>
            //     <View>
            //         <Text style={{color: 'red'}}>Hi Everyone!</Text>
            //     </View>
            // </Container>
            <Container>
                <Header style={{backgroundColor: 'red'}}/>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
                            <Body>
                            <Text>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
                            <Body>
                            <Text>Sankhadeep</Text>
                            <Text note>Its time to work</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}