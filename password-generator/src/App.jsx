import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setlenght] = useState(3);
  const [numberallowed, setnumbersallowed] = useState(false);
  const [charactersallowed, setcharactersallowed] = useState(false);
  const [password, setpassword] = useState("");

  const passref = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charactersallowed) str += "!@#$%^&*()_";
    if (numberallowed) str += "1234567890";

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setpassword(pass);
  }, [length, numberallowed, charactersallowed, setpassword]);
  const Clipboardcopy = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
    window.alert("Password copied to clipboard");
  }, [password]);
  useEffect(() => {
    passwordgenerator();
  }, [length, numberallowed, charactersallowed, passwordgenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-5 text-orange-400 bg-blue-500 text-center">
        <h1 className="text-4xl col-span-2 text-white my-3">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            className="w-full p-3 py-2 px-2"
            value={password}
            placeholder="password"
            readOnly
            ref={passref}
          />
          <button
            className="outline-none bg-blue-400 text-white p-3"
            onClick={Clipboardcopy}
          >
            Copy
          </button>
        </div>
        <div className="flex">
          <label className="text-white">Length</label>
          <input
            type="range"
            className="p-2"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setlenght(e.target.value)}
          />
          <label>{length}</label>
          <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={() => setnumbersallowed((prev) => !prev)}
          />
          <label className="text-white">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charactersallowed}
            id="numberInput"
            onChange={() => setcharactersallowed((prev) => !prev)}
          />
          <label className="text-white"> Charaters </label>
        </div>
      </div>
    </>
  );
}

export default App;
