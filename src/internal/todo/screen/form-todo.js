import React, { PureComponent } from "react";
import { FlatList, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../duck/todo";

class FormTodo extends PureComponent {
  state = {
    todo: ""
  };

  _renderItemTodo = ({ item }) => {
    console.log(item);
    return <Text>{item.todo}</Text>;
  };

  _listHeaderComponentTodo = () => {
    return (
      <React.Fragment>
        <TextInput
          value={this.state.todo}
          onChangeText={val =>
            this.setState({
              todo: val
            })
          }
        />
        <Button
          title={"Submit"}
          onPress={() => {
            const { todo } = this.state;
            this.setState({
              todo: ""
            });
            this.props.addTodo({ todo });
          }}
        />
      </React.Fragment>
    );
  };

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.todo.todos}
        renderItem={this._renderItemTodo}
        ListHeaderComponent={this._listHeaderComponentTodo}
        contentContainerStyle={{
          flex: 1
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  {
    addTodo
  }
)(FormTodo);
