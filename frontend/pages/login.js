import Head from "next/head";
import Layout from "../components/layout";
import { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import config from "../config/config";

export default function Login({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [remember, setRemember] = useState(false);
  const login = async (req, res) => {
    try {
      let result = await axios.post(`${config.URL}/login`,{ username, password, remember },{ withCredentials: true });
      console.log("result: ", result);
      console.log("result.data:  ", result.data);
      console.log("token:  ", token);
      setStatus(result.status + ": " + result.data.user.username);
    } 
    catch (e) {
      console.log("error: ", JSON.stringify(e.response));
      setStatus(JSON.stringify(e.response).substring(0, 80) + "...");
    }
  };
  const rememberMe = async () => {
    setRemember(!remember);
  };

  const loginForm = () => (
    <div className={styles.gridContainer}>

      <div><b>Username:</b></div>
      <div>
        <input type="text" name="username"  placeholder="username"  onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div><b>Password:</b></div>
      <div>
        <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      </div> 

      <div className="flex items-center">
        <input id="remember_me" name="remember_me" type="checkbox" onClick={rememberMe} />
      </div> 

      <div><screenLeft><label>Remember Me</label></screenLeft></div>
    </div>
  );

  const copyText = () => {
    navigator.clipboard.writeText(token);
  };

  return (
    <Layout>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className={styles.Navbar}>
                <Navbar />
                </div>
      <div className={styles.container}>
        <h1>Login</h1>
        <br />
        <div>Status: {status}</div>
        <br />
        {loginForm()}
        <div>
          <button onClick={login}>Login</button>
        </div>
        <div>
        <img src="https://cdn0.iconfinder.com/data/icons/beauty-cosmetics-set/128/Full_Beauty_Cosmetics_Line_Icons_Live-12-512.png"
            width="500" height="500">
              </img>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}