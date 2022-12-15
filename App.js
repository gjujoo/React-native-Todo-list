import { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   ScrollView,
} from 'react-native';
import Task from './Components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addPlanhandler = () => {

    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const endTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }
  

  return (
    
    //배경화면 뷰
    <View style={styles.mainView}>
    <ScrollView>
      {/*제목 */}
      <Text style={styles.title}>
        Todolist
      </Text>

    <View style={styles.subView}>
    
    <View style={styles.insertView}>

    {
      taskItems.map((item, index) => {
        return (
          <TouchableOpacity key={index}
            onPress={() => endTask(index)}>
              
          </TouchableOpacity>
        )
      })
    }
    </View>
  </View>
  </ScrollView>
    

      {/*텍스트 인풋 */}
       <TextInput
        placeholder="Add your plan!"
        style = {styles.input}
        onChangeText={text =>setTask(text)}
        value={task}
      />
      
      {/*Add텍스트에 onPress 기능 */}
      <TouchableOpacity onPress={() => addPlanhandler()}>
        <View style={styles.addButton}>
          <Text style={styles.addText}>Add</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  //전체 배경 화면
  mainView: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'black',
  },
  
  //제목
  title : {
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent : 'center',
    marginTop : 70,
    color: 'white'
  
  },
  
  //각종 UI가 들어가는 뷰
  subView : {
    flex: 1,
    paddingVertical: 30,
    marginVertical: 30,
  },

  //입력창과 버튼 뷰
  insertView : {
    
    justifyContent: 'space-between',
    flexDirection: 'row',
    
  },
  
  //입력 창
  input : {
    backgroundColor : 'white',
    width: 300,
    paddingVertical: 5,
    paddingHorizontal: 10,
    
  },

  //Add버튼
  addButton : {
    backgroundColor: 'pink',
    width: 30,
    height: 40,
    
    
  },

  //add버튼 ui
  addText: {
    marginTop: 10,
    color: 'white'
  },
});
