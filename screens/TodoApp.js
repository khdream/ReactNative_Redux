import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
import Spacer from '../components/Spacer';
import ButtonIcon from '../components/ButtonIcon';

// or any pure javascript modules available in npm
import {Title, Paragraph, Card, Button, TextInput} from 'react-native-paper';
// import { FontAwesome as Icon } from '@expo/vector-icons';

// Import Redux and React Redux Dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {addTodo, deleteTodo} from '../redux/actions';
import * as operatorActionTodo from '../redux/actions';

// Test Data
// const data = [
//   {id: 1, task: "Do this stuff"},
//   {id: 2, task: "Do another stuff"},
// ]

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // todo_list_1: this.props.todo_list_1,
      task: '',
    };
  }

  handleAddTodo = () => {
    let {actions} = this.props;
    actions.addTodo(this.state.task);
    this.setState({task: ''});
  };

  handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  render() {
    const {todo_list_1} = this.props;

    return (
      <View style={styles.container}>
        <Card title="Card Title">
          <Text style={styles.paragraph}>
            ToDo App with React Native and Redux
          </Text>
        </Card>
        <Spacer />
       
        <Card>
          <Card.Content>
            <Title>Add ToDo Here</Title>

            <TextInput
              mode="outlined"
              label="Task"
              value={this.state.task}
              onChangeText={(task) => this.setState({task: task})}
            />
            <Spacer />
            <Button mode="contained" onPress={this.handleAddTodo}>
              Add Task
            </Button>
          </Card.Content>
        </Card>
        <Spacer />
        <FlatList
          data={todo_list_1}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => {
            return (
              <>
                <Card>
                  <Card.Title
                    title={`Task#${item.id}`}
                    // left={(props) => <Icon name="tasks" size={24} color="black" />}
                    right={(props) => (
                      <ButtonIcon
                        iconName="close"
                        color="red"
                        onPress={() => handleDeleteTodo(item.id)}
                      />
                    )}
                  />
                  <Card.Content>
                    <Paragraph>{item.task}</Paragraph>
                  </Card.Content>
                </Card>
                <Spacer />
              </>
            );
          }}
        />
        <Spacer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    todo_list_1: state.todos_1.todo_list_2,
  };
};

const ActionCreators = Object.assign({}, operatorActionTodo);

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
