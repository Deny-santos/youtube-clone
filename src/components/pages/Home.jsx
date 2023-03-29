import Card from '../Card'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
`


const Home = ({type}) => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const {data} = await axios.get(`/videos/${type}`)
      console.log(data)
      setVideos(data)
    }
    fetchVideos()
  },[type]) // reload when type changes

  return (
    <Container>
      {videos.map(video => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Home