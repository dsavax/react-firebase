import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.storeNameRef = React.createRef();
    // this.focusStoreName = this.focusStoreName.bind(this);
    this.goToStore = this.goToStore.bind(this);
  }

  static propTypes = {
    history: PropTypes.object
  };

  // to bind own method use constructor or arrow function
  goToStore = e => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. Get the text from that input
    const storeName = this.storeNameRef.current.value;
    // 3. Change the page to /store/whatever-user-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type='text'
          ref={this.storeNameRef}
          required
          placeholder='Store Name'
          defaultValue={getFunName()}
          // onClick={this.focusStoreName}
        />
        <button type='submit'>Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
