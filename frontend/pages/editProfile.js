import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import Layout from '../components/layout'
import withAuth from '../components/withAuth'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import config from '../config/config'

const URL = `http://localhost/api/members`

const fetcher = url => axios.get(url).then(res => res.data)

const SWR1 = ({token}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/editProfile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

   const [member, setMember] = useState('')
   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')

   const { data } = useSWR(URL, fetcher)
   if (!data) return <div>Loading...</div>
   //console.log(data)

   const printMembers = (members) => {
       console.log('Members:', members)
       if (members && members.length)
           return (members.map((member, index) =>
           (<li key={index}>
               {(member) ? member.name : '-'} : {(member) ? member.surname : '-'}
               <button onClick={() => deleteMember(member.id)}> Delete </button>
               <button onClick={() => getMember(member.id)}>Select</button>
               <button onClick={() => updateMember(member.id)}>Update</button>
           </li>)
           ))
       else {
           return (<h2>No Menmbers</h2>)
       }
   }

   const getMember = async (id) => {
       const result = await axios.get(`${URL}/${id}`)
       console.log('member id: ', result.data)
       setMember(result.data)
   }

   const addMember = async (name, surname) => {
       const result = await axios.post(URL, { name, surname })
       console.log(result.data)
       mutate(URL)
   }

   const deleteMember = async (id) => {
       const result = await axios.delete(`${URL}/${id}`)
       console.log(result.data)
       mutate(URL)
   }
    const updateMember = async (id) => {
       const result = await axios.put(`${URL}/${id}`,{
           name,
           surname
       })
       console.log('Member id update: ', result.data)
       mutate(URL)
   }

   return (
     <Layout>
           <div className={styles.Navbar}>
                <Navbar />
            </div>
       <div className={styles.container}>
           <h1> Member</h1>
           <ul>{printMembers(data.list)}</ul> <br/>
           selected member: {member.name} {member.surname}
           <h2>Add member</h2>
           Name:<input type="text" onChange={(e) => setName(e.target.value)} /><br/>
           Surname:<input type="text" onChange={(e) => setSurname(e.target.value)} /><br/>
           <button onClick={() => addMember(name, surname)}>Add new member</button>

      </div>
    </Layout>
   )
}
export default withAuth(SWR1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}