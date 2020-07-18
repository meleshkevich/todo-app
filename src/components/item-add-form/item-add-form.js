import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

constructor (props) {
  super(props);
  this.state = {
    label: ''
  }
  this.onLabelChange = this.onLabelChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
}

   

  onLabelChange (e) {
    this.setState ({
      label: e.target.value
    })
  };

  onSubmit (e) {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>

              <input type="text"
                className="form-control new-todo-label"
                value={this.state.label}
                onChange={this.onLabelChange}
                placeholder="What needs to be done?" />

              <button type="submit"
                className="btn btn-outline-secondary">
                  Add
              </button>
      </form>
    );
  }
}