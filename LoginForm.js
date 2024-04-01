import { useForm } from "react-hook-form";

function LoginForm() {
    let { register, handleSubmit } = useForm();

    function onFormSubmit(userObj) {
        console.log(userObj);
    }

    return (
        <div>

            {/* user signup form */}
            <form onSubmit={handleSubmit(onFormSubmit)}>
                {/* username */}
                <div >
                    <label htmlFor="FirstName" >
                        Username
                    </label>
                    <input type="text" id="username"  {...register("username")} />
                </div>
                {/* email */}
                <div >
                    <label htmlFor="MiddleName" >
                        Middle
                    </label>
                    <input type="text" id="Middle"  {...register("MiddleName")} />
                </div>
                <div >
                    <label htmlFor="LastName" >
                        last
                    </label>
                    <input type="text" id="last"  {...register("lastName")} />
                </div>
                <div >
                    <label htmlFor="DateOfBirth">
                        dof
                    </label>
                    <input type="date" id="dof"  {...register("DateOfBirth")} />
                </div>
             
            </form>
        </div>
    );
}

export default LoginForm;



REACT
1.LoginForm.js 
/*****ABOVE PIC IS FOR LOGIN *********/
Header.js
import React from 'react';
const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <h1>Company Name</h1>
    </header>
  );
};
export default Header;

Place your company logo file (logo.png) inside the public folder of your React app.
// src/App.js
import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
}
export default App;
In terminal: npm start




2.import React from 'react';

