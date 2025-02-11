import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB'; // Importar el componente FAB
import { useState } from 'react';

export default function App() {
  // Definimos el estado para el contador
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>  {/* Mostrar el contador */}
      <FAB count={count} setCount={setCount} />  {/* Agregar el FAB */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
