import { Meta, Story } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
	title: 'components/Button',
	component: Button,
	argTypes: {
		onClick: {
			action: 'Кнопка нажата',
		},
	},
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
	return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	view: 'primary',
	children: 'Нажми меня!',
};

export const Secondary = Template.bind({});
Secondary.args = {
	view: 'secondary',
	children: 'Нажми меня!',
};
Secondary.parameters = {
	docs: {
		storyDescription: 'Побочная кнопка',
	},
};

export const Disabled = Template.bind({});
Disabled.args = {
	view: 'primary',
	disabled: true,
	children: 'Нажми меня!',
};
Disabled.parameters = {
	docs: {
		storyDescription: 'Неактивная кнопка',
	},
};
