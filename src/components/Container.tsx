import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={className ? `px-[100px] ${className}` : 'px-[100px]'}>{children}</div>
}

export default Container
