import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '@/components/image';

const meta: ComponentMeta<typeof Image> = {
	title: '组件库/图片组件',
	component: Image,
};
export default meta;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const base = Template.bind({});

base.args = Image.defaultProps;
