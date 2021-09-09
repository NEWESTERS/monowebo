import { FC, ReactNode, MouseEventHandler } from 'react';

import * as Styles from './Button.styles';

export interface ButtonProps extends Styles.ButtonProps {
	/** Событие клика на кнопку */
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
}

/** Просто кнопка */
const Button: FC<ButtonProps> = Styles.Button;

export default Button;
