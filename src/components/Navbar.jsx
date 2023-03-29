import React from 'react'
import styled from 'styled-components'
import { AccountCircleOutlinedIcon } from '../helpers/materialsIcons'
import { SearchOutlinedIcon, VideoCallOutlinedIcon, NotificationsOutlinedIcon } from "../helpers/materialsIcons"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { Badge } from '@mui/material'



const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLIght};
  height: 56px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.bg};
  justify-content: flex-end;
  position: relative;
  background-color: to;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 90px;
  overflow: hidden;
  border: 1px solid black;
`

const Button = styled.button`
    padding: 5px 15px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
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
        color: white;
    }
`

const Input = styled.input`
  background-color: ${({ theme }) => theme.bg};
  outline: none;
  width: 92%;
  height: 40px;
  padding: 0px 15px;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  border: none;
`

const IconSearch = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50px;
  cursor: pointer;

  .icon {
    font-size: 35px;
  }
`

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};

`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`

const Navbar = () => {

  const { currentUser } = useSelector(state => state.user) //when video, state.video

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Buscar' />
          <IconSearch>
            <SearchOutlinedIcon className='icon' />
          </IconSearch>
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon className='cursor-pointer'/>
            <Badge badgeContent={4} color="primary">
              <NotificationsOutlinedIcon className='cursor-pointer' />
            </Badge>
            <Avatar src={currentUser.img}></Avatar>
            {currentUser.name}
          </User>
        ) : (
          <Link to="signin" >
            <Button className='link'> <AccountCircleOutlinedIcon />Entrar</Button>
          </Link>
        )
        }
      </Wrapper>
    </Container>
  )
}

export default Navbar