import React, { useState } from 'react'

const SignUp = () => {

  const [input, setInput] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    phonenumber: "",
    displayname: "",
    emailid: "",
    profilepicture: "",
    password: "",
    confirmpassword: ""
  })

  const handleInput = (event) => {
    setInput(
        { ...input, [event.target.name]: event.target.value }
    )
  }
    

  const readValues = () => {
    console.log(input)
  }

  return (
    <div>

      <div className="container">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <div className="card shadow">

              <div className="card-body">

                <div className="row g-3">
                  <h4 className="text-center">User Sign Up</h4>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstname" value={input.firstname} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Middle Name</label>
                    <input type="text" className="form-control" name="middlename" value={input.middlename} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastname" value={input.lastname} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Username</label>
                    <textarea className="form-control" name="username" value={input.username} onChange={handleInput}></textarea>
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" name="phonenumber" value={input.phonenumber} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Display Name</label>
                    <input type="text" className="form-control" name="displayname" value={input.displayname} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Email ID</label>
                    <input type="email" className="form-control" name="emailid" value={input.emailid} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Profile Picture</label>
                    <input type="file" className="form-control"name='profilepicture' value={input.profilepicture} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={input.password} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="confirmpassword" value={input.confirmpassword} onChange={handleInput} />
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readValues} className="btn btn-success">Sign Up</button>
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/">I already have an account</a>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp