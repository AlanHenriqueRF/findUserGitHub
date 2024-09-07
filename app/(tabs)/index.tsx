import { Image, Text, View } from 'react-native';
import { styled } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import NavBar from '@/components/navBar';
import axios from 'axios';
import { UserGetMinunType } from '@/utils/protocols';

export default function SearchScreen() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [user, setUser] = useState<UserGetMinunType>({
    avatar_url: null,
    name: null,
    login: null,
    location: null
  });

  useEffect(() => {
    if (searchValue.length > 0) {
      axios.get(`https://api.github.com/users/${searchValue}`) // é bom colocar o autorization e colocar o .env
        .then((data) => {
          setUser(data.data)
          console.log(data.data)
        })
        .catch(e => { console.log(e) })
    }
  }, [searchValue])

  return (
    <ContainerScreen>
      <NavBar></NavBar>
      <ContainerSearch>
        <Text aria-label="Label for Username" nativeID="labelUsername" style={{ color: "white" }}>
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
        </Text>
        <SearchInput aria-label="input" aria-labelledby="labelUsername" placeholder="Search GitHub username..."
          value={searchValue} onChangeText={(text: string) => { setSearchValue(text) }} />
      </ContainerSearch>
      <ContainerUser>
        {searchValue.length === 0 ?
          <MessageSearched>Please search for a GitHub username to display results.</MessageSearched>
          :
          <>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <ImageUser
                source={{ uri: `${user.avatar_url}` }}
              />
              <View>
                <NameSearched>{user.name}</NameSearched>
                <UserNameSearched>{user.login}</UserNameSearched>
                <CitySearched>{user.location}</CitySearched>
              </View>
            </View>
            <IconUser>
              <Ionicons name="chevron-forward-outline" size={20} color="#9CA3AF" />
            </IconUser>
          </>
        }
      </ContainerUser>
    </ContainerScreen >
  );
}

const ContainerScreen = styled.ScrollView`
  background-color: #1d1b1b;
`

const ContainerSearch = styled.View`
  height: 40px;
  border: 0.3px solid #9CA3AF;
  border-radius: 9999px;
  background-color: #0F0F10;
  margin: 0px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  cursor: pointer;
`

const SearchInput = styled.TextInput`
  color: #DBDBD7;
  padding-left: 9px;
  margin-right: 13px;
  flex-grow: 1; 
  height: 100%;
  font-size: 14px;
  font-weight: 400;
`

const ContainerUser = styled.View`
  height: 116px;
  border: 0.3px solid #9CA3AF;
  border-radius: 10px;
  background-color: #111111;
  margin: 0px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const ImageUser = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 9999px;
  margin: 0 16px;
`

const MessageSearched = styled.Text`
  color: #E7E7E4;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 2px;
  margin-right: 20px;
  margin: 0 24px;
`

const NameSearched = styled.Text`
  color: #E7E7E4;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2px;
  margin-right: 20px;
  max-width: 160px;
`

const UserNameSearched = styled.Text`
  color: #6B7280;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 2px;
`

const CitySearched = styled.Text`
  color: #9CA3AF;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 2px;
`

const IconUser = styled.View`
  margin-right: 16px;
`