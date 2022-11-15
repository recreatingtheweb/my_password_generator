import React from "react";

const validate = () => {
    if (!include_UpperCase.checked && !include_LowerCase.checked && !include_Symbols.checked && !include_Numbers.checked ) {
        alert("You must check atleast one box");
    }
     else{
          let characterList = ""
          if(include_UpperCase.checked){
                characterList = characterList + upperCaseLetters
          }
          if(include_LowerCase.checked){
            characterList = characterList + lowerCaseLetters
          }
          if(include_Symbols.checked){
            characterList = characterList + specialCharacters
          }
          if(include_Numbers.checked){
            characterList = characterList + numbers
          }
          setPassword(createPassword(characterList))
          alert("Password is generated successfully", false)
    }
}