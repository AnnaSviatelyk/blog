import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 88px;
    height: 32px;
    border: none;
    background-color: #333;
    border-radius: 3px;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #fff;
    text-transform: uppercase;
    outline: none;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        background-color: #d3d3d3;
        cursor: not-allowed;
    }
`;

const Button = ({ text, disabled = false, click }: { text: string; disabled?: boolean; click?: any }) => (
    <ButtonStyled disabled={disabled} onClick={click}>
        {text}
    </ButtonStyled>
);

export default Button;
