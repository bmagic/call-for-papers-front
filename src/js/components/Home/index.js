import React from 'react'
import Layout from '../Layout'
import TalkForm from '../TalkForm'
import TalksList from '../TalksList'

const Home = () => {
  return (
    <Layout>
      <h1 className='title'>Call For Papers</h1>
      <div className='columns'>
        <div className='column is-8'>
          //TODO
        </div>
        <div className='column is-4'>
          <TalkForm/>
          <TalksList/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
