import * as React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import theme from './utils/Theme';
import {StatusBar} from 'react-native';
import AuthContext, {AuthProvider} from './context/AuthContext';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {createUser} from './graphql/mutations';

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      fullname
      avatar
    }
  }
`;

function AppContainer() {
  const {setLogged, setUserId} = React.useContext(AuthContext);

  const saveUserToDb = async (user) => {
    await API.graphql(graphqlOperation(createUser, {input: user}));
  };

  React.useEffect(() => {
    const updateUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      }).catch(() => {});
      if (userInfo) {
        setLogged(true);
        setUserId(userInfo.attributes.sub);
        const userData = await API.graphql(
          graphqlOperation(getUser, {id: userInfo.attributes.sub}),
        );
        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            email: userInfo.attributes.email,
            fullname: userInfo.attributes['custom:fullname'],
            avatar: userInfo.attributes.picture,
          };
          saveUserToDb(user);
        }
      }
    };
    updateUser();
  }, [setLogged, setUserId]);

  return <Navigation />;
}

function App() {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AuthProvider>
          <AppContainer />
        </AuthProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
