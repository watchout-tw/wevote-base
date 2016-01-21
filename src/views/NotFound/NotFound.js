import React, {Component} from 'react';
import {Link} from 'react-router';
export default class NotFound extends Component {
  render() {
  	const styles = require('./NotFound.scss');
    return (
        <div className={styles.wrap}>
            404
        </div>
    );
  }
}
