import * as jwt from 'jsonwebtoken'

export default function creatingToken() {
    const payload = {Id: 'therge'}
    const secretKey = 'password'
    const options = {
        expiresIn: '1d'
    }
    

    const token = jwt.sign(payload, secretKey, options)
    console.log('Token JWT', token)
    
    jwt.verify(token, secretKey)

    token ? token : "Token Invalid"

}