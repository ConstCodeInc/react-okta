import aws_exports from './aws-exports';

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const localRedirectSignIn = "http://localhost:3001/listing";
const productionRedirectSignIn = "https://dev.d3u3aqblo3t0fv.amplifyapp.com/listing";

const localRedirectSignOut = "http://localhost:3001/login";
const productionRedirectSignOut = "https://dev.d3u3aqblo3t0fv.amplifyapp.com/login";

const updatedAwsConfig = {
    ...aws_exports,
    oauth: {
        ...aws_exports.oauth,
        redirectSignIn: isLocalhost ?
            localRedirectSignIn : productionRedirectSignIn,
        redirectSignOut: isLocalhost ?
            localRedirectSignOut : productionRedirectSignOut,
        responseType : 'TOKEN',
        provider: 'DEV-OKTA-AD',
        providerDomain: 'okta-test-int-dev',
    },
};

export default updatedAwsConfig;