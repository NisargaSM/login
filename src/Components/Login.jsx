import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
   
  })
  const [errors, setErrors] = useState({});
  const [valid, setvaild] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not vaild";
    }

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "password required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "password length at least 6 character";
    }
  

    


      axios.get("http://localhost:8000/users")
        .then(result => {
       result.data.map(user => {
        if(user.email === formData.email){
          if(user.password === formData.password){
            // alert("login successfully")
            navigate('/')
          } else {
            isvalid = false;
            validationErrors.password = "wrong Password; "
          }
        }
        
      })
      setErrors(validationErrors);
      setvaild(isvalid);
        })
        .catch(err => console.log(err))
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="signup-form">
            <form
              className="mt-5 border p-4 bg-light shadow"
              onSubmit={handleSubmit}
            >
              <h4 className="mb-5 text-secondary">Create Your Account</h4>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">
                  {errors.fname} {errors.lname} {errors.email} {errors.password}{" "}
                  {errors.cpassword}
                </span>
              )}
              <div className="row">
                <div className="mb-3 col-md-12">
                  <label>
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                  />
                </div>
                <div className="mb-3 col-md-12">
                  <label>
                    Password<span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                </div>

                <div className="col-md-12">
                  <button className="btn btn-primary float-end">
                    login Now
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              If you dont have account, Please <Link to="/registration"> Registration</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



