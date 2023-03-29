import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { auth, provider} from "../../firebase"
import { signInWithPopup } from "firebase/auth"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({ theme }) => theme.soft};
  gap: 10px;
`

const Title = styled.h1`
  font-size: 24px;
`

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`

const Input = styled.input`
  border: 1px solid  ${({ theme }) => theme.soft };
  border-radius: 3px;
  padding: 10px;
  background-color: transparent ;
  width: 100%;
  color: ${({theme}) => theme.text};
`

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color:  ${({ theme }) => theme.soft };
  color:  ${({ theme }) => theme.textSoft };
`

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 13px;
  color:  ${({ theme }) => theme.textSoft};

`

const Links = styled.div`
  margin-left: 50px;

`

const Link = styled.span`
  margin-left: 30px;
`

const Signin = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const dispatch = useDispatch()

  async function handleLogin (e) {
    e.preventDefault()
    dispatch(loginStart())
    try {
      const resp = await axios.post("auth/signin", {name,password})
      dispatch(loginSuccess(resp.data))
    } catch (error) {
      console.log("credentials is worng")
      dispatch(loginFailure())
    }
  }

  const handleSigninWithGoogle = async () => {
    dispatch(loginStart())
    signInWithPopup(auth, provider)
      .then((result) => {
        axios.post("/auth/google", {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        }).then((res) => {
          dispatch(loginSuccess(res.data))
        })
      })
      .catch((err) => loginFailure())
  }

  return (
    <Container>
      <Wrapper>
        <Title>Cadastrar</Title>
        <SubTitle>Para Entrar No DenyTube</SubTitle>
        <Input placeholder='Seu Nome' onChange={e => setName(e.target.value)}/>
        <Input type="password" placeholder='Sua Senha' onChange={e => setPassword(e.target.value)}/>
        <Button type="submit" onClick={handleLogin}>Entrar</Button>
        <Title> Ou </Title>
        <Button onClick={handleSigninWithGoogle}>Entrar Com O Google</Button>
        <Title> Ou Então </Title>
        <Input placeholder='Seu Nome' onChange={e => setName(e.target.value)}/>
        <Input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder='Sua Senha' onChange={e => setPassword(e.target.value)}/>
        <Button>Criar Conta</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Ajuda</Link>
          <Link>Privacidade</Link>
          <Link>Termos</Link>
        </Links>
      </More>
    </Container>
  )
}

export default Signin