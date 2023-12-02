import { View, Text, Pressable } from 'react-native'
import { React, useState } from 'react'
import styles from './styles'


const GuestsPage = () => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    return (
        <View>

            <View style={styles.row}>
                <View>
                    <Text style={styles.typeTitle}>Adults</Text>
                    <Text style={styles.secondaryTitle}>Ages 13 or above </Text>
                </View>
                <View style={styles.buttonRow}>
                    <Pressable
                        onPress={() => setAdults(Math.max(0, adults - 1))}
                        style={styles.button}
                    >
                        <Text style={styles.operator}>-</Text>
                    </Pressable>
                    <Text style={styles.total}>{adults}</Text>
                    <Pressable
                        onPress={() => setAdults(adults + 1)}
                        style={styles.button}
                    >
                        <Text style={styles.operator}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.typeTitle}>Children</Text>
                    <Text style={styles.secondaryTitle}>Ages 2 - 12</Text>
                </View>
                <View style={styles.buttonRow}>
                    <Pressable
                        onPress={() => setChildren(Math.max(0, children - 1))}
                        style={styles.button}
                    >
                        <Text style={styles.operator}>-</Text>
                    </Pressable>
                    <Text style={styles.total}>{children}</Text>
                    <Pressable
                        onPress={() => setChildren(children + 1)}
                        style={styles.button}
                    >
                        <Text style={styles.operator}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.typeTitle}>Infants</Text>
                    <Text style={styles.secondaryTitle}>Under 2</Text>
                </View>
                <View style={styles.buttonRow}>
                    <Pressable
                        onPress={() => setInfants(Math.max(0, infants - 1))}
                        style={styles.button}
                    >
                        <Text style={styles.operator}>-</Text>
                    </Pressable>
                    <Text style={styles.total}>{infants}</Text>
                    <Pressable
                        onPress={() => setInfants(infants + 1)}
                        style={styles.button}
                    >
                        <Text style={styles.operator}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default GuestsPage