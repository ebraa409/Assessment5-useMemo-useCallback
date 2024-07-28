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



    const renderItem = ({item}) => {
      return (
        <View>

        <Text>{item.title}</Text>
  
      </View>
      )
    }

    const memoizedData = useMemo(() => renderItem,[searchQuery, data])

    const handleSearch = useCallback((query) => {
      setSearchQuery(query)
      if (query === '') {

        setFilteredData(data)

      } else {

        setFilteredData(data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())))
        
      }
    }, [data])
       

    return (
        <View>
            <Button title="Increment" onPress={() => setCount(count + 1)}></Button>
            <Text>{}</Text>
            <Text>Count:  {count}</Text>
            <Text>{}</Text>
            <TextInput placeholder="What task are you looking for?" value={searchQuery} onChangeText={handleSearch} style={styles.input}/>
            <Text style={styles.textSize}>This is The List</Text>
            <FlatList data={filteredData} renderItem={memoizedData} keyExtractor={item => item.id}/>
        </View>
    )
}

export default List