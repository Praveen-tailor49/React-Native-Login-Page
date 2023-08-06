import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen } from './Constants'
import Field from './Field'
import Btn from './Btn'

const Login = (props) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 400 }}>
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Login</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 400, borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center' }}>
                    <Text style={{ color: darkGreen, fontSize: 40, fontWeight: 'bold' }}> Welcome back </Text>
                    <Text style={{ color: "gray", fontSize: 14, fontWeight: 'bold', marginBottom: 20, }}>Login to your account</Text>
                    <Field placeholder='Email / Username' keyboardType={'email-address'} />
                    <Field placeholder='Password' secureTextEntry={true} />
                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password?</Text>
                    </View>
                    <Btn textColor='white' bgColor={darkGreen} btnLabel={'Login'} Press={() => alert('Login')} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{fontSize:16, fontWeight:'bold', }}>Don't have a account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={{fontSize:16, fontWeight:'bold', color:darkGreen }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Login