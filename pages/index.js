import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import GoogleMap from '../components/GoogleMap';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <GoogleMap />
    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home
