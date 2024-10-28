import React,{useState} from 'react'

function App() {
  const [password,setpassword]=useState("");
  const[strength,setstrength]=useState("");
  function evaluatepasswordstrength(password){
    let score=0;
    if (!password) return ''
    if (password.length >8 )
      score+=1
    if (/[a-z]/.test(password))
      score+=1
    if (/[A-Z]/.test(password))
      score+=1
    if (/[0-9]/.test(password))
      score+=1
    if(/^[A-Za-z0-9]/.test(password))
      score+=1

    switch(score){
      case 0:
        return "weak";
      case 1:
        return "weak";
      case 2:
        return "weak";
      case 3:
        return "medium";
      case 4:
        return "strong";
      case 5:
        return "very strong";
      default:
        return "";
        
    }
  }


  return(
    <div>

      <h1>Password Checker</h1>
      <input type='password' placeholder='enter ur password' value={password}
      onChange={(event)=>{
        const newpassword=event.target.value;
        setpassword(newpassword);
        setstrength(evaluatepasswordstrength(newpassword));
      }}/>
      <small>Password strength: {strength}</small>

    </div>
  )

}
export default App;