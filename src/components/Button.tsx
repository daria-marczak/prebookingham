import * as React from 'react';

export interface IButtonProps {
  children?: React.ReactNode;
  onClick?: (event: any) => void;
}

const styles = {
  border: '1px solid #333',
  borderRadius: 3,
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: '15px',
  padding: '3px  10px',
  margin: 10,
  fontFamily: 'Raleway, sans-serif'
};

const Button: React.SFC<IButtonProps> = (props: any) => (
  <button onClick={props.onClick} style={styles} type="button">
    {props.children}
  </button>
);

Button.defaultProps = {
  children: null,
  onClick: () => {}
};

export default Button;
