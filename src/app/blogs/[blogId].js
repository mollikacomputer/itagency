import { useRouter } from 'next/router';


const blogDetails = () => {
    const router = useRouter();
    const {blogId} = router.query;

    const blogData = fetchBlogData(blogId);
    if (!blogData) {
    return <p>Loading...</p>;
  }
    return (
        <div>
            <h2 className='text-3xl'> {blogData.title}  </h2>
            <p>{blogData.body}</p>

        </div>
    );
};

export default blogDetails;