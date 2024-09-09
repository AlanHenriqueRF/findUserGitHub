import NavBar from '@/components/navBar';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { API_URL, GITHUB_TOKEN } from '@env';
import axios from 'axios';
import { UserGetType } from '@/utils/protocols';
import { InfoBase } from '@/components/infoBase';
import { NumFollowersComponent } from '@/components/numFollowersComponent';

export default function UserScreen() {
  const { login } = useLocalSearchParams();
  const [user, setUser] = useState<UserGetType>({
    avatar_url: null,
    name: null,
    login: null,
    location: null,
    id: null,
    followers: null,
    public_repos: null
  });

  useEffect(() => {
    axios.get(`${API_URL}/users/${login}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    })
      .then((data) => {
        console.log(data.data)
        setUser(data.data)
      })
      .catch(e => { console.log(e) })
  }, [login])

  return (
    <ContainerScreen>
      <NavBar home={false} />

      <ContainerAvatarUser>
        <ImageUser source={{ uri: `${user.avatar_url}` }} />
      </ContainerAvatarUser>

      <InfoBase name={user.name} id={user.id} location={user.location} login={user.login} key={user.id}/>

      <NumFollowersComponent followers={user.followers} public_repos={user.public_repos}/>
    </ContainerScreen>
  );
}

const ContainerScreen = styled.ScrollView`
  background-color: #1d1b1b;
`

const ContainerAvatarUser = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 17px;
`

const ImageUser = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 9999px;
`


