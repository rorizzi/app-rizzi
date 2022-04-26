import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-web'
import Item from '../components/Item'

const Layout = () => {
  return (
    <View style={styles.containercontainer}>
        <View style={styles.topContainer}>
            <TextInput style={styles.input}/>
            <Button title='Add Todo' />
        </View>
        <View>
            <Item item={{id: 1, todo: 'Finnish some work issues (tickets)'}} />
        </View>
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 150,
        paddingHorizontal: 8
    }
})

