import { OsNameInfo } from '@/utils/protocols';
import { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styled } from 'styled-components/native';
import * as Device from 'expo-device';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen() {
  const [osName, setosName] = useState<OsNameInfo>({
    osName: null
  });

  useEffect(() => {
    const info = {
      osName: Device.osName,
    };
    setosName(info);
  }, []);

  return (
    <ContainerScreen>
      <ContainerSearch $marginOs={osName.osName === "iOS" ? '55px 25px 25px 25px' : '20px'}>
        <Text aria-label="Label for Username" nativeID="labelUsername" style={{ color: "white" }}>
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
        </Text>
        <SearchInput aria-label="input" aria-labelledby="labelUsername" placeholder="Search GitHub username..." />
      </ContainerSearch>
    </ContainerScreen>
  );
}

const ContainerScreen = styled.ScrollView`
  background-color: #1D1B1B;
`

const ContainerSearch = styled.View<{ $marginOs?: string; }>`
  height: 40px;
  border: 1px solid #D1D5DB;
  border-radius: 9999px;
  background-color: #0F0F10;
  margin: ${props => props.$marginOs};
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

