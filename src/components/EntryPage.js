import React, {Component} from 'react';
import {Dimensions, AsyncStorage,Picker,Alert,TouchableOpacity} from 'react-native';
import {Container, Form, H3, Header, Footer, Button, Text, Spinner,Card,Left,Right, Body,Content,ListItem, List, Radio,View, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get("window"),
    vw = width / 100
vh = height / 100

export default class EntryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

    }


    getDetails()
    {
        var Url = "https://rdc-partner-server.herokuapp.com/test/All";
        return fetch(Url, {method: "GET"})
            .then((response) => response.json())
            .then((responseJson) => {
            console.log("GIRDI");
                this.setState({users: responseJson},()=>console.log("user state",this.state.users));
            })
            .done();
    }



    componentDidMount()
    {
        this.getDetails();
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
                        {this.state.users.map((user,i)=>{
                            return(
                                <ListItem key={i}>
                                    <Thumbnail square size={80} source={{ uri: user.img}} />
                                    <Body>
                                    <Text>{user.name}</Text>
                                    <Text note>{user.description}</Text>
                                    </Body>
                                    <Right>
                                        <TouchableOpacity onPress={()=>Actions.mapPage({userID: user.id, description: user.description, photo: user.img})}>
                                            <Text>View</Text>
                                        </TouchableOpacity>
                                    </Right>
                                </ListItem>
                            );
                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}



