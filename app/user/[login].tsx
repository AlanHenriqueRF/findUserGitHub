import NavBar from '@/components/navBar';
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { styled } from 'styled-components/native';

export default function UserScreen() {
  const { login } = useLocalSearchParams();

  return (
    <ContainerScreen>
      <NavBar home={false}/>
      <View>
        <Text style={{ color: 'white' }}>User of user {login} </Text>
      </View>
    </ContainerScreen>
  );
}

const ContainerScreen = styled.ScrollView`
  background-color: #1d1b1b;
`
