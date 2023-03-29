import React, { useState } from 'react'
import styled from 'styled-components'
import { ThumbUpOutlinedIcon, ThumbUpIcon, ThumbDownAltOutlinedIcon, ThumbDownIcon, ReplySharpIcon, } from "../../helpers/materialsIcons"
import Comments from '../Comments'

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin: 10px 0px 40px 0px;
`

const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div`
  flex: 5;
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
`

const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`

const Span = styled.span`
  color: ${({ theme }) => theme.text};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;

  span {
    display: flex;
    gap: 5px;
  }
  .efect {
  animation: like 1.5s ;
}

@keyframes like {
  0%{
    color: white;
  }
  25% {
    color: pink;
    transform: rotate(-30deg);
  }
  50% {
    color: red;
    transform: rotate(-30deg);
  }
  90%{
    color: pink;
  }
  100% {
    color: white;
  }
}
`

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.bg};
`

const ButtonWapp = styled.div`
  width: max-content;
  height: min-content;
  background-color: ${({ theme }) => theme.wrapper};
  display: flex;
  gap: 20px;
  padding: 6px 10px;
  border-radius: 20px;

  .icon {
    color: ${({ theme }) => theme.text};
  }
`

const Recomendation = styled.div`
  flex: 2;
  background-color: tomato;
`

const Hr = styled.hr`
  margin: 15px 0px;
  border:0.5px solid ${({ theme }) => theme.soft};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`

const ChannelDescription = styled.p`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`

const ChanelInfo = styled.div`
  display: grid;
  grid-template-columns: .7fr 1fr 1fr;

  width: max-content;
`

const ChannelMainInfo = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
`

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 20px;
  height: max-content;
  padding: 10px 15px;
  cursor: pointer;
  margin: 0 auto;
`

const VideoInfoWapper = styled.div`
  display: flex;
`

const Video = () => {

    const [like, setLike] = useState(false)
    const [deslike, setDeslike] = useState(false)

    function transitionLike(valor) {
        if (valor) {
            const likeButton = document.getElementById("like")
            likeButton.classList.add('efect')
        } else {
            const likeButton = document.getElementById("like")
            likeButton.classList.remove('efect')
        }
    }

    function handleLike() {
        if (!like) {
            setLike(true)
            transitionLike(true)
            setDeslike(false)
        } else {
            setLike(false)
            transitionLike(false)
        }
    }

    function handleDeslike() {
        if (!deslike) {
            setLike(false)
            setDeslike(true)
            transitionLike(false)
        } else {
            setDeslike(false)
        }
    }

    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="600" src="https://www.youtube.com/embed/KNRdbiw11NM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </VideoWrapper>

                <Title>LEXICA: Melhor que MIDJOURNEY?</Title>

                <VideoInfoWapper>
                    <ChanelInfo>
                        <Img src='https://picsum.photos/200/360' />
                        <ChannelMainInfo>
                            <ChannelName>I.A Zone</ChannelName>
                            <ChannelCounter>1 mi Inscritos</ChannelCounter>
                        </ChannelMainInfo>
                        <Subscribe>Escrever-se</Subscribe>
                    </ChanelInfo>

                    <Details>
                        <Buttons>
                            <ButtonWapp>
                                <Span>
                                    <Button id="like" onClick={handleLike}>{like ? <ThumbUpIcon className='icon' /> : <ThumbUpOutlinedIcon className='icon' />}</Button> 81554
                                </Span>
                                <Span>
                                    <Button onClick={handleDeslike}>{deslike ? <ThumbDownIcon className='icon' /> : <ThumbDownAltOutlinedIcon className='icon' />}</Button> 98
                                </Span>
                            </ButtonWapp>
                            <ButtonWapp>
                                <Button className='icon'><ReplySharpIcon />Compartilhar</Button>
                            </ButtonWapp>
                        </Buttons>
                    </Details>

                </VideoInfoWapper>
                <Hr />
                <Channel>

                    <ChannelDetails>
                        <ChannelDescription>
                            <Info>7,948,154 visualizações - 15 março 2023</Info>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum minima, deserunt voluptatem ipsa nam temporibus, nobis error consequatur maxime eveniet tempora ipsam doloremque, facilis neque ratione necessitatibus aperiam cum?
                        </ChannelDescription>
                    </ChannelDetails>
                </Channel>
                <Comments />
            </Content>
            <Recomendation>recomendations </Recomendation>
        </Container>

    )
}

export default Video