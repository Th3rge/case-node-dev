import jwt from 'jsonwebtoken'


export default function creatingToken() {
    const payload = {userId: 1234}
    const secretKey = 'password'
    
    const token = jwt.sign(payload, secretKey)
    console.log('Token JWT', token)
    
    jwt.verify(token, secretKey)

}