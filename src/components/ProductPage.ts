import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { getCategory } from '../endpoints/endpoints'

interface Category {
    id: string,
    parent: Category | null, 
    name: string
}

interface Product {
    id: string,
    categories: Category[],
    name: string,
    qnty: number,
    price: number
}

const App = () => {
    
}