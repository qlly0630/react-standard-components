import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';
import alias from '@rollup/plugin-alias';
import fileSize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import pkg from '../../package.json';

export const GLOBALS = { react: 'React' };
export const peerDependencies = Object.keys(pkg.peerDependencies || {});
export const banner = `/**
 * ${pkg.name} v${pkg.version}
 * @license ${pkg.license}
 * Date: ${new Date().toISOString()}
 */
`;
export const plugins = [
	peerDepsExternal(),
	postcss({
		minimize: true,
		sourceMap: false,
		extensions: ['.less', '.css'],
		use: [['less']],
	}),
	alias({
		entries: {
			'@': path.resolve(path.resolve(__dirname), '../../src'),
		},
	}),
	resolve(),
	commonjs(),
	fileSize(),
];

export default {
	input: ['src/**/*'],
	external: peerDependencies,
	plugins,
	output: [
		{
			dir: 'esm',
			format: 'esm',
			sourcemap: true,
		},
	],
};
