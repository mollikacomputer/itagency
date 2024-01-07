import React from 'react';

const page = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h2 className='text-3xl' > Single Blog id is {params.id} </h2>
            <hr className='my-4'/>
            
            <h2 className='text-3xl' > {searchParams.title} </h2>
            <p>{searchParams.body}</p>
        </div>
    );
};

export default page;