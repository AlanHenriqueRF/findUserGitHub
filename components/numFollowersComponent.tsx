import { styled } from 'styled-components/native';
import { FollowersNumType } from '@/utils/protocols';

export function NumFollowersComponent({ followers, public_repos }: FollowersNumType) {
  return (
    <MidiaContainer>
      <FollowersRepo>
        <Num>{followers}</Num>
        <Tex>Followers</Tex>
      </FollowersRepo>
      <FollowersRepo>
        <Num>{public_repos}</Num>
        <Tex>Repositories</Tex>
      </FollowersRepo>
    </MidiaContainer>
  )
}

const MidiaContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;
`

const FollowersRepo = styled.View`
  background-color: #111111;
  height: 92px;
  border-radius: 8px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Num = styled.Text`
  color: #9CA3AF;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
`

const Tex = styled.Text`
  color: #6E6E77;
  font-size: 16px;
  font-weight: 400;
`