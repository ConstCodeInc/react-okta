import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import updatedAwsConfig from "../../aws-exports-custom";

const LoginComponent = () => {
  
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
        console.log('uri: ', uri)
        window.location.assign(uri)
      } 
    } catch (error) {
      console.log("error", error);
      // toast("ERROR!: " + error.message, { type: "error" });
    }
  };
  
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() =>handleExternalIdp('IdP')}>
        Login with Okta
      </button>
    </div>
  );
};

export default LoginComponent;
