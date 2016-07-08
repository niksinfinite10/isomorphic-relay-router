/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {  Component } from 'react';




import Relay from 'react-relay';



class Login extends Component {

  constructor(){
    super();
    console.log('this is constructor');

  }

  componentDidMount() {
    console.log("componentDidMount");
  }

   handleClick()  {


     console.log('i am here and clicked');


   }

  render() {


    return (
      <div className="container-fluid container-fill-height">
        <div className="container-content-middle">
          <form role="form" className="m-x-auto text-center app-login-form">

            <a href="../index.html" className="app-brand m-b-lg">
              <img src="../assets/img/brand.png" alt="brand" />
            </a>

            <div className="form-group">
              <input className="form-control" placeholder="Username" />
            </div>

            <div className="form-group m-b-md">
              <input type="password" className="form-control" placeholder="Password" />
            </div>



            <div className="m-b-lg">
              <button onclick={() => {console.log('hello there')}} className="btn btn-primary" >Log In</button>
              <button className="btn btn-default">Sign up</button>
            </div>


            <a href={"javascript:void(0)"} onclick={() => this.handleClick} >asda</a>

            <footer className="screen-login">
              <a href="#" className="text-muted">Forgot password</a>
            </footer>

          </form>
        </div>
      </div>
    );
  }

}

export default Relay.createContainer(Login, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        totalCount,

      }
    `,
  },
});

// export default Login;
