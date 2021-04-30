
const express = require('express'),
    app = express(),
    passport = require('passport'),
    port = process.env.PORT || 80,
    cors = require('cors'),
    cookie = require('cookie')

const bcrypt = require('bcrypt')

const db = require('./database.js')
let users = db.users

require('./passport.js')

const router = require('express').Router(),
    jwt = require('jsonwebtoken')

app.use('/api', router)
router.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// router.use(cors())
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

let members = {
    list: [
        { "id": 4010341, "name": "Warodom", "surname": "Werapun"},
        { "id": 4010342, "name": "John", "surname": "Lennon"},
        { "id": 4010342, "name": "Santi", "surname": "Rittijan"}]
 }


 router.post("/login", (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      console.log("Login: ", req.body, user, err, info);
      if (err) return next(err);
      if (user) {
          if (req.body.remember == true) {
            time_exp = "7d";
          } else time_exp = "1d";
          const token = jwt.sign(user, db.SECRET, {
            expiresIn: time_exp,
          });
          var decoded = jwt.decode(token);
          let time = new Date(decoded.exp * 1000);
          console.log(new Date(decoded.exp * 1000));
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
            })
        );
        res.statusCode = 200;
        return res.json({ user, token });
      } else return res.status(422).json(info);
    })(req, res, next);
  });

router.get('/logout', (req, res) => { 
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: -1,
            sameSite: "strict",
            path: "/",
        })
    );
    res.statusCode = 200
    return res.json({ message: 'Logout successful' })
})

/* GET user profile. */
router.get('/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        res.send(req.user)
    });

router.post('/register',
    async (req, res) => {
        try {
            const SALT_ROUND = 10
            const { username, email, password } = req.body 
            if (!username || !email || !password)
                return res.json( {message: "Cannot register with empty string"})
            if (db.checkExistingUser(username) !== db.NOT_FOUND)
                return res.json({ message: "Duplicated user" })

            let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
            hash = await bcrypt.hash(password, SALT_ROUND)
            users.users.push({ id, username, password: hash, email })
            res.status(200).json({ message: "Register success" })
        } catch {
            res.status(422).json({ message: "Cannot register" })
        }
    })

router.get('/alluser', (req,res) => res.json(db.users.users))

router.get('/foo',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        res.send('Foo');
    });

router.route('/members')
    .get((req, res) => res.json(members))
    .post((req, res) => {
     console.log(req.body)
     let newMember = {}
     newMember.id = (members.list.length)?members.list[members.list.length - 1].id + 1:1
     newMember.name = req.body.name
     newMember.surname = req.body.surname
     members = { "list": [...members.list, newMember] }
     res.json(members)
     })
 
 router.route('/members/:member_id')
    .get((req, res) => {
        const member_id = req.params.member_id
        const id = members.list.findIndex(item => +item.id === +member_id)
        res.json(members.list[id])
    })
    .put((req, res) => {
     const member_id = req.params.member_id
     const id = members.list.findIndex(item => +item.id === +member_id)
     members.list[id].name = req.body.name
     members.list[id].surname = req.body.surname
     res.json(members.list[id])
     })
     .delete((req, res) => {
     const member_id = req.params.member_id
     console.log('memberId: ',member_id)
     members.list = members.list.filter(item => +item.id !== +member_id)
     res.json(members.list)
     })

router.get('/editProfile',
    passport.authenticate('jwt', { session: false }),
     (req, res, next) => {
         res.send(req.user)
     });
     
router.get('/', (req, res, next) => {
    res.send('Respond without authentication');
});

// Error Handler
app.use((err, req, res, next) => {
    let statusCode = err.status || 500
    res.status(statusCode);
    res.json({
        error: {
            status: statusCode,
            message: err.message,
        }
    });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`))

