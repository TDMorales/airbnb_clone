import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = () => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
            {/* Bedroom  */}
            <Text style={styles.details}>1 bed · 1 bathroom</Text>
            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>Entire Flat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            {/* Prices */}
            <Text style={styles.prices}>$45 / night </Text>
            {/* Total Price */}
            <Text style={styles.total}>$90 total</Text>
        </View>
    )
}

export default Post;