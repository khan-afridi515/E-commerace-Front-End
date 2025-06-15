import React from 'react'
import Slide from './middle/sliding'
import Aboutt from './about'
import Wrap from './wraper'
import Given from './given'
import Test from '../testimonail/test'


const Home = ({functt, match, clear}) => {
  return (
    <div>
       <Slide functi={functt} matchh={match} clean={clear} />
       <Aboutt/>
       <Given/>
       <Wrap/>
       <Test/>
    </div>
  )
}

export default Home
