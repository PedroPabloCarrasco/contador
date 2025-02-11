import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
    label?: string;
    position?: 'left' | 'right';
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function FAB({ label = "Incrementar", position = 'right', count, setCount }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.floatingButton, 
              position === 'right' ? styles.positionRight : styles.positionLeft]}
            onPress={() => setCount(count + 1)}
            onLongPress={() => setCount(0)}
        >
            <Text style={styles.buttonText}>{label ? `${label} +1` : "+1"}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558F',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    positionRight: {
        right: 20,
    },
    positionLeft: {
        left: 20,
    },
});
