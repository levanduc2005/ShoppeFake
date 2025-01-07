import React from "react";

import { LoginComponent } from "./../Components";

function Login() {
  return (
    <div>
      <LoginComponent text="Đăng nhập" login={true} />
    </div>
  );
}

export default Login;
