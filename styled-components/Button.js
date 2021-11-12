import styled from 'styled-components'

const buttonVariantsMap = {
  primary: {
    background: '#f2745f',
    color: '#fff',
  },
  secondary: {
    background: '#eaf0ff',
    color: '#363e50',
  },
  white: {
    background: '#fff',
    color: '#f2745f',
  },
  outline: {
    background: 'rgba(0, 0, 0, 0)',
    color: '#fff',
  },
}

const ButtonWrapper = styled.button`
  display: inline-block;
  background-color: ${props => (buttonVariantsMap[props.variant]?.background || '#fff')};
  color: ${props => (buttonVariantsMap[props.variant]?.color || '#fff')};
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 3px;
  text-decoration: none;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
`

const Button = (props) => (
  <ButtonWrapper {...props}>
    {props.children}
  </ButtonWrapper>
)

export default Button
