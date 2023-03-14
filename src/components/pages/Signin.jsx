import React from 'react'
import styled from 'styled-components'

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

`

const SubTitle = styled.h2`
  
`

const Input = styled.input`
  
`

const Button = styled.button`
  
`

const More = styled.div`
  
`

const Links = styled.div`
  display: flex;
`

const Link = styled.span`
`

const Loguin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Cadastrar</Title>
        <SubTitle>Para Entrar No DenyTube</SubTitle>
        <Input placeholder='Seu Nome'></Input>
        <Input type="pas" placeholder='Sua Senha'></Input>
        <Button>Entrar</Button>
        <Title> Ou </Title>
        <Input placeholder='Seu Nome'></Input>
        <Input placeholder='Email'></Input>
        <Input type="pas" placeholder='Sua Senha'></Input>
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

export default Loguin