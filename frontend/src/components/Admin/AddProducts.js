import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useState } from "react";
//import { BooksContext } from "../../context/BooksContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBooksContext } from "../../hooks/useBooksContext";

function AddProducts(){
    const {dispatch} = useBooksContext()
    const {user} = useAuthContext()
    
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [imageSrc, setImageSrc] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Check if already authenticated and redirect
        if (localStorage.getItem("user")) {
            return <Navigate to="/admindash" />;
        }

        if(!user){
            setError('You must be logged in')
            return
        }


        const book = {title, author, publishYear, imageSrc, description, price}

        const response = await fetch('http://localhost:9092/api/books/admindash/products', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${user.token}`

            }
        })

        const json =  await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setError(null)
            setTitle('')
            setAuthor('')
            setPublishYear('')
            setImageSrc('')
            setDescription('')
            setPrice('')
            setEmptyFields([])
            dispatch({type: 'CREATE_BOOK', payload: json})
        }
    }
    return(
        <div className="ml-64">
            <h3>Add a New Book</h3>
        <form className="create" onSubmit = {handleSubmit}>
            

            <label>Title : </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('title') ? 'error' : ''}`}
            />

            <label>Author : </label>
            <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('author') ? 'error' : ''}`}
                />
            <label>Publish Year : </label>
            <input
                type="number"
                onChange={(e) => setPublishYear(e.target.value)}
                value={publishYear}
                className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('publishYear') ? 'error' : ''}`}
                />
            
            <label>Image Src : </label>
            <input
                type="text"
                onChange={(e) => setImageSrc(e.target.value)}
                value={imageSrc}
                className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('imageSrc') ? 'error' : ''}`}
            />

            <label>Description : </label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('description') ? 'error' : ''}`}
            />

            <label>Price : </label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('price') ? 'error' : ''}`}
            />

            <button className="mx-auto px-5 py-2 px-10 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary">Add Book</button>
            {error && <div className="error ">{error}</div>}
        </form></div>
    )
}

export default AddProducts;