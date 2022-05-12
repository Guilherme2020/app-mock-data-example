import React from 'react';
import { View, Text } from 'react-native';

const FavoriteScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 64,
        // flex: 1,
        marginTop: 64,
        // alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginLeft: 16,
          backgroundColor: '#fff',
          width: `41%`,
          // flex: 1,
          height: 100,
          borderRadius: 8,
          marginTop: 16,
          padding: 8,

          shadowColor: '#c3c3c3',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.24,
          shadowRadius: 8,
          elevation: 4,
        }}>
        <Text>Asset </Text>
      </View>
      <View
        style={{
          marginLeft: 16,
          backgroundColor: '#fff',
          width: `41%`,
          borderRadius: 8,
          marginTop: 16,
          padding: 8,
          height: 100,
          shadowColor: '#c3c3c3',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.24,
          shadowRadius: 8,
          elevation: 4,
        }}>
        <Text>Scan de Usuario</Text>
      </View>
      <View
        style={{
          marginLeft: 16,
          backgroundColor: '#fff',
          width: `41%`,
          borderRadius: 8,
          marginTop: 16,
          padding: 8,
          height: 100,
          shadowColor: '#c3c3c3',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.24,
          shadowRadius: 8,
          elevation: 4,
        }}>
        <Text>Scan de Location</Text>
      </View>
      <View
        style={{
          marginLeft: 16,
          backgroundColor: '#fff',
          width: `41%`,
          // height: '40%',
          height: 100,

          borderRadius: 8,
          marginTop: 16,
          padding: 8,

          shadowColor: '#c3c3c3',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.24,
          shadowRadius: 8,
          elevation: 4,
        }}>
        <Text>Scan de Produto</Text>
      </View>
    </View>
  );
};

export default FavoriteScreen;
