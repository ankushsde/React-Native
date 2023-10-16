import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'
import Fallback from '../Components/Fallback'

const ToDoScreen = () => {

  //Initialize local state
  const [toDo, setToDo] = useState(' ');
  const [toDoList, setTodDoList] = useState([]);
  const [editedToDo, setEditedToDo] = useState(null)


  // Handle Add 
  const handleAddToDo = () => {
    if (toDo === '') {
      return;
    }
    setTodDoList([...toDoList, { id: Date.now().toString(), title: toDo }])
    setToDo('')
  }
  //Handle Delete 
  const handleDeleteToDo = (id) => {
    const updateToDoList = toDoList.filter((todo) => todo.id !== id)
    setTodDoList(updateToDoList)
  }

  //Handle Edit 
  const handleEditToDo = (toDo) => {
    setEditedToDo(toDo)
    setToDo(toDo.title)
  }

  //Handle Update 
  const handleUpdateToDo = () => {
    const updateToDos = toDoList.map((item) => {
      if (item.id === editedToDo.id) {
        return { ...item, title: toDo }
      }
      return item


    })
    setEditedToDo(null)
    setTodDoList(updateToDos)
    setToDo('')
  }

 // Rendering List
  const renderToDos = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: '#1e90ff',
        borderRadius: 3,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: 'row',
        alignContent: 'center',
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      }}>

        <Text style={{ fontSize: 20, fontWeight: '400', color: '#fff', flex: 1 }}>{item.title}</Text>
        <IconButton icon='pencil' iconColor='#fff' onPress={() => handleEditToDo(item)} />
        <IconButton icon='trash-can' iconColor='#fff' onPress={() => handleDeleteToDo(item.id)} />
      </View>
    )
  }

  return (
    <View style={{ marginHorizontal: 16, marginTop: 100 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'blue',
          borderRadius: 4,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        placeholder='Add a task'
        value={toDo}
        onChangeText={(userText) => setToDo(userText)}
      />
      {
        editedToDo ? 
         <TouchableOpacity
          style={{
            backgroundColor: 'black',
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: 'center',

          }}
          onPress={() => handleUpdateToDo()}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              fontWeight: 'bold'
            }}
          >Save</Text>
         </TouchableOpacity> 
         :
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 6,
              paddingVertical: 8,
              marginVertical: 34,
              alignItems: 'center',

            }}
            onPress={() => handleAddToDo()}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold'
              }}
            >Add</Text>
          </TouchableOpacity>
      }

      {/* Render to do list */}
      <FlatList
        data={toDoList}
        renderItem={renderToDos}
      />
      {
        toDoList.length <= 0 && <Fallback />
      }
    </View>
  )
}

export default ToDoScreen

const styles = StyleSheet.create({})