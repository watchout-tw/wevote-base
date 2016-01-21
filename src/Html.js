import React, {Component, PropTypes} from 'react';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';
const cdn = '//cdnjs.cloudflare.com/ajax/libs/';

const title = "test";
const description = "test";
const facebookURL = "https://www.facebook.com/WatchOutTW";

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.object,
    store: PropTypes.object
  }

  render() {
    const {assets, component, store} = this.props;
    const content = React.renderToString(component);
    return (
      <html lang="zh-TW">
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="og:site_name" content={title}/>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta property="og:image" content="http://wevote.tw/facebook.jpg"/>
          <meta property="og:type" content="website"/>
          <meta property="article:publisher" content={facebookURL}/>
          <meta property="article:author" content={facebookURL}/>
          
          {DocumentMeta.renderAsReact()}

          <link rel="shortcut icon" href="/favicon.ico" />

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>
          )}

         
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script src={assets.javascript.main}/>
          <script dangerouslySetInnerHTML={{__html: ``}} />
          <script async src='//www.google-analytics.com/analytics.js'></script>
        </body>
      </html>
    );
  }
}
