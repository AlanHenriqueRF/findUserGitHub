import { styled } from "styled-components/native";
import * as Device from 'expo-device';
import { OsNameInfo } from '@/utils/protocols';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function NavBar({ home }: {home: boolean}) {
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
        <>
            <ContainerNav $heightOs={osName.osName === "iOS" ? '127px' : '100px'} home={home}>
                {home ? <></> : 
                <Link href={'/'}>
                    <Ionicons name="arrow-back-outline" size={40} color="#ffffff" />
                </Link> 
                }
                <Link href={'https://github.com/'}>
                    <Ionicons name="logo-github" size={50} color="#ffffff" />
                </Link>
            </ContainerNav>
        </>
    );
}

const ContainerNav = styled.View<{ $heightOs?: string; home: boolean }>`
    background-color: #111111;
    height: ${props => props.$heightOs};
    display: flex;
    flex-direction: ${props => props.home ? 'column': 'row' } ;
    align-items: center;
    justify-content: ${props => props.home ? 'center': 'space-between' };
    padding-top: ${props => props.$heightOs === '127px' ? '30px': '0px'};
    margin: 0 0 20px 0;
    padding: ${props => props.home ? (props.$heightOs === '127px' ? '32px 0 0 0' : '0') : (props.$heightOs === '127px' ? '32px 15px 0 15px' : '0 15px 0 15px' )};
`