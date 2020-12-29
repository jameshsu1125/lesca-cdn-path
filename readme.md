[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-cdn-path --save
```

# Usage

```javascript
import { cdn_install, Path } from 'lesca-cdn-path';

cdn_install('https://dlcdnwebimgs.asus.com/files/media/6570DD19-B43C-4496-9A24-53CBFB320D9B/');

<img src={Path(require('./img0.png'))} />; // localhost => './img0.png'; not localhost => 'https://dlcdnwebimgs.asus.com/files/media/6570DD19-B43C-4496-9A24-53CBFB320D9B/img0.png';
```

# Methods

| method           | options |        description         | default |
| :--------------- | :-----: | :------------------------: | ------: |
| cdn_install(url) |   url   |     set absolute path      |         |
| Path( require )  | require | relative path(file-loader) |         |
