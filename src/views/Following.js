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
const getFollowing = `
query getFollowing ($userId:ID!){
  getFollowingsByUserId(followerId: $userId) {
    items {
      following {
        fullname
        avatar
        id
      }
    }
  }
}
`;

export default function FollowingScreen({route}) {
  const [isFocus, setIsFocus] = React.useState(false);
  const [followings, setFollowings] = React.useState([]);
  const searchInputRef = React.useRef(null);
  const userId = route.params?.userId;
  React.useEffect(() => {
    const fetchFollowings = async () => {
      await API.graphql(graphqlOperation(getFollowing, {userId: userId})).then(
        (response) => {
          setFollowings(response.data.getFollowingsByUserId.items);
        },
      );
    };
    fetchFollowings();
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
          data={followings}
          renderItem={({item}) => <FollowList item={item.following} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </Box>
  );
}
