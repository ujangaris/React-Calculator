import { useState } from "react"

function App() {
  // Hook calculation dan result
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ["/", "*", "+", "-", "."]

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return
    }
    setCalc(calc + value)
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = () => {
    const digits = []
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}{" "}
        </button>
      )
    }
    return digits
  }
  // Fungsi untuk menghitung hasil
  const calculate = () => {
    setCalc(eval(calc).toString())
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result} </span> : ""}
          {calc || "0"}{" "}
        </div>{" "}
        {/* Memberi nilai pada button operator  */}
        <div className="operators">
          <button onClick={() => updateCalc("/")}> /</button>
          <button onClick={() => updateCalc("*")}> * </button>{" "}
          <button onClick={() => updateCalc("+")}> + </button>{" "}
          <button onClick={() => updateCalc("-")}> - </button>{" "}
          <button> DEL </button>{" "}
        </div>{" "}
        {/* Memberi nilai pada button  digit */}
        <div className="digits">
          {" "}
          {createDigits()}
          <button onClick={() => updateCalc("0")}> 0 </button>{" "}
          <button onClick={() => updateCalc(".")}> . </button>{" "}
          {/* memasang function calculate */}
          <button onClick={calculate}>= </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  )
}

export default App
