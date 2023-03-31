import { create } from '@storybook/theming';
import pkg from '../../package.json';

export default create({
  base: 'light',
  brandTitle: `小世界运营活动组件库v.${pkg.version}`,
  brandUrl: 'https://git.woa.com/yuheng/yuheng-act-lib',
});