import NavBar from '@/components/navBar';
import { useRecentSearches } from '@/components/recentSearchesContext';
import { styled } from 'styled-components/native';
import { UserComponent } from '@/components/userComponent';
import { useEffect, useState } from 'react';
import { UserRecentsType } from '@/utils/protocols';

export default function RecentSearchesScreen() {
  const [listUseState, setListUseState] = useState<UserRecentsType[]>([])
  const { recentSearches } = useRecentSearches();

  useEffect(() => {
    if (recentSearches.length > listUseState.length) {
      setListUseState(recentSearches);
    }
  }, [recentSearches])
  return (
    <>
      <ContainerScreen>
        <NavBar home={true}></NavBar>

        {listUseState.length > 0 ?
          listUseState.map((recent: any) => {
            return <UserComponent key={recent.id} avatar_url={recent.avatar_url} name={recent.name} login={recent.login}
              location={recent.location} id={recent.id} followers={recent.followers} public_repos={recent.public_repos} repos_url={recent.repos_url} />
          })
          : <ContainerUser $user={false}>
            <MessageSearched>No one recent username search, return the search screen, and search someone to receive some result in this screen.</MessageSearched>
          </ContainerUser>
        }
      </ContainerScreen>
    </>
  );
}

const ContainerScreen = styled.ScrollView`
background-color: #1D1B1B;
`

const ContainerUser = styled.View<{ $user: boolean; }>`
  height: 116px;
  ${props => props.$user ? 'width: 100%' : ""};
  border: 0.3px solid #9CA3AF;
  border-radius: 10px;
  background-color: #111111;
  margin: ${props => props.$user ? '0px' : "0px 20px 20px 20px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

const MessageSearched = styled.Text`
  color: #E7E7E4;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 2px;
  margin-right: 20px;
  margin: 0 24px;
  text-align: center;
`