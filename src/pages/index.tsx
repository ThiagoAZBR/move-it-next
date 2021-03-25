import Head from 'next/head'

import { GetServerSideProps } from 'next';
import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import $ from 'jquery'


interface HomeProps {

  level: number;
  currentExperience: number;
  challengesCompleted: number;

}

import styles from '../styles/pages/Home.module.css'
import { useContext, useEffect, useState } from 'react';
import { isBlock } from 'typescript';
import { Settings } from '../components/Setting';

export default function Home(props: HomeProps) {


  let size_screen = 200

  if (typeof window !== "undefined") {
    // browser code
    size_screen = window.innerWidth
  }

  

  return (

    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
    >

      <div className = {styles.container}>

        <Head>
          <title>Princípia | Move It</title>
        </Head>

        <ExperienceBar />


        <CountdownProvider>
          <section>
            <div >
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>

            <ChallengeBox />

            </div>
          </section>
          {/* <Settings /> */}
        </CountdownProvider>



      </div>
    </ChallengesProvider>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {

    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }

  }

}