const MatchesList = () => {

    return(

    <div className='w-full rounded-lg shadow-lg p-4'>
        <h2 className='font-bold text-2xl mb-4'>matttches List</h2>
        <ul>
            {
                [
                    { id : "12345678", firstName: "Foo", lastName: "AZZA", imageUrl: "http://localhost:8080/images/69e96be7-17cb-4fec-92ce-7484b5025a6f.jpg"},
                    {id : "1233231212", firstName: "ZRERF", lastName: "2 AZZA", imageUrl: "http://localhost:8080/images/69e96be7-17cb-4fec-92ce-7484b5025a6f.jpg"},
                    {id : "EDE232323", firstName: "Foo", lastName: "3 AZZA", imageUrl: "http://localhost:8080/images/69e96be7-17cb-4fec-92ce-7484b5025a6f.jpg"}
                ].map(match => (
                    <li key={match.id} className="mb-3">
                        <button className='flex w-full hover:bg-gray-100 rounded-lg items-center'>
                            <img src={match.imageUrl} className="w-20 h-20 rounded-full mr-3" />
                            <span>
                                <h3>{match.firstName} {match.lastName}</h3>
                            </span>
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
    );
}

export default MatchesList