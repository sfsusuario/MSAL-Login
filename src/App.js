import { PublicClientApplication } from '@azure/msal-browser';
import msalConfig from './msalConfig';

const pca = new PublicClientApplication(msalConfig);

const App = () => {
  const handleLogin = async () => {
    try {
      const loginResponse = await pca.loginPopup({
        scopes:[
          "api://{{application_id}}/.default"
        ]
      });
      console.log('Login Response:', loginResponse);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h1>MSAL React App</h1>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default App;
