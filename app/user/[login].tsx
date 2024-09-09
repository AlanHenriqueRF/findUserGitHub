import NavBar from '@/components/navBar';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { GITHUB_TOKEN } from '@env';
import { RepoGetAllType } from '@/utils/protocols';
import { InfoBase } from '@/components/infoBase';
import { NumFollowersComponent } from '@/components/numFollowersComponent';
import { RepoComponent } from '@/components/repoComponent';


export default function UserScreen() {
  const { avatar_url, name, login, location, id, followers, public_repos, repos_url, key } = useLocalSearchParams();

  const [repo, setRepo] = useState<RepoGetAllType>([{
    id: 0,
    name: null,
    language: null,
    description: null,
    created_at: '',
    pushed_at: '',
    html_url: 'https://github.com/'
  }])

  useEffect(() => {
    axios.get(`${repos_url}?sort=updated`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    })
      .then((data) => {
        setRepo(data.data)
      })
      .catch(e => { console.log(e) })
  }, [repos_url])

  return (
    <ContainerScreen>
      <NavBar home={false} />

      <ContainerAvatarUser>
        <ImageUser source={{ uri: `${avatar_url}` }} />
      </ContainerAvatarUser>

      <InfoBase name={name?name.toString(): null} id={Number(id)} location={location? location.toString(): null} login={login.toString()}  />

      <NumFollowersComponent followers={Number(followers)} public_repos={Number(public_repos)} />

      <ViewRepo>
        <RepoText>Repositories</RepoText>
        <RepoText></RepoText>
      </ViewRepo>

      {repo.length > 0 ?
        repo.map((repository) => {
          return (
            <>
              <RepoComponent key={repository.id} name={repository.name} language={repository.language} description={repository.description}
                created_at={repository.created_at} pushed_at={repository.pushed_at} html_url={repository.html_url}/>
            </>)
        }) : <></>}
    </ContainerScreen >
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

const ViewRepo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const RepoText = styled.Text`
  color: #9CA3AF;
  font-size: 18px;
  font-weight: 700;
  width: 140px;
  margin-bottom: 23px;
`

const RepoContainer = styled.View`
  margin: 0 40px 20px 40px;
  border: 1px solid #E4E4E7;
  background-color: #1D1B1B;
  border-radius: 8px;
  padding-top: 16px;
  cursor: pointer;
`

const NameRepoAndLanguageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 8px;
`

const NameRepo = styled.Text`
  color: #9CA3AF;
  font-size: 16px;
  font-weight: 600;
  padding-top: 4px;
  margin-left: 3px;
`

const LanguageRepo = styled.Text`
  color: #6E6E77;
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
`

const DescriptionText = styled.Text`
  color: #6E6E77;
  font-size: 16px;
  font-weight: 400;
  max-width: 225px;
  margin-top: 25px;
  margin-bottom: 35px;
`