import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen } from './Constants'
import Field from './Field'
import Btn from './Btn'

const Signup = (props) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 400 }}>
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: 10 }}>Signup</Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 400, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>
                    <Text style={{ color: darkGreen, fontSize: 20, fontWeight: 'bold' }}> Create a new account </Text>

                    <Field placeholder='First name' />
                    <Field placeholder='Last name' />
                    <Field placeholder='Email / Username' keyboardType={'email-address'} />
                    <Field placeholder='Contact Number' keyboardType={'number'} />
                    <Field placeholder='Password' secureTextEntry={true} />
                    <Field placeholder='Comfirm Password' secureTextEntry={true} />
                    {/* <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Forgot Password?</Text>
                    </View> */}
                    <Btn textColor='white' bgColor={darkGreen} btnLabel={'Signup'} Press={() => {alert('Account Created')
                    props.navigation.navigate('Login')}
                    } />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Already have a account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: darkGreen }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Signup