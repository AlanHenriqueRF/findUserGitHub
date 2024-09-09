import NavBar from '@/components/navBar';
import { styled } from 'styled-components/native';

export default function RecentSearchesScreen() {
  return (
    <>
      <ContainerScreen>
        <NavBar home={true}></NavBar>
      </ContainerScreen>
    </>
  );
}

const ContainerScreen = styled.ScrollView`
background-color: #1D1B1B;
`
