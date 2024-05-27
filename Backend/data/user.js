import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync

const users = [
    {
        name: 'Spencer Lee',
        email: 'spencerlee@email.com',
        password: hash('spencer', salt) ,
        isAdmin: true
    },
    {
        name: 'Liege Spenc',
        email: 'spencer@email.com',
        password: hash('spencer', salt) ,
        isAdmin: false
    },
    {
        name: 'Nseabasi',
        email: 'nse@email.com',
        password: hash('spencer', salt) ,
        isAdmin: false
    },
]

export default users