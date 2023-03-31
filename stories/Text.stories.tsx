import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@/components/text';

const meta: ComponentMeta<typeof Text> = {
	title: `组件库/文本组件`,
	component: Text,
};
export default meta;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const base = Template.bind({});

base.args = Text.defaultProps;
