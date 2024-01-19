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
        <div className="mx-auto max-w-screen-lg">
            <div className="bg-grey-light rounded-3xl p-8">
                <h3 className="text-lg text-primary mb-4 font-semibold bg-grey">Add a New Book</h3>
                <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" onSubmit={handleSubmit}>

                
                <div className="mr-5 grid">
                <label>Title : </label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('title') ? 'error' : ''}`}
                />
                </div>

                <div className="mr-5 grid">
                <label>Author : </label>
                <input
                    type="text"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('author') ? 'error' : ''}`}
                /></div>

                <div className="mr-5 grid">
                <label>Publish Year : </label>
                <input
                    type="number"
                    onChange={(e) => setPublishYear(e.target.value)}
                    value={publishYear}
                    className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28 ${emptyFields && emptyFields.includes('publishYear') ? 'error' : ''}`}
                /></div>

                <div className="mr-5 grid">
                <label>Image Src : </label>
                <input
                    type="text"
                    onChange={(e) => setImageSrc(e.target.value)}
                    value={imageSrc}
                    className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('imageSrc') ? 'error' : ''}`}
                /></div>

                <div className="mr-5 grid">
                <label>Description : </label>
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('description') ? 'error' : ''}`}
                /></div>

                <div className="mr-5 grid">
                <label>Price : </label>
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28  ${emptyFields && emptyFields.includes('price') ? 'error' : ''}`}
                /></div>

<button className="col-span-full px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-primary">Add Book</button>
                {error && <div className="error ">{error}</div>}
            </form></div>
        </div>
    )
}

export default AddProducts;