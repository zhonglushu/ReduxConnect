/**
 * Created by rambo.huang on 18/4/7.
 */
import 'babel-polyfill'; //支持浏览器不支持的新的API

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

render(
    <Root />,
    document.getElementById('root')
);