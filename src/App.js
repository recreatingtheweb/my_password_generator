import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

 const numbers = '0123456789';
 const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const lowerCaseLetters ='abcdefghijklmnopqrstuvwxyz';
 const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

 let copyText = " ";

 const include_UpperCase = document.getElementById("upperCase");
 const include_LowerCase = document.getElementById("lowerCase");
 const include_Symbols = document.getElementById("include_symbols");
 const include_Numbers = document.getElementById("include_numbers");


 const validate = () => {
  if (!includeUpperCase && !includeLowerCase&& !includeSymbols && !includeNumbers ) {
      alert("You must check atleast one box");
  }
   else{
        let characterList = ""
        if(includeUpperCase){
              characterList = characterList + upperCaseLetters
        }
        if(includeLowerCase){
          characterList = characterList + lowerCaseLetters
        }
        if(includeSymbols){
          characterList = characterList + specialCharacters
        }
        if(includeNumbers){
          characterList = characterList + numbers
        }
        setPassword(createPassword(characterList))
        // console.log(characterList)
  }
}

 

  


  const createPassword = (characterList) => {
    let password = ""
    const characterListLength = characterList.length
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    console.log(password)
    alert("Password is generated successfully:   " + password)

    let copyText = password;

    return password
  }

  return (
    <div className='form-position'>
          <form class>

              <h1>Password Generator</h1>

              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">Password Length</label>
                <input type="number" onChange={(e) => setPasswordLength(e.target.value)} defaultValue={passwordLength} class="form-control password-field" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
            
              <div class="mb-3 ">
              <input type="checkbox" checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} class="form-check-input" id="upperCase"/>
              <label class="form-check-label " for="exampleCheck1">Add Uppercase Letters</label>
              </div>
              
              <div class="mb-3 ">
              <input type="checkbox" checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} class="form-check-input" id="lowerCase"/>
              <label class="form-check-label" for="exampleCheck1">Add Lowercase Letters</label>
              </div>
              
              <div class="mb-3 ">
              <input type="checkbox" checked={includeSymbols}  onChange={(e) => setIncludeSymbols(e.target.checked)}  class="form-check-input" id="include_symbols"/>
              <label class="form-check-label" for="exampleCheck1">Include Symbols</label>
              </div>
              
              <div class="mb-3 ">
              <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} class="form-check-input" id="include_numbers"/>
              <label class="form-check-label" for="exampleCheck1">Include Numbers</label>
              </div>
              
              <div class="d-grid gap-2">
                  <button onClick={validate}  class="btn btn-primary" type="button">Generate Password</button>
              </div>
              {/* <div class="d-grid gap-2">
                  <button onClick={copyPassword} class="btn btn-success save-positioning" type="button">Save Password</button>
              </div> */}


        
          </form>
    </div>
  );
 }

export default App;
