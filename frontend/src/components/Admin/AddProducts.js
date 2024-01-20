import React, { useEffect, useState } from "react";
import { useNavigate, Navigate  } from 'react-router-dom';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBooksContext } from "../../hooks/useBooksContext";

function AddProducts() {
    const [books, setBooks] = useState([]);
    const { dispatch } = useBooksContext();
    const { user } = useAuthContext();
    //const navigate  = useNavigate ();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [imageSrc, setImageSrc] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
 
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:9092/api/books/');
                if (response.ok) {
                    const json = await response.json();
                    setBooks(json);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

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
            setDescription('')
            setImageSrc('')
            setPrice('')
            setEmptyFields([])
            dispatch({type: 'CREATE_BOOK', payload: json})
        }

        // Check if already authenticated and redirect
        if (localStorage.getItem("user")) {
            return <Navigate to="/admindash" />;
        }

        if(!user){
            setError('You must be logged in')
            return
        }
    }

    const handleClick = async (bookId) => {
        if (!user) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:9092/api/books/admindash/products/${bookId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'DELETE_BOOK', payload: json });
            }
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:9092/api/books/');
                if (response.ok) {
                    const json = await response.json();
                    setBooks(json);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [dispatch]); 
    

    
    
    return(
        <div className="mx-auto max-w-fit">
            <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md">
                <h3 className="text-lg text-primary mb-4 font-semibold bg-grey">Add a New Book</h3>
                <form className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4" onSubmit={handleSubmit}>

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
                    <label>Description : </label>
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className={`rounded-full p-2 px-5 mb-4 border border-gray-300 ${emptyFields && emptyFields.includes('description') ? 'error' : ''}`}
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
                    <label>Price : </label>
                    <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        className={`rounded-full p-2 px-5 mb-4 border border-gray-300 w-28  ${emptyFields && emptyFields.includes('price') ? 'error' : ''}`}
                    /></div>

                    <button className="col-span-1 px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-primary">Add Book</button>
                    {error && <div className="error ">{error}</div>}
                </form>
            </div>

            <div className="bg-grey-light rounded-3xl p-8 drop-shadow-md my-10">
                <form></form>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th colSpan="7" className="text-lg text-primary font-semibold bg-grey mb-4 text-left">Stored Books</th>
                        </tr>
                        <tr>
                            <th>Product ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Description</th>                  
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book._id}>
                                <td>{book._id}</td>
                                <td><div className="w-32 h-36 "><img src={book.imageSrc} alt={book.title} className="rounded-t-lg w-32 h-36 "/></div></td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td className="w-80">{book.description}</td>                               
                                <td>{book.price}</td>
                                <td>
                                    <div className="grid">
                                    <button className="px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-grey"
                                    onClick={handleClick}>Update</button>
                                    <button
                                        className="px-5 py-2 text-lg text-white font-semibold rounded-full border focus:outline-none bg-red-500"
                                        onClick={() => handleClick(book._id)}
                                    >
                                        Delete
                                    </button>

                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AddProducts;