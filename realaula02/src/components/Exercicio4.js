import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = () => {
  return (
    <View style= {styles.container}>
      <View style= {[styles.box, {backgroundColor: 'coral'}]}/>
      <View styles={[styles.box, {backgroundColor: 'orchid'}]}/>
      <View style= {[styles.box, {backgroundColor: 'lightseagreen'}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        flex: 1,
    }
})

export default Exercicio4