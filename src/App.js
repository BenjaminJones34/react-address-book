import "./App.css"
import { useState } from "react"

const App = () => {
  const [numbers, setNumbers] = useState({arr: [], value: ""});

  const AddNumber = (event) => {
    if (event.code === "Enter") {
      let temp = numbers.arr
      temp.push(numbers.value)
      setNumbers({arr: temp, value: ""})
      numbers.value = ""
    }
  }

  const NumbersList = () => {
      return numbers.arr.map((number) => <li>{number}</li>)
  }

  const handleChange = (event) => {
    setNumbers({arr: numbers.arr, value: event.target.value})
  }

  return (
    <div>
      <div>
        <input type="text" name="number" value={numbers.value} onChange={handleChange} onKeyPress={AddNumber} />
        <button onClick={AddNumber}>Submit</button>
      </div>
      <div>
        <ul>
          <NumbersList />
        </ul>
      </div>
    </div>
  )
}

export default App