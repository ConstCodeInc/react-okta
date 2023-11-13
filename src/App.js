import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";
import "./App.css";
Amplify.configure({
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
    redirectSignIn: "http://localhost:3001/listing",
    redirectSignOut: "http://localhost:3001/login",
    responseType: "TOKEN",
    provider: "DEV-OKTA-AD",
    providerDomain: "okta-test-int-dev",
  },
});

function App() {
  const content = useRoutes(routes);
  return <div className="App">{content}</div>;
}

export default App;
