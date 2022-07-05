import React from 'react'

export default function Reservation() {
  return (
    <div>
        <div className='res'>
     
     <center>
	<h1 >Booking</h1>
	<form>
		
		<label for="uname">First name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
		<input type="text" name="uname" /><br /><br />
		<label for="last">Last name :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
		<input type="text" name="last" /><br /><br />
		<label for="mail">E-mail Id :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
		<input type="Email" name="mail" /><br /><br />
		<label for="pass">Mobile No&nbsp; :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
		<input type="text" name="pass" /><br /><br />
		<label for="date">Booking :&nbsp;</label>
		<input type="date" name="date" /><br /><br />
		<button className='btn btn-success'>Submit</button>

	</form>
	</center>
        
    </div>
    </div>
  )
}
