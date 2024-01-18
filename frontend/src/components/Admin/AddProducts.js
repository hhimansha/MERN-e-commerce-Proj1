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
        <form className="create" onSubmit = {handleSubmit}>
            <h3>Add a New Book</h3>

            <label>Title : </label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields && emptyFields.includes('title') ? 'error' : ''}
            />

            <label>author : </label>
            <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                className={emptyFields && emptyFields.includes('author') ? 'error' : ''}
            />

            <label>publishYear : </label>
            <input
                type="number"
                onChange={(e) => setPublishYear(e.target.value)}
                value={publishYear}
                className={emptyFields && emptyFields.includes('publishYear') ? 'error' : ''}
            />

            <label>imageSrc : </label>
            <input
                type="text"
                onChange={(e) => setImageSrc(e.target.value)}
                value={imageSrc}
                className={emptyFields && emptyFields.includes('imageSrc') ? 'error' : ''}
            />

            <label>description : </label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields && emptyFields.includes('description') ? 'error' : ''}
            />

            <label>price : </label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className={emptyFields && emptyFields.includes('price') ? 'error' : ''}
            />

            <button>Add Book</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default AddProducts;