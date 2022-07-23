import React from 'react';

import { Component } from 'react';



class ProfileStatus extends Component {

  state = {
    editMode: false,
    text: this.props.status,
  };

  addText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });

    this.props.upDateStatus(this.state.text);
  };

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
    
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              
              onChange={this.addText}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.text}
            />
          </div>
        )}
      </div>
    );
  }
};

export default ProfileStatus;
 