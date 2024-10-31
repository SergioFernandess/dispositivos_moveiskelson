import { View, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio3 = () => {
  return (
    <View style={styles.container}>
      <View style= {[styles.box, {width: 50, backgroudColor: 'powderblue'}]}/>
      <View style={[styles.flexBox, {backgroudColor: 'skyblue'}]}/>
      <View style={[styles.box, {backgroundColor: 'steelblue', width: 50}]}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'ron',
        height: '100%'
    },
    flexBox: {
        flex: 1,
    }
})
export default Exercicio3