/*
 * @Author: your name
 * @Date: 2020-05-21 12:16:02
 * @LastEditTime: 2020-05-21 12:26:38
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \xiaolian_wapc:\icon-svg\src\demo\index.js
 */

import React, { Component } from 'react';
import Icon from '../lib/index';

/**
 * params:
 * scriptUrl: type:String  content:iconfont Symbol srcUrl
 * type: type of icon
 */
export default class index extends Component {
	render() {
		return (
			<div>
				<Icon scriptUrl="//at.alicdn.com/t/font_1630619_1zyzsq646ed.js" type="iconFill1" />
			</div>
		);
	}
}
