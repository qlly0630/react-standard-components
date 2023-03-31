import {
	peerDependencies,
	plugins,
	GLOBALS,
	banner,
} from './rollup.config.common';
import multiInput from 'rollup-plugin-multi-input';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import autoAdd from 'rollup-plugin-auto-add';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import path from 'path';

export const FORMAT = {
	esm: 'esm',
	umd: 'umd',
};
export const FORMAT_DIR = {
	[FORMAT.esm]: 'esm',
	[FORMAT.umd]: 'dist',
};
export const tsPath = path.resolve(__dirname, './tsconfig.build.json');
export const tsUMDPath = path.resolve(__dirname, './tsconfig.umd.json');

export default [
	{
		input: ['src/**/*'],
		external: peerDependencies,
		plugins: [
			clear({ targets: [FORMAT_DIR[FORMAT.esm]] }),
			multiInput(),
			autoAdd({
				include: [/src\/components\/(((?!\/).)+?)\/index\.tsx/gi],
				inject: [{ content: `import './style/index';` }],
			}),
			typescript({
				tsconfig: tsPath,
				typescript: ttypescript,
			}),
			...plugins,
		],
		output: [
			{
				dir: FORMAT_DIR[FORMAT.esm],
				format: FORMAT.esm,
				sourcemap: true,
			},
		],
	},
	{
		input: 'src/index.tsx',
		plugins: [
			clear({ targets: [FORMAT_DIR[FORMAT.umd]] }),
			autoAdd({
				include: [/src\/components\/(((?!\/).)+?)\/index\.tsx/gi],
				inject: [
					{
						content: `import React from 'react';`,
						skip: [/import.*React.*'react';/g],
					},
					{ content: `import './style/index';` },
				],
			}),
			typescript({
				tsconfig: tsUMDPath,
				typescript: ttypescript,
			}),
			...plugins,
			terser(),
		],
		output: [
			{
				banner,
				dir: FORMAT_DIR[FORMAT.umd],
				format: FORMAT.umd,
				exports: 'named',
				name: 'ActStandardComponents',
				globals: GLOBALS,
			},
		],
	},
];
