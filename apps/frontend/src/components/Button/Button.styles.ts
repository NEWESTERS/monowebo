import styled, { css } from 'styled-components';

export type ButtonView = 'primary' | 'secondary';

export interface ButtonProps extends StyleProps {
	/** Вид кнопки */
	view: ButtonView;
	/** Кнопка неактивна */
	disabled?: boolean;
}

const primaryButtonStyles = css`
	background-color: #dd5555;
	color: white;

	:hover {
		background-color: #ee6666;
	}

	:active {
		background-color: #cc4444;
	}
`;

const secondaryButtonStyles = css`
	background-color: transparent;
	border: solid 1px #333333;
	color: #333333;

	:hover {
		background-color: #eeeeee;
	}

	:active {
		background-color: #cccccc;
	}
`;

export const Button = styled.button<ButtonProps>`
	box-sizing: border-box;
	border: none;
	height: 40px;
	border-radius: 10px;
	padding: 10px;
	font-size: 16px;
	cursor: pointer;

	${({ view }) => (view === 'primary' ? primaryButtonStyles : secondaryButtonStyles)}

	:disabled {
		cursor: default;
		opacity: 0.5;
		pointer-events: none;
	}
`;
