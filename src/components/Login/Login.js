import React, { useEffect } from "react";
import { Auth, Amplify } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import awsmobile from "../../aws-exports";
// Amplify.configure(awsmobile);

const LoginComponent = () => {
  const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  const localRedirectSignIn = "http://localhost:3001/listing/";
  const deployedRedirectSignIn =
    "https://dev.d3u3aqblo3t0fv.amplifyapp.com/listing/";
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      //   console.log(user);
      if (user) {
        navigate("/listing");
      }
    } catch (error) {
      //   navigate("/login");
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Make the container take up the full height of the viewport
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const handleLogin = () => {
    let uri = `https://okta-test-int-dev.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=s4jtqkr9ek227aagl5qibpub9&redirect_uri=${
      isLocalhost ? localRedirectSignIn : deployedRedirectSignIn
    }`;
    // let uri =
    //   "https://okta-test-int-dev.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=DEV-OKTA-AD&redirect_uri=http://localhost:3001/listing/&response_type=token&client_id=s4jtqkr9ek227aagl5qibpub9&scope=aws.cognito.signin.user.admin email openid profile";
    window.location.assign(uri);
  };
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleLogin}>
        Login with Okta
      </button>
    </div>
  );
};

export default LoginComponent;
