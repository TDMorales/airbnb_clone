import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = ({ post }) => {
    // console.warn(post)
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image style={styles.image} source={{ uri: post.image }} />
            {/* Bedroom  */}
            <Text style={styles.details}>{post.bed} bed · {post.bedroom} bathroom</Text>
            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>{post.type} · Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            {/* Prices */}
            <Text style={styles.prices}>${post.newPrice} / night </Text>
            {/* Total Price */}
            <Text style={styles.total}>${post.totalPrice} total</Text>
        </View>
    )
}

export default Post;