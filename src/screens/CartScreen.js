import React from 'react';
import { View, Text } from 'react-native';

const CartScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 64,
        // flex: 1,
        marginTop: 64,
        alignItems: 'center',
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
        <Text>Workspace 1</Text>
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
        <Text>Teste</Text>
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
        <Text>Workspace 2</Text>
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
        <Text>Workspace 4</Text>
      </View>
    </View>
  );
};

// marginLeft: dimensions.spacingXXXSmall16,
// backgroundColor: colors.neutralColorWhite,
// width: `48% - ${dimensions.spacingXXXSmall16}`,
// height: '7.7rem',
// borderRadius: dimensions.spacingNano8,
// marginTop: dimensions.spacingXXXSmall16,
// padding: dimensions.spacingNano8,

// shadowColor: colors.neutralColorUltraDark,
// shadowOffset: { width: 0, height: 2 },
// shadowOpacity: 0.24,
// shadowRadius: dimensions.spacingNano8,
// elevation: 4,

export default CartScreen;
