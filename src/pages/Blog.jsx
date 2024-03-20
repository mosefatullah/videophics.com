import React from "react";
import { Link } from "react-router-dom";
import fi from "../utils/firebase";
import {
  collection,
  limit,
  query,
  onSnapshot,
  getFirestore,
} from "@firebase/firestore";

const Blogs = collection(getFirestore(fi), "Blogs");

/* Components */

/*
   /id
       title
       body
       author
       publishedAt
       category
       thumbnail
*/

export default function Blog() {
  const [blogslist, setblogs] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(query(Blogs, limit(10)), (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setblogs(data);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className="container mx-auto py-10 dark:text-white">
        <h1 className="text-4xl font-bold text-center text-violet-900 dark:text-slate-50">
          Blog
        </h1>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogslist.map((blog) => (
            <Link
              to={
                "/blog/" + blog.id
              }
              className="hover:underline hover:transform hover:scale-105 transition duration-300 ease-in-out active:scale-100"
            >
              <div key={blog.id}>
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-60 object-cover mt-5"
                />
                <h1 className="text-2xl font-bold text-violet-900 dark:text-slate-50 mt-5 mb-2">
                  {blog.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
