import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import DocumentMeta from 'react-document-meta';

import people_name2id from '../../utils/people_name2id';
import PeoplePhoto from '../../components/PeoplePhoto/PeoplePhoto';

import getData from '../../data/getData';
const {candidates} = getData();

export default class Home extends Component {
  constructor(props){super(props)
      this.state = {
      }
  }
  
  render() {
    
    const styles = require('./Home.scss');
    
    return (
      <div className={styles.home}>
          <div className={styles.innerWrap}>
            HELLO
          </div>
          <div className={styles.invisible}>
              <Link to={`/404`}>404</Link>
          </div>
      </div>
    );
  }
}
