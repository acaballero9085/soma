import styled from 'styled-components'

const fontMap = {
  h1: '48px',
  h2: '22px',
  h3: '17px',
  p: '13px',
}

const colorMap = {
  textDark: '#2c343b',
  textLight: '#fff',
  textPrimary: '#f2745f',
}

const TextWrapper = styled.div`
  color: ${props => colorMap[props.color] || '#2c343b'};
  font-size: ${props => fontMap[props.variant] || '22px'};
`

const Text = (props) => (
  <TextWrapper {...props}>
    {props.children}
  </TextWrapper>
)

export default Text
