import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import {createTransitionHook} from '../universalRouter';
import './normalize.scss';

const title = "test";
const description = "test";

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:title': title,
      'og:description': description,
      'og:site_name': title
    }
  }
};
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };
  componentWillMount() {
    const {router, store} = this.context;
    this.transitionHook = createTransitionHook(store);
    router.addTransitionHook(this.transitionHook);
  }

  componentWillUnmount() {
    const {router} = this.context;
    router.removeTransitionHook(this.transitionHook);
  }

  componentDidMount(){
    if(window){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
        // ga('create', 'UA-xxxxxx', 'auto');
        // ga('require', 'displayfeatures');
        // ga('send', 'pageview');
    }
  }
  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...meta}/>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }

}
