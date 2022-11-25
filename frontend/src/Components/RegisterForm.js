import React from 'react'
import { useState } from 'react'

const RegisterForm = () => {

        const [name, setname] =useState("")
        const [phonenumber, setphonenumber] =useState("")
        const [address, setaddress] =useState("")
        const [otp, setotp] =useState("")
        const [isphoneverified, setisphoneverified] =useState(false)
        const [isrequestedotp, setisrequestedotp] =useState(false)

        const sendotp = async() => {
            try{
                setisrequestedotp(true);
            }catch(error){
                console.log(error);
            }
        }
        
        const verifyotp = async() => {
            try{
                setisphoneverified(true);
                alert(`otp verified ${otp}`);
            }catch(error){
                console.log(error);
            }
        }
        
        const submitdetails = () => {
            try{
                if(isphoneverified===false){
                    return alert("Please verify your phone number!!!!!");
                }
                else{
                    alert("Details submitted")
                }
            }catch(error){
                console.log(error);
            }
        }

  return (
    <div>
    <form>
    <br/>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input 
    value={name}
    onChange={(e) => setname(e.target.value)}
    type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
   
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleInputEmail1">Address</label>
    <input 
    value={address}
    onChange={(e) => setaddress(e.target.value)}
    type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address"/>
   
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleInputEmail1">Phone No. </label>
    <input 
    value={phonenumber}
    onChange={(e) => setphonenumber(e.target.value)}
    type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone No."/>
   
  </div>
  {isrequestedotp===true ? (
    <>
    <br/>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter OTP </label>
    <input 
    value={otp}
    onChange={(e) => setotp(e.target.value)}
    type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="OTP"/>
   
  </div>
  <br/>
  <div class="mb-3">
    
    <button 
    onClick={()=>verifyotp()}
    type="button" className="btn btn-primary"> Verify OTP </button>
   
  </div>
    </>
  ): (
    <div className='mb-3 mt-3'>
 <button onClick={()=>sendotp()} type="button" class="btn btn-success">Send OTP</button>
 </div>
 )
 }
  
 {/* <div className='mb-3 mt-3'>
 <button onClick={()=>sendotp()} type="submit" class="btn btn-danger">Verify Number</button>
 </div> */}
<div className="mb-3">
  <button  onClick={()=>submitdetails()} type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
  )
}

export default RegisterForm