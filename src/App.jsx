import { useEffect } from 'react'
import './App.css'

function App() {
  const inputs = document.querySelectorAll('input')
  

  useEffect(() => {
    

    inputs.forEach((input, index) => {
      // input.addEventListener('paste', handlePaste)
      input.addEventListener('keyup', handleChange)
    })

    return () => {
      inputs.forEach((input, index) => {
        // input.removeEventListener('paste', handlePaste)
        input.removeEventListener('keyup', handleChange)
      })
    }

  }, [])

  const handleChange = (e) => {
    const input = e.target

    if(input.value > 0) {
      input.nextElementSibling.focus()
    }

   if(e.key === 'Backspace') {
    input.previousElementSibling.focus()
   }
  }

  const handlePaste = (e) => {

    console.log(e.clipboardData.getData('text'), 'event')
    const data = e.clipboardData.getData('text')
    const value = data.split('')

    if(value.length === inputs.length) {
      inputs.forEach((input, index) => (input.value = value[index]))
    }
  }

  return (
    <div className="background">
       <input  maxLength={1}/>
       <input  maxLength={1}/>
       <input  maxLength={1}/>
       
       <input  maxLength={1}/>
       <input  maxLength={1}/>
       <input  maxLength={1}/>
    </div>
  )
}

export default App
