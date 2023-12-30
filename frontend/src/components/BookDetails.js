const BookDetails = ({ book }) => {
    return(
        <div className="fetchAllBooks grid">
            <div className="books text-black">
            
                    <div className="max-w-sm bg-grey rounded-lg shadow dark:bg-grey-light">
                        <a href="#">
                            <img src={book.imageSrc} alt={book.title} className="rounded-t-lg" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">{book.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">{book.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {book.price}$
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

            </div>
            </div>
    )
}

export default BookDetails