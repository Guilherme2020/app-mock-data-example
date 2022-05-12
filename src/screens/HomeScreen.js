import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');
  useEffect(() => {
    async function getProducts() {
      const bearerValue = await AsyncStorage.getItem('bearer');
      const response = await axios.get('http://localhost:8000/products', {
        headers: {
          Authorization: `Bearer ${JSON.parse(bearerValue)}`,
        },
      });
      setProducts(response.data);
    }
    async function getUsers() {
      const bearerValue = await AsyncStorage.getItem('bearer');
      const response = await axios.get('http://localhost:8000/users', {
        headers: {
          Authorization: `Bearer ${JSON.parse(bearerValue)}`,
        },
      });
      setUsers(response.data);
    }
    getProducts();
    getUsers();
  }, []);

  useEffect(() => {
    async function getInfoStorage() {
      const role = await AsyncStorage.getItem('role');
      const parseRole = JSON.parse(role);
      console.log('parseRole', parseRole);
      setRole(parseRole);
    }
    getInfoStorage();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
            }}>
            Hello
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        {role === 'admin' ? (
          <View
            style={{
              paddingLeft: 16,
              paddingRight: 16,
            }}>
            <Text>Role Admin: Lista de usuários</Text>
            {users?.map(user => (
              <View
                style={{
                  width: '100%',
                  height: 20,
                  marginTop: 30,
                }}>
                <Text>
                  {user?.id}- {user.name}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <View
            style={{
              paddingLeft: 16,
              paddingRight: 16,
            }}>
            <Text>Role User: Lista de Produtos</Text>
            {products?.map(product => (
              <View
                style={{
                  width: '100%',
                  height: 20,
                  marginTop: 30,
                }}>
                <Text>
                  {product?.id}- {product.name}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
