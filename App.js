import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Tasks';


export default function App() {

  const [task, setTask]  = useState();
  const [taskItens, setTaskItens] = useState([])

  const handleAddTask = () => {

    Keyboard.dismiss();

    if(task != null){

      let itemsCopy = [...taskItens]
      itemsCopy.unshift(task)

      setTaskItens(itemsCopy)
      setTask(null)

    }

  }

  const completeTask = (index) => {

    let itemsCopy = [...taskItens]
    itemsCopy.splice(index, 1)

    setTaskItens(itemsCopy)

  }

  return (

    <View style = {styles.container}>

      <View style={styles.taskWrapper}>

        <Text style = {styles.selectioTitle1}>Olá,</Text>
        <Text style = {styles.selectioTitle2}>Lucas 👋</Text>

      </View>
    
      <ScrollView style={styles.itens} showsHorizontalScrollIndicator={false}>

        {
          taskItens.map((item, index) => {
            return (
              <TouchableOpacity  key={index} onPress={() => completeTask(index)}>
                <Task text = {item} />
              </TouchableOpacity>
            )
          })
        }
     
      </ScrollView>
      
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style = {styles.writeTask} >

          <TextInput style = {styles.input} placeholder = {'Adicione uma task'}  placeholderTextColor="#FFF"
          value = {task} onChangeText = {text => setTask(text)}>
          </TextInput>

          <TouchableOpacity onPress={() => handleAddTask()}>

            <View style = {styles.add}>
              <Text style = { styles.addText}>+</Text>
            </View>

          </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },

  taskWrapper:{
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  selectioTitle1:{
    fontSize : 35,
    fontWeight: '600',
  },

  selectioTitle2:{
    fontSize : 40,
    fontWeight: 'bold',
  },
  itens:{
    padding: 20,
    marginTop: 10, 
  },

  writeTask:{
    position: 'absolute',
    bottom: 30,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItens: 'center',
    paddingHorizontal: 20,
    
  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#181818',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    width: 250,
    color: '#FFF'
  },

  add:{
    width: 60,
    height: 60,
    backgroundColor: '#181818',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center', 
    
  },

  addText:{
    fontSize: 30,
    color:"#F9F9F9",
  }
});
