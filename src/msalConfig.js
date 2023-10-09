const msalConfig = {
  auth: {
    clientId: '{{application_id}}', // Reemplaza con el ID de cliente de tu aplicación en Azure AD
    authority: 'https://login.microsoftonline.com/{{tenant_id}}', // No es necesario si se especifica auth.tenantId
    knownAuthorities: [
      "https://login.microsoftonline.com/{{tenant_id}}/v2.0/.well-known/openid-configuration"
    ],
    redirectUri: 'http://localhost:3000',
    tenantId: '{{tenant_id}}',
    scopes: [
      "api://{{application_id}}/.default", 
      "api://{{application_id}}/Read.All"
    ],
    validateAuthority: true,
  },
};

export default msalConfig;