import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CustomButton from '../components/CustomButton/CustomButton';
import InputField from '../components/InputField/InputField';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    console.log('data', { email, password });
    try {
      const url = 'http://localhost:8000/auth/login';
      const body = {
        email,
        password,
      };
      const response = await axios.post(url, body);
      console.log('response', response.data);
      AsyncStorage.setItem('role', JSON.stringify(response.data?.user.role));
      AsyncStorage.setItem(
        'bearer',
        JSON.stringify(response.data.access_token),
      );

      navigation.navigate('Home');
    } catch (e) {
      console.log('erro', e);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}></View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          onChangeText={value => setEmail(value)}
          label={'Email ID'}
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          onChangeText={value => setPassword(value)}
        />

        <CustomButton label={'Login'} onPress={() => handleLogin()} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}>
              {' '}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
