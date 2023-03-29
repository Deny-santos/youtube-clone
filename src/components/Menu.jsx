import React from 'react'
import styled from 'styled-components'
import { logo } from '../imgs'
import {
    ExploreOutlinedIcon, HomeIcon, SubscriptionsOutlinedIcon, LibraryAddCheckOutlinedIcon, HistoryOutlinedIcon, LibraryMusicOutlinedIcon, SportsBasketballOutlinedIcon, SportsEsportsOutlinedIcon, MovieCreationOutlinedIcon, FeedOutlinedIcon, LiveTvOutlinedIcon, SettingsOutlinedIcon, OutlinedFlagIcon, HelpOutlineOutlinedIcon, PlayCircleOutlineOutlinedIcon, LightbulbOutlinedIcon, ShoppingBagOutlinedIcon, AccountCircleOutlinedIcon
} from "../helpers/materialsIcons"
import { Link } from 'react-router-dom'
import { Switch } from '@mui/material'
import { useSelector } from 'react-redux'


const Container = styled.div`
    flex: 1.2;
    min-width: min-content;
    height: 100vh;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bgLight}; //menu is in themeProvider on the app js
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 5rem;
    position: sticky;
    top: 0;
`

const Wrapper = styled.div`
    padding: 18px 24px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    margin-left: 0%;
    margin-bottom: 25px;
`

const Img = styled.img`
    height: 25px;
    animation: movingToLeft 5s alternate;

    @keyframes movingToLeft {
        0%{
            position: absolute;
            left: 80%;
            z-index: 2;
        }
        90%{
            left: -80%;
            position: static;
            transition: 1s;
        }
        100%{
            z-index: 0;
        }
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    cursor: pointer;
    padding: 7.5px;

    &:hover{
        background-color: ${({ theme }) => theme.bgHover};
        border-radius: 6px;
    }
`

const Hr = styled.hr`
    margin: 16px 0;
    border: 0.5px solid ${({ theme }) => theme.soft};
`

const Login = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 300;
    `
const Button = styled.button`
    padding: 15px 15px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    border-radius: 3px;
    margin-top: 15px;
    transition: .4s;
    border-radius: 30px;
    
    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        gap: 10px;
        color: #3ea6ff;
        text-decoration: none;
        transition: .4s;
    }

    &:hover {
        background-color: #3ea6ff;
        
        .link {
            color: white;

        }
    }
`

const Title = styled.h2`
font-size: 14px;
    margin: 15px 0;
`


const Menu = ({ darkMode, SetDarkMode }) => {

    const { currentUser } = useSelector(state => state.user)

    return (
        //remerber, if click in some of the routes and dont work, its because dont have any users logged
        <Container>
            <Wrapper>
                <Link to="/" className="link">
                    <Logo>
                        <Img src={logo} />
                        DenyTube
                    </Logo>
                </Link>
                <Link to="/" className="link">
                    <Item>
                        <HomeIcon />Inicio
                    </Item>
                </Link>
                <Item>
                    <PlayCircleOutlineOutlinedIcon />Shorts
                </Item>
                <Link className="link" to="trend">
                    <Item>
                        <ExploreOutlinedIcon />Explore +
                    </Item>
                </Link>
                <Link to="subscriptions" className="link">
                    <Item>
                        <SubscriptionsOutlinedIcon />Escrições
                    </Item>
                </Link>

                <Hr />

                <Item>
                    <LibraryAddCheckOutlinedIcon />Biblioteca
                </Item>
                <Item>
                    <HistoryOutlinedIcon />Historia
                </Item>

                {!currentUser ? (

                <Login>
                    <Hr />
                    Entre para assitir, curtir e comentar seus videos
                    <Button>
                        <Link className='link' to="signin">
                            <AccountCircleOutlinedIcon /> Entrar
                        </Link>
                    </Button>
                </Login>
                ): ""
                }
                <Hr />

                <Title>O melhor do DenyTube</Title>
                <Item>
                    <LibraryMusicOutlinedIcon />Musicas
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />Esports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />Games
                </Item>
                <Item>
                    <MovieCreationOutlinedIcon />Filmes
                </Item>
                <Item>
                    <FeedOutlinedIcon />Noticias
                </Item>
                <Item>
                    <LightbulbOutlinedIcon />Aprender
                </Item>
                <Item>
                    <ShoppingBagOutlinedIcon />Inicio
                </Item>
                <Item>
                    <LiveTvOutlinedIcon />Live
                </Item>

                <Hr />

                <Item>
                    <SettingsOutlinedIcon />Configurações
                </Item>
                <Item>
                    <OutlinedFlagIcon />Denunciar
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />Ajuda
                </Item>
                <Item style={{gap: "0px"}} >
                <Switch onClick={() => SetDarkMode(!darkMode)} defaultChecked /> Modo escuro
                </Item >
            </Wrapper>
        </Container>
    )
}

export default Menu