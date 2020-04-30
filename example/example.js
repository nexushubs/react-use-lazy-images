import React from "react";
import { render } from "react-dom";

import { useLazyImages } from "../build/main";
const imageFile = require('./example.png');
const photon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=';

const App = () => {
  const ref = useLazyImages({placeholderSrc: photon});

  return (
    <div ref={ref}>
      <img
        src={imageFile}
      />
    </div>
  );
}

render(<App />, document.getElementById('root'));
