const handleKeyUp = (e, index) => {

    const selectedInputs = document.querySelectorAll("input");

    const input = e.target

    console.log(e)

    if(!Number(input.value)) {
        input.value = ""
    }

    if(e.target.value > 0 && index < selectedInputs.length - 1) {
        input.nextElementSibling.focus()
    }

    if(e.key === 'Backspace' && index > 0) {
        input.previousElementSibling.focus()
    }
 
}

export { handleKeyUp }