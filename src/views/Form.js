import React from 'react';

const Form = () => {

    return ( 
        
        <div className="login-box"> 
            <h1>logo</h1>
         <form>
        <label>Email </label>
        <input type="email" />
        <label>Password </label>
        <input type="password" />
        <a href="#">Don't have An account?</a>
        <input type="submit" value="Log In"></input>
      </form>
      </div>  
     );
}
 
export default Form; 