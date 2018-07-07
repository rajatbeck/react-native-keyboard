/**
 * Created by rajatmareclbeck on 06/07/18.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
    Dimensions,
    Platform
} from 'react-native';
import {Container, Content, Footer} from "native-base";
var {width, height} = Dimensions.get('window');
height = Platform.OS === 'android'?height - 80:height-60;

class Screen extends React.Component {


    constructor(props: Props) {
        super();
        this.state = {text: ''}

    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnMount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    _keyboardDidShow() {

    }

    _keyboardDidHide() {

    }

    formatPhoneNumber = (phone) => {
        var phoneTest = new RegExp(/^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/);
        phone = phone.trim();
        var results = phoneTest.exec(phone);
        if (results !== null && results.length > 8) {
            return "+1 " + results[3] + "-" + results[4] + "-" + results[5] + (typeof results[8] !== "undefined" ? " x" + results[8] : "");
        }
        else {
            return phone;
        }
    };

    unformatPhone = (regexFormat) => {
        var arr = regexFormat.split("-");
        var phone = arr[0].substring(arr[0].length - 3) + arr[1] + arr[2];
        return phone
    };

    render() {
        return (

            <Container style={{flex: 1}}>

                <Content >

                    <View style={{
                        flex: 1,
                        height,
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                        <View>

                            <TextInput
                                onFocus={() => {
                                    // if (this.state.text.trim().length === 0)
                                    //     this.setState({text: '$ '})
                                }}
                                underlineColorAndroid='transparent'
                                autoFocus={false}
                                onChangeText={(text) => {
                                    let s = this.formatPhoneNumber(text);
                                    this.setState({text: s})

                                }}
                                returnKeyType="done"
                                keyboardType={'default'}
                                value={this.state.text}
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    width: 200,
                                    marginTop:20
                                }}

                            />

                            <TextInput
                                onFocus={() => {
                                    // if (this.state.text.trim().length === 0)
                                    //     this.setState({text: '$ '})
                                }}
                                underlineColorAndroid='transparent'
                                autoFocus={false}
                                onChangeText={(text) => {
                                    let s = this.formatPhoneNumber(text);
                                    this.setState({text: s})

                                }}
                                returnKeyType="done"
                                keyboardType={'default'}
                                value={this.state.text}
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    width: 200,
                                    marginTop: 50,
                                }}

                            />

                            <TextInput
                                onFocus={() => {
                                    // if (this.state.text.trim().length === 0)
                                    //     this.setState({text: '$ '})
                                }}
                                underlineColorAndroid='transparent'
                                autoFocus={false}
                                onChangeText={(text) => {
                                    let s = this.formatPhoneNumber(text);
                                    this.setState({text: s})

                                }}
                                returnKeyType="done"
                                keyboardType={'default'}
                                value={this.state.text}
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    width: 200,
                                    marginTop: 50,
                                }}

                            />

                            <TextInput
                                onFocus={() => {
                                    // if (this.state.text.trim().length === 0)
                                    //     this.setState({text: '$ '})
                                }}
                                underlineColorAndroid='transparent'
                                autoFocus={false}
                                onChangeText={(text) => {
                                    let s = this.formatPhoneNumber(text);
                                    this.setState({text: s})

                                }}
                                returnKeyType="done"
                                keyboardType={'default'}
                                value={this.state.text}
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    width: 200,
                                    marginTop: 50,
                                }}

                            />


                            <TextInput
                                onFocus={() => {
                                    // if (this.state.text.trim().length === 0)
                                    //     this.setState({text: '$ '})
                                }}
                                underlineColorAndroid='transparent'
                                autoFocus={false}
                                onChangeText={(text) => {
                                    let s = this.formatPhoneNumber(text);
                                    this.setState({text: s})

                                }}
                                returnKeyType="done"
                                keyboardType={'default'}
                                value={this.state.text}
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    width: 200,
                                    marginTop: 50,
                                }}

                            />


                            <TextInput
                                onFocus={() => {
                                    // if (this.state.text.trim().length === 0)
                                    //     this.setState({text: '$ '})
                                }}
                                underlineColorAndroid='transparent'
                                autoFocus={false}
                                onChangeText={(text) => {
                                    let s = this.formatPhoneNumber(text);
                                    this.setState({text: s})

                                }}
                                returnKeyType="done"
                                keyboardType={'default'}
                                value={this.state.text}
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    width: 200,
                                    marginTop: 50,
                                    marginBottom: 20,

                                }}

                            />
                        </View>


                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 50,
                                width,
                                alignItems: 'center',
                                justifyContent:'center',
                                backgroundColor: 'black',
                            }}
                            onPress={() => this.unformatPhone(this.state.text)}>
                            <Text
                                style={{
                                    color: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>Press</Text>
                        </TouchableOpacity>


                    </View>


                </Content>

            </Container>


        );
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Screen