const UserDetails = ({ onChange, firstName, lastName, dob }) => {
  return (
    <div>
      <h2>User Details</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={firstName} onChange={onChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={lastName} onChange={onChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={dob} onChange={onChange} />
      </label>
    </div>
  );
};

export default UserDetails;

// src/UserInfo.js
import React from 'react';

const UserInfo = ({ onChange, email, phone, linkedin }) => {
  return (
    <div>
      <h2>Info</h2>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={phone} onChange={onChange} />
      </label>
      <label>
        Linkedin Address:
        <input type="text" name="linkedin" value={linkedin} onChange={onChange} />
      </label>
    </div>
  );
};

export default UserInfo;
// src/Address.js
import React from 'react';

const Address = ({ onChange, dno, streetNo, streetName, streetName2, city, state, country, pinCode }) => {
  return (
    <div>
      <h2>Address</h2>
      <label>
        Dno:
        <input type="text" name="dno" value={dno} onChange={onChange} />
      </label>
      <label>
        Street No:
        <input type="text" name="streetNo" value={streetNo} onChange={onChange} />
      </label>
      <label>
        Street Name:
        <input type="text" name="streetName" value={streetName} onChange={onChange} />
      </label>
      <label>
        Street Name 2:
        <input type="text" name="streetName2" value={streetName2} onChange={onChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={city} onChange={onChange} />
      </label>
      <label>
        State:
        <input type="text" name="state" value={state} onChange={onChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={country} onChange={onChange} />
      </label>
      <label>
        Pin Code:
        <input type="text" name="pinCode" value={pinCode} onChange={onChange} />
      </label>
    </div>
  );
};

export default Address;

// src/RegistrationForm.js
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import Address from './Address';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    linkedin: '',
    dno: '',
    streetNo: '',
    streetName: '',
    streetName2: '',
    city: '',
    state: '',
    country: '',
    pinCode: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      linkedin: '',
      dno: '',
      streetNo: '',
      streetName: '',
      streetName2: '',
      city: '',
      state: '',
      country: '',
      pinCode: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserDetails {...formData} onChange={handleChange} />
      <UserInfo {...formData} onChange={handleChange} />
      <Address {...formData} onChange={handleChange} />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default RegistrationForm;






// src/App.js
import React from 'react';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div className="App">
      <h1>User Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
      REACT
1.LoginForm.js 
/*****ABOVE PIC IS FOR LOGIN *********/
Header.js
import React from 'react';
const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <h1>Company Name</h1>
    </header>
  );
};
export default Header;

Place your company logo file (logo.png) inside the public folder of your React app.
// src/App.js
import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
}
export default App;
In terminal: npm start




2.import React from 'react';

const UserDetails = ({ onChange, firstName, lastName, dob }) => {
  return (
    <div>
      <h2>User Details</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={firstName} onChange={onChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={lastName} onChange={onChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={dob} onChange={onChange} />
      </label>
    </div>
  );
};

export default UserDetails;

// src/UserInfo.js
import React from 'react';

const UserInfo = ({ onChange, email, phone, linkedin }) => {
  return (
    <div>
      <h2>Info</h2>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={phone} onChange={onChange} />
      </label>
      <label>
        Linkedin Address:
        <input type="text" name="linkedin" value={linkedin} onChange={onChange} />
      </label>
    </div>
  );
};

export default UserInfo;
// src/Address.js
import React from 'react';

const Address = ({ onChange, dno, streetNo, streetName, streetName2, city, state, country, pinCode }) => {
  return (
    <div>
      <h2>Address</h2>
      <label>
        Dno:
        <input type="text" name="dno" value={dno} onChange={onChange} />
      </label>
      <label>
        Street No:
        <input type="text" name="streetNo" value={streetNo} onChange={onChange} />
      </label>
      <label>
        Street Name:
        <input type="text" name="streetName" value={streetName} onChange={onChange} />
      </label>
      <label>
        Street Name 2:
        <input type="text" name="streetName2" value={streetName2} onChange={onChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={city} onChange={onChange} />
      </label>
      <label>
        State:
        <input type="text" name="state" value={state} onChange={onChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={country} onChange={onChange} />
      </label>
      <label>
        Pin Code:
        <input type="text" name="pinCode" value={pinCode} onChange={onChange} />
      </label>
    </div>
  );
};

export default Address;

// src/RegistrationForm.js
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import Address from './Address';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    linkedin: '',
    dno: '',
    streetNo: '',
    streetName: '',
    streetName2: '',
    city: '',
    state: '',
    country: '',
    pinCode: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      linkedin: '',
      dno: '',
      streetNo: '',
      streetName: '',
      streetName2: '',
      city: '',
      state: '',
      country: '',
      pinCode: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserDetails {...formData} onChange={handleChange} />
      <UserInfo {...formData} onChange={handleChange} />
      <Address {...formData} onChange={handleChange} />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default RegistrationForm;






// src/App.js
import React from 'react';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div className="App">
      <h1>User Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

export REACT
1.LoginForm.js 
/*****ABOVE PIC IS FOR LOGIN *********/
Header.js
import React from 'react';
const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <h1>Company Name</h1>
    </header>
  );
};
export default Header;

Place your company logo file (logo.png) inside the public folder of your React app.
// src/App.js
import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
}
export default App;
In terminal: npm start




2.import React from 'react';

const UserDetails = ({ onChange, firstName, lastName, dob }) => {
  return (
    <div>
      <h2>User Details</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={firstName} onChange={onChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={lastName} onChange={onChange} />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={dob} onChange={onChange} />
      </label>
    </div>
  );
};

export default UserDetails;

// src/UserInfo.js
import React from 'react';

const UserInfo = ({ onChange, email, phone, linkedin }) => {
  return (
    <div>
      <h2>Info</h2>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={phone} onChange={onChange} />
      </label>
      <label>
        Linkedin Address:
        <input type="text" name="linkedin" value={linkedin} onChange={onChange} />
      </label>
    </div>
  );
};

export default UserInfo;
// src/Address.js
import React from 'react';

const Address = ({ onChange, dno, streetNo, streetName, streetName2, city, state, country, pinCode }) => {
  return (
    <div>
      <h2>Address</h2>
      <label>
        Dno:
        <input type="text" name="dno" value={dno} onChange={onChange} />
      </label>
      <label>
        Street No:
        <input type="text" name="streetNo" value={streetNo} onChange={onChange} />
      </label>
      <label>
        Street Name:
        <input type="text" name="streetName" value={streetName} onChange={onChange} />
      </label>
      <label>
        Street Name 2:
        <input type="text" name="streetName2" value={streetName2} onChange={onChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={city} onChange={onChange} />
      </label>
      <label>
        State:
        <input type="text" name="state" value={state} onChange={onChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={country} onChange={onChange} />
      </label>
      <label>
        Pin Code:
        <input type="text" name="pinCode" value={pinCode} onChange={onChange} />
      </label>
    </div>
  );
};

export default Address;

// src/RegistrationForm.js
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import Address from './Address';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    linkedin: '',
    dno: '',
    streetNo: '',
    streetName: '',
    streetName2: '',
    city: '',
    state: '',
    country: '',
    pinCode: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      linkedin: '',
      dno: '',
      streetNo: '',
      streetName: '',
      streetName2: '',
      city: '',
      state: '',
      country: '',
      pinCode: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserDetails {...formData} onChange={handleChange} />
      <UserInfo {...formData} onChange={handleChange} />
      <Address {...formData} onChange={handleChange} />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default RegistrationForm;






// src/App.js
import React from 'react';
import RegistrationForm from './RegistrationForm';

function App() {
  return (
    <div className="App">
      <h1>User Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

export default App; App;
     
