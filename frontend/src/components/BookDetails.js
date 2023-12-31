const BookDetails = ({ book }) => {
    return(
        <div className="fetchAllBooks w-242">
            <div className="books text-black m-5">
                <div className="max-w-sm bg-grey rounded-lg shadow dark:bg-grey-light">
                    <a href="#">
                        <img src={book.imageSrc} alt={book.title} className="rounded-t-lg w-80 h-72"/>
                    </a>
                    <div className="p-5">
                        <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">{book.title}</h5>
                        </a>
                        <p className="mb-1 font-normal text-gray-700 dark:text-gray-500">{book.author}</p>
                        <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-grey">{book.price}$</p>
                        <div className="btnSection grid items-center">
                            <a href="#" className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black hover:text-white hover:bg-grey hover:border-black text-center">
                            Add to cart
                            </a>
                            <a href="#" className="px-5 py-2 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary text-center mt-2">
                            Buy now

                            </a>
                        </div>
                        
                </div>
                </div>
            </div>
        </div>

    )
}

export default BookDetails