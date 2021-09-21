import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      //backgroundColor: 'lightgrey'
  }
})

export default Header