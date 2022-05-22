import React, {useState} from 'react';
import '../src/style.css';

const App = () => {
    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [currentOperation,setCurrentOperation] = useState("")
    const [result, setResult] = useState(0)

    const clickNumber = (val) => {
        if (currentOperation === "") {
            setNumber1(number1 + val)
        }else{
            setNumber2(number2 + val)
        }
    }

    const clickOperation = (val) => {
        setCurrentOperation(val)
    }

    const getResult = () => {
        switch (currentOperation) {
            case "+":
                let suma = (Number(number1) + Number(number2))
                if (suma <= 999999999 && suma >= 0) {
                    let suma_resultado = suma.toString().substring(0,9)
                    setResult(suma_resultado)
                }
                else{
                    setResult("ERROR")
                }
                break;
            case "-":
                let resta = (Number(number1) - Number(number2))
                if (resta <= 999999999 && resta >= 0) {
                    let resta_resultado = resta.toString().substring(0,9)
                    setResult(resta_resultado)
                }
                else{
                    setResult("ERROR")
                }
                break;
            case "*":
                let _m = (Number(number1) * Number(number2))
                if (_m <= 999999999 && _m >= 0) {
                    let m_resultado = _m.toString().substring(0,9)
                    setResult(m_resultado)
                }
                else{
                    setResult("ERROR")
                }
                break;
            case "/":
                let resultado = (Number(number1) / Number(number2))
                if (resultado<= 999999999 && resultado >= 0) {
                    let nuevoResultado = resultado.toString().substring(0,9)
                    setResult(nuevoResultado)
                }
                else{
                    setResult("ERROR")
                }
                break;
            case "%":
                let modulo = (Number(number1) % Number(number2))
                if (modulo <= 999999999 && modulo >= 0) {
                    let modulo_resultado = modulo.toString().substring(0,9)
                    setResult(modulo_resultado)
                }
                else{
                    setResult("ERROR")
                }
                break;
            case "+/-":
                setResult("-" + number1)
                break;
            default:
                break;
        }
    }

    const allClear = () => {
        setNumber1("")
        setNumber2("")
        setCurrentOperation("")
        setResult("")
    }

    const deleteNumber = () => {
        if (currentOperation === "") {
          setNumber1(number1.toString().slice(0, -1));
        } else {
          setNumber2(number2.toString().slice(0, -1));
        }
      };

    return (
        <div className='App'>
            <h1 className='Title'>Calculadora con React</h1>
            <div className='calculator-grid'>
                <div className='output'>
                    <div className='previous-operand'>{currentOperation ? number1 + currentOperation + number2: ""}</div>
                    <div className='current-operand'>{result ? result : (!currentOperation ? number1 : number2 )}</div>
                </div>
                <button onClick={allClear} className='span-two'>AC</button>
                <button onClick={deleteNumber}>DEL</button>
                <button onClick={() => {clickOperation("/")}}>/</button>
                <button onClick={() => {clickNumber(7)}}>7</button>
                <button onClick={() => {clickNumber(8)}}>8</button>
                <button onClick={() => {clickNumber(9)}}>9</button>
                <button onClick={() => {clickOperation("*")}}>*</button>
                <button onClick={() => {clickNumber(4)}}>4</button>
                <button onClick={() => {clickNumber(5)}}>5</button>
                <button onClick={() => {clickNumber(6)}}>6</button>
                <button onClick={() => {clickOperation("+")}}>+</button>
                <button onClick={() => {clickNumber(1)}}>1</button>
                <button onClick={() => {clickNumber(2)}}>2</button>
                <button onClick={() => {clickNumber(3)}}>3</button>
                <button onClick={() => {clickOperation("-")}}>-</button>
                <button onClick={() => {clickOperation("%")}}>%</button>
                <button onClick={() => {clickOperation("+/-")}}>+/-</button>
                <button onClick={() => {clickNumber(".")}}>.</button>
                <button onClick={() => {clickNumber(0)}}>0</button>
                <button onClick={getResult} className='span-two'>=</button>
            </div>
        </div>
    )
}

export default App;