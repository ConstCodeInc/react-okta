import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate) {
    resources.userPool.schema = [
        {
            name: "email",
            required: true,
            mutable: true
        }
    ]
    resources.addCfnResource({
        type: 'AWS::Cognito::UserPoolDomain',
        properties: {
            UserPoolId: {
                Ref: 'UserPool'
            },
            Domain: {
                "Fn::Join" : [ 
                    '-',
                    [
                        'okta-test-int',
                       { Ref: 'env'},
                    ]  
                ]
            },
        },
    }, 'UserPoolDomain');
    
    resources.userPoolClientWeb.allowedOAuthFlows = [
        "code",
        "implicit"
    ];
    resources.userPoolClientWeb.allowedOAuthScopes = [
        "email",
         "openid",
         "profile",
         "aws.cognito.signin.user.admin"
    ];
    resources.userPoolClientWeb.callbackUrLs = [
        "http://localhost:3001/listing",
        "https://dev.d3u3aqblo3t0fv.amplifyapp.com/listing"
    ]
    resources.userPoolClientWeb.logoutUrLs = [
        "http://localhost:3001/login",
        "https://dev.d3u3aqblo3t0fv.amplifyapp.com/login"
    ]
    resources.addCfnResource(
        {
          type: "AWS::Cognito::UserPoolIdentityProvider",
          properties: {
            AttributeMapping: {
                // username: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
                email: "email",
            //   preferred_username: "email",
            //   email: "email"
            },
            ProviderDetails: {
                MetadataURL: "https://dev-45193505.okta.com/app/exkd87bcjrfXGIjlc5d7/sso/saml/metadata"
            },
            ProviderName: "DEV-OKTA-AD",
            ProviderType: "SAML",
            UserPoolId: {
              Ref: "UserPool",
            },
          },
        },
        "UserPoolIdentityProvider"
      );

      resources.addCfnResource(
        {
          type: "AWS::Cognito::IdentityPool",
          properties: {
            IdentityPoolName: "okta-first-identitypool",
            CognitoIdentityProviders: [
                {
                    ClientId: {"Ref": "UserPoolClient"},
                    ProviderName: {
                      "Fn::Sub": [
                        "cognito-idp.${region}.amazonaws.com/${client}",
                        {"region": {"Ref": "AWS::Region"}, "client": {"Ref": "UserPool"}}
                      ]
                    }
                  },
                  {
                    "ClientId": {"Ref": "UserPoolClientWeb"},
                    "ProviderName": {
                      "Fn::Sub": [
                        "cognito-idp.${region}.amazonaws.com/${client}",
                        {"region": {"Ref": "AWS::Region"}, "client": {"Ref": "UserPool"}}
                      ]
                    }
                  }
            ],
            AllowUnauthenticatedIdentities: false
        }
        },
        "IdentityPool"
      );

      resources.addCfnResource(
        {
            type: "AWS::Cognito::IdentityPoolRoleAttachment",
            properties: {
                IdentityPoolId: {"Ref": "IdentityPool"},
                Roles: {
                unauthenticated: {"Ref": "unauthRoleArn"},
                authenticated: {"Ref": "authRoleArn"}
                }
            },
        },
        "IdentityPoolRoleMap"
      );
      resources.userPoolClientWeb.supportedIdentityProviders = [ "DEV-OKTA-AD" ] 
}