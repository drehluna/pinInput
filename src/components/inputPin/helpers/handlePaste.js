const handlePaste = (event) => {

    const selectedInputs = document.querySelectorAll("input");
    const data = event.clipboardData.getData('text')
    const value = data.split('')

    if(value.length === 6) {
        selectedInputs.forEach((input, index) => (input.value = value[index]))
      }
}

export { handlePaste }