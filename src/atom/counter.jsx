
import { atom } from 'recoil'
const counter=atom({
    key:'counter',
    default:5
})
export {counter};