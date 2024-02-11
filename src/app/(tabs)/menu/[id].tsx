import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Menu = () => {
 const { id } = useLocalSearchParams()
 return (
  <View>
   <Stack.Screen options={{ title: 'Menu' + id }} />

   <Text>{id || 'no id'}</Text>
  </View>
 )
}

export default Menu