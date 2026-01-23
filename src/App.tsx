

import './App.css'

import { useRef } from 'react';

function App() {
  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // inputEl.current က တကယ့် HTML <input> element ကို ညွှန်းပါတယ်
    inputEl?.current?.focus();
    console.log(inputEl.current?.value);
  };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }
  return (
    <>
      <input ref={inputEl} type="text" onChange={handleChange} />
      <button onClick={onButtonClick}>Focus the input</button>
      <p>Input value: {inputEl?.current?.value}</p>
    </>
  );
}

export default App;