import React from 'react';

function Contact(){

   return (
      <React.Fragment>
      <div className="w-50 my-5 mx-auto">
      <form>
  <div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name" aria-describedby="Name" autoComplete="off" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="Contact" className="form-label">Contact</label>
    <input type="Number" className="form-control" id="Contact" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="mb-3">
    <textarea className="form-control text-area w-100 " placeholder="Give your feedback please.." id="exampleCheck1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
</div>
      
      </React.Fragment>
   )
}

export default Contact;