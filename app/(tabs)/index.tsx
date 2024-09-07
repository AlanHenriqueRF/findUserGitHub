
import { Text } from 'react-native';
import { styled } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import NavBar from '@/components/navBar';

export default function SearchScreen() {
  const [searchValue, setSearchValue] = useState<string>('');
  
  console.log("searchValue => ", searchValue)
  return (
    <ContainerScreen>
      <NavBar></NavBar>
      <ContainerSearch /* $marginOs={osName.osName === "iOS" ? '55px 25px 25px 25px' : '20px'} */>
        <Text aria-label="Label for Username" nativeID="labelUsername" style={{ color: "white" }}>
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
        </Text>
        <SearchInput aria-label="input" aria-labelledby="labelUsername" placeholder="Search GitHub username..." 
        value={searchValue} onChangeText={(text: string)=>{setSearchValue(text)}} />
      </ContainerSearch>

      <ContainerUser></ContainerUser>
    </ContainerScreen>
  );
}

const ContainerScreen = styled.ScrollView`
  background-color: #1D1B1B;
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
  height: 96px;
  border: 0.3px solid #9CA3AF;
  border-radius: 10px;
  background-color: #111111;
  margin: 0px 20px 20px 20px;
`

