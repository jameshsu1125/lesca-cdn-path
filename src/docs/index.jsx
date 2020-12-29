import React from 'react';
import { render } from 'react-dom';
import { cdn_install, Path } from './../lib/index';

import './styles.css';

cdn_install('https://dlcdnwebimgs.asus.com/files/media/6570DD19-B43C-4496-9A24-53CBFB320D9B/');
console.log(Path(require('./img0.jpg')));

function Demo() {
	return <></>;
}

render(<Demo />, document.getElementById('app'));
