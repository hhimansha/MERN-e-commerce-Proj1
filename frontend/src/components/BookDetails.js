const BookDetails = ({ book }) => {
    return(
        <div className="fetchAllBooks w-64">
            <div className="books text-black m-5">
                <div className="max-w-sm bg-grey rounded-lg shadow dark:bg-grey-light">
                <a href="#">
                    <img src={book.imageSrc} alt={book.title} className="rounded-t-lg" height={100} />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">{book.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">{book.description}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">
                    {book.price}$
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    </a>
                </div>
                </div>
            </div>
        </div>

    )
}

export default BookDetails