import React from 'react'
import Layout from '../../components/Layout'
import TalkForm from '../../components/TalkForm'
import TalksList from '../../components/TalksList'

const Home = () => {
  return (
    <Layout>
      <h1 className='title'>Call For Papers</h1>
      <div className='columns'>
        <div className='column is-8'>
          <TalksList/>
        </div>
        <div className='column is-4'>
          <TalkForm/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
