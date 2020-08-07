import React from "react";
import { observer } from "mobx-react-lite";
import "react-alice-carousel/lib/alice-carousel.css";
import Ver1 from './ver2.js';
import Content from './content.js';

export default observer(() => {
  return (
    <div id="beranda">
      <Ver1 />
      <Content />
    </div>
  )
});
