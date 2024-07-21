import React, { useCallback } from "react";
import { useMemo, useState } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import { styles } from "../../App";


const data = [
  { id: '1', title: 'Fix bug' },
  { id: '2', title: 'Add feature' },
  { id: '3', title: 'Test feature' },
  { id: '4', title: 'Push to git' },
  { id: '5', title: 'Approve PR' }
  ]

const List = () => {
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState(data)


  const renderItem = useMemo(() => {
    
    console.log('renderItem function'); // We console log to check memoizing 
    return ({ item }: any) => (
    <View>

      <Text>{item.title}</Text>

    </View>

    )}, []);

    const handleSearch = useCallback((query) => {
      // this console log should only appear when we are typing in the search bar
      console.log('Calling handleSearch function')
      setSearchQuery(query)
      if (query === '') {

        setFilteredData(data)

      } else {

        setFilteredData(data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())))

      }
    })
       
    console.log('Rendering ListComponent'); 
    // When there is a change in state, this console log should be the only one that appears.
    //  Meaning useMemo is working.
    return (
        <View>
            <Button title="Increment" onPress={() => setCount(count + 1)}></Button>
            <Text>{}</Text>
            <Text>Count:  {count}</Text>
            <Text>{}</Text>
            <TextInput placeholder="What task are you looking for?" value={searchQuery} onChangeText={handleSearch} style={styles.input}/>
            <Text style={styles.textSize}>This is The List</Text>
            <FlatList data={filteredData} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    )
}

export default List