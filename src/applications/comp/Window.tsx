import './Window.scss'
import { MouseEventHandler, useState } from 'react'
type iPos = {
  x:number,
  y:number
}

type WindowProps = {
  title: string,
  children: React.ReactNode,
  initialPosition: iPos
}

const Window:React.FC<WindowProps> = ({title, children, initialPosition}) => {
  const [position, setPosition] = useState<iPos>(initialPosition || {x:100, y:100})
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const [offset, setOffset] = useState<iPos>({x:0, y:0})
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrag(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }
  const handleMouseUp = () => {
    setIsDrag(false)
  }
  const handleMove = (e: React.MouseEvent) => {
    if(isDrag){
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      })
    }
  }

  return (
    <div
      className='window'
      style={{left: `${position.x}px`, top:`${position.y}px`}}
      onMouseMove={handleMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown}
    >

    </div>
  )
}

export default Window
