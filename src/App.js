import React, { Component } from 'react';
import Station from './imgLoad';
import logo from './logo.svg';

import './App.css';
import "./style.css";

var data = [{
uri: require('./images/d1.jpg'),
title: 'title',
content: "will not generate a traced outline if the image already is base64 encoded. Useful when the inlined base64 representation is enough, and you don't want to bloat your files with unused trace",
},{
uri: require('./images/d2.jpg'),
title: 'title',
content: "will not generate a traced outline if the image already is base64 encoded. Useful when the inlined base64 representation is enough, and you don't want to bloat your files with unused trace",
},{
uri: require('./images/d3.jpg'),
title: 'title',
content: "will not generate a traced outline if the image already is base64 encoded. Useful when the inlined base64 representation is enough, and you don't want to bloat your files with unused trace",
},{
uri: require('./images/d4.jpg'),
title: 'title',
content: "will not generate a traced outline if the image already is base64 encoded. Useful when the inlined base64 representation is enough, and you don't want to bloat your files with unused trace",
},{
uri: require('./images/d5.jpg'),
title: 'title',
content: "will not generate a traced outline if the image already is base64 encoded. Useful when the inlined base64 representation is enough, and you don't want to bloat your files with unused trace",
},{
uri: require('./images/d6.jpg'),
title: 'title',
content: "will not generate a traced outline if the image already is base64 encoded. Useful when the inlined base64 representation is enough, and you don't want to bloat your files with unused trace",
},{
uri: require('./images/d7.jpg'),
title: 'title',
content: "will not generate a traced outline if the image already is base64 encoded. Useful when the inlined base64 representation is enough, and you don't want to bloat your files with unused trace",
}]

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[
        {"url":"https://picsum.photos/800/460/?image="+Math.floor(Math.random() * 1084),"loaded":false},
        {"url":"https://picsum.photos/800/460/?image="+Math.floor(Math.random() * 1084),"loaded":false},
        {"url":"https://picsum.photos/800/460/?image="+Math.floor(Math.random() * 1084),"loaded":false},
        {"url":"https://picsum.photos/800/460/?image="+Math.floor(Math.random() * 1084),"loaded":false},
        {"url":"https://picsum.photos/800/460/?image="+Math.floor(Math.random() * 1084),"loaded":false},
        {"url":"https://picsum.photos/800/460/?image="+Math.floor(Math.random() * 1084),"loaded":false},
      ],
    }

  }
  render() {

    return (
      <div>
        <Station {...data[0]} />
        <Station {...data[1]} />
        <Station {...data[2]} />
        <Station {...data[3]} />
        <Station {...data[4]} />
        <Station {...data[5]} />
        <Station {...data[6]} />
      </div>
    );
  }
}

export default App;
