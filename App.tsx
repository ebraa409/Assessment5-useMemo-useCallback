import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import List from './src/components/List';


function App(): React.JSX.Element {
    
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>useMemo</Text>
      <List/>
    </View>
  )
  }

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    margin: 20
  },
  textSize: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    padding: 20,
    borderColor: 'white',
    borderWidth: 1
  }
})

export default App;
