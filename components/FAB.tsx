import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props {
    label: string;
    position: 'left' | 'right';
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

function FAB({ label, position, count, setCount }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.floatingButton, 
              position === 'right' ? styles.positionRight : styles.positionLeft]}
            onPress={() => setCount(position === 'right' ? count + 1 : count - 1)}
            onLongPress={() => setCount(0)}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}

export default function App() {
    const [count, setCount] = React.useState<number>(0);

    return (
        <View style={appStyles.container}>
            <Text style={appStyles.counter}>{count}</Text>
            <FAB label="Decrementar" position="left" count={count} setCount={setCount} />
            <FAB label="Incrementar" position="right" count={count} setCount={setCount} />
        </View>
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
        right: 60,
    },
    positionLeft: {
        left: 60,
    },
});

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    counter: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
