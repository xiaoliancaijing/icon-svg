/*
 * @Author: your name
 * @Date: 2020-05-21 12:14:19
 * @LastEditTime: 2020-05-21 12:29:02
 * @LastEditors: tianhao
 * @Description: In User Settings Edit
 * @FilePath: \xiaolian_wapc:\icon-svg\src\lib\index.js
 */

/**
 * params:
 * scriptUrl: type:String  content:iconfont Symbol srcUrl
 * type: type of icon
 */
import React, { Component } from 'react';
var customCache = new Set();
function Icon(props, context) {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var scriptUrl = options.scriptUrl,
		_options$extraCommonP = options.extraCommonProps,
		extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
	if (
		typeof document !== 'undefined' &&
		typeof window !== 'undefined' &&
		typeof document.createElement === 'function' &&
		typeof scriptUrl === 'string' &&
		scriptUrl.length &&
		!customCache.has(scriptUrl)
	) {
		var script = document.createElement('script');
		script.setAttribute('src', scriptUrl);
		script.setAttribute('data-namespace', scriptUrl);
		customCache.add(scriptUrl);
		document.body.appendChild(script);
	}

	const iconStyle = {
		width: '1em',
		height: '1em',
		verticalAlign: '-0.15em',
		fill: 'currentColor',
		overflow: 'hidden',
		color: '#fff',
	};
	return (
		<div>
			<svg style={iconStyle} className="iconfont-xlink" aria-hidden="true">
				<use xlinkHref={`#${props.type}`}></use>
			</svg>
		</div>
	);
}
export default Icon;
