import React, { useEffect } from "react";
import { Auth, Amplify } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import awsmobile from "../../aws-exports";
import updatedAwsConfig from "../../aws-exports-custom";
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
  const handleExternalIdp = async (type) => {
    try {
      //destructuring values from updatedAwsConfig
      let {aws_cognito_region : region, aws_user_pools_web_client_id: client_id, oauth: {provider: identity_provider, redirectSignIn: redirect_uri, responseType: response_type, providerDomain: domain}}  = updatedAwsConfig;
      if (type === "IdP") {
        let uri = `https://${domain}.auth.${region}.amazoncognito.com/oauth2/authorize?identity_provider=${identity_provider}&redirect_uri=${redirect_uri}&response_type=${response_type}&client_id=${client_id}&scope=aws.cognito.signin.user.admin email openid profile`
        window.location.assign(uri)
        //window.location.assign('https://dfx5-spot-dialer-sandbox.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=DFX5-AZURE-AD&redirect_uri=http://localhost:3000/campaignsList/&response_type=CODE&client_id=4udpea644ip38ehl2fk9insu77&state=7wMK3FwMrOx2ycNm9f9Yu9Fy5KcTMb6n&scope=email openid profile aws.cognito.signin.user.admin')
        //var test = await Auth.federatedSignIn({customProvider: "IdP"})
      } 
    } catch (error) {
      console.log("error", error);
      // toast("ERROR!: " + error.message, { type: "error" });
    }
  };
  // const handleLogin = () => {
  //   window.location.assign('https://okta-test-int-dev.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=DEV-OKTA-AD&redirect_uri=http://localhost:3001/listing/&response_type=token&client_id=s4jtqkr9ek227aagl5qibpub9&scope=email openid profile aws.cognito.signin.user.admin')
  //   // let uri = `https://okta-test-int-dev.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=s4jtqkr9ek227aagl5qibpub9&redirect_uri=${
  //   //   isLocalhost ? localRedirectSignIn : deployedRedirectSignIn
  //   // }`;
  //   // let uri =
  //   //   "https://okta-test-int-dev.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=DEV-OKTA-AD&redirect_uri=http://localhost:3001/listing/&response_type=token&client_id=s4jtqkr9ek227aagl5qibpub9&scope=aws.cognito.signin.user.admin email openid profile";
  //   // window.location.assign(uri);
  // };
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() =>handleExternalIdp('IdP')}>
        Login with Okta
      </button>
    </div>
  );
};

export default LoginComponent;
