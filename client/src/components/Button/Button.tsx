import styled from 'styled-components'
type ButtonProps = {
    onClick?: (e: unknown) => void
    children?: React.ReactNode;
    className?:string
}
function Button({children,className}:ButtonProps) {
  return (
    <Btn className={className}>{children}</Btn>
  )
}

const Btn = styled.button<ButtonProps>`
color: #5C22AD;
font-size: 16px;
font-weight: 400;
line-height: 28px;
word-wrap: break-word;
padding:15px 24px 15px 24px;
`

export default Button