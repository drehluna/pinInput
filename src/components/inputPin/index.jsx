import { handleKeyUp } from "./helpers/handleKeyUp";
import { handlePaste } from "./helpers/handlePaste";

export default function InputPin() {
  

  const returnInputs = () => {
    const inputs = Array.from({ length: 6 });

    return inputs.map((_, index) => (
      <input
        key={index}
        maxLength="1"
        onKeyUp={(event) => handleKeyUp(event, index)}
        onPaste={handlePaste}
      />
    ));
  };

  return <>{returnInputs()}</>;
}
