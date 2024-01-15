import { useEffect, useState } from "react"
import Clock from "./Clock"

export default function ColorTicToc() {
  const colors = [
    'lightcoral',
    'midnightblue',
    'rebeccapurple'
  ]
  const [colorId, setColorId] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <>
      <label htmlFor="color">Selecciona un color:</label>
      <select name="color" id="color" value={colorId} onChange={e => setColorId(e.target.value)}>
        {colors.map((color, idx) => (
          <option value={idx} key={idx}>{color}</option>
        ))}
      </select>
      <Clock color={colors[colorId]} time={time} />
    </>
  )
}