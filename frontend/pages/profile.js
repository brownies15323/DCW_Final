import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import React,{ useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'
import useSWR, { mutate } from 'swr'
import Link from 'next/link'

const URL = `http://localhost/api/members`
const fetcher = url => axios.get(url).then(res => res.data)


const Profile1 = ({token}) => {
  // const [user, setUser] = useState({})

  //   useEffect(() => {
  //       profileUser()
  //   }, [])

  //   const profileUser = async () => {
  //       try {
  //           // console.log('token: ', token)
  //           const users = await axios.get(`${config.URL}/profile`, {
  //               headers: { Authorization: `Bearer ${token}` }
  //           })
  //           // console.log('user: ', users.data)
  //           setUser(users.data)
  //       }
  //       catch (e) {
  //           console.log(e)
  //       }

  //   }
  
    const { data } = useSWR(URL, fetcher)
   if (!data) return <div>Loading...</div>
  //  console.log(data)

  const showMembers = () => {
    if (data.list && data.list.length) {
      return data.list.map((member, index) => {
        return (
          <div className={styles.listItem} key={index}>
            <div className={styles.border}>
              <div><b>Name:</b> {member.name}</div>
              <div><b>Surname:</b> {member.surname}</div>
              <br/>
              <div><Link href="/editProfile"><a><b>Edit data</b> </a></Link> </div><br/>
            </div>
          </div>
        );
      });
    } else {
      return <p>Loading...</p>;
    }
  };

    return (
        <Layout>
            <Head>
                <title>Members profile</title>
            </Head>
            <div className={styles.Navbar}>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div>
                    <center>
                    <h1>Members profile</h1>
                    </center>
                    {showMembers()}
                </div>
            </div>
        </Layout>
    )
}
export default Profile1

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
