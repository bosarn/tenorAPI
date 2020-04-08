import React from 'react';

export default class Gifform extends React.Component {

    constructor(props) {

      super(props);
      this.state = {
        searchStr: {
          value: "",
          error: false
        }
      };//einde state
    } //einde constructor


    handleField = e => {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          value: e.target.value,
          error: false
        }
      });
    };
    submitHandler = e => {
      e.preventDefault();
      if (this.state.searchStr.value !== "") {
        this.props.getGif(this.state.searchStr.value);
      } else {
        this.setState({
          searchStr: {
            ...this.state.searchStr,
            error: true
          }
        });
      }
    };

      
    render() {
        return (
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              className={this.state.error ? "error" : ""}
              value={this.state.searchStr.value}
              onChange={this.handleField}
            />
            <input type="submit" value="search" />
          </form>
        );
      }
}//einde Form
// KEY TENOR F8Y7Y8RTXWM8


// git change please