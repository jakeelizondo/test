import React, { Component } from 'react';
import arrowIcon from '../../assets/arrow.png';
import './DropDown.css';

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: false,
      headerTitle: this.props.title,
    };
  }

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  selectItem = (item) => {
    const { resetThenSet } = this.props;
    const { title } = item;

    this.setState(
      {
        headerTitle: title,
        isListOpen: false,
      },
      () => resetThenSet(title)
    );
  };

  render() {
    const { isListOpen, headerTitle } = this.state;
    const { list } = this.props;

    return (
      <div className="dd-wrapper">
        <button type="button" className="dd-header" onClick={this.toggleList}>
          <div className="dd-header-title">{headerTitle}</div>
          <img src={arrowIcon} alt="drop-down-arrow" />
        </button>
        {isListOpen && (
          <div className="dd-list-container">
            <div className="dd-list">
              {list.map((item) => (
                <button
                  type="button"
                  className="dd-list-item"
                  key={item.id}
                  onClick={() => this.selectItem(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
