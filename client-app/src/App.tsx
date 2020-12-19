import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

class App extends Component {
  state = {
    values: [],
  };

  async componentDidMount() {
    await axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({
        values: response.data,
      });
    });
  }
  render() {
    return (
      <div className='App'>
        <Header as='h2' icon>
          <Icon name='users' /> <Header.Content>Users </Header.Content>
        </Header>

        {this.state.values.map((v: any) => (
          <List.Item key={v.id}>{v.name} </List.Item>
        ))}
      </div>
    );
  }
}

export default App;
