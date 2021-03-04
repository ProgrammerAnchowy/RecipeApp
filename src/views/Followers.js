import Box from '../components/Box';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import FollowList from '../components/FollowList';
import FormInput from '../components/FormInput';
import theme from '../utils/Theme';
import {Search} from '../components/icons';
import {API, graphqlOperation} from 'aws-amplify';
import {FlatList} from 'react-native';

function SearchIcon() {
  return <Search stroke={theme.colors.mainText} />;
}
const getFollowers = `
query getFollowers ($userId:ID!){
  getFollowersByUserId(followingId: $userId) {
    items {
      follower {
        fullname
        avatar
        id
      }
    }
  }
}
`;

export default function FollowersScreen({route}) {
  const [isFocus, setIsFocus] = React.useState(false);
  const [followers, setFollowers] = React.useState([]);
  const searchInputRef = React.useRef(null);
  const userId = route.params?.userId;
  React.useEffect(() => {
    const fetchFollowers = async () => {
      await API.graphql(graphqlOperation(getFollowers, {userId: userId})).then(
        (response) => {
           console.log(response);
           setFollowers(response.data.getFollowersByUserId.items);
        },
      );
    };
    fetchFollowers();
  }, [userId]);

  return (
    <Box as={SafeAreaView} pt="24px" px={'24px'} bg={'white'} flex={1}>
      <ScrollView>
        <Box flex={1}>
          <FormInput
            inputRef={searchInputRef}
            LeftIcon={SearchIcon}
            placeholderText={'Takipçilerde ara'}
            backgroundColor={theme.colors.mainGray}
            clearButtonMode="always"
            onFocus={() => setIsFocus(true)}
          />
        </Box>
        <Box
          as={FlatList}
          mt={18}
          data={followers}
          renderItem={({item}) => <FollowList item={item.follower} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </Box>
  );
}
