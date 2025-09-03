const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")

const checkPal = () => {
  let val = inputText.value
  let valF = val.toUpperCase().split("").filter(str => str.match(/[a-zA-Z\d]/)
  );
  const valR = valF.slice().reverse()
  if (!val){
    return alert("Please input a value");
  } else if (valR.join("") === valF.join("")){
      return result.textContent = val + " is a palindrome"
  } else { 
     return result.textContent = val + " is not a palindrome"
    }
}
checkBtn.addEventListener('click', checkPal)

