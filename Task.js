import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}> </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'White',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justfyContent: 'space-between',
    flexDirection: 'row' 
  },
});

export default Task;