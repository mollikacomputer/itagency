import Link from 'next/link';
import React from 'react';

const page = () => {

    const blogs = [
        {
            id:1,
            title:"blog 1 title",
            body: "blog description a,",
        },
        {
            id:2,
            title:"blog 2 title",
            body: "blog description 2,",
        },
    ]
    return (
        <div>
            <h2 className='text-3xl'> Blogs Page</h2>
            <ul>
                {
                    blogs.map((blog)=> 
                    <li className='my-4' key={blog.id} >
                        <Link href={`/blogs/${blog.id}`} > {blog.title} </Link> 
                    </li> )
                }
            </ul>
        </div>
    );
};

export default page;