import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  collection,
  limit,
  query,
  onSnapshot,
  getFirestore,
} from "@firebase/firestore";

/* Utils */
import fi from "../utils/firebase";
const Blogs = collection(getFirestore(fi), "Blogs");

/* Components */
import Animated from "./components/Animated";

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
      <Helmet>
        <title>Blog - Videophics</title>
        <meta
          name="description"
          content="Read our latest trending blogs on branding, marketing, and business growth." />
      </Helmet>
      <div className="container mx-auto py-10 dark:text-white max-w-[1300px]">
        <h1 className="text-4xl font-bold text-center text-violet-900 dark:text-slate-50">
          Blog
        </h1>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogslist.map((blog) => (
            <Animated varient="fade-in" key={blog.id}>
              <Link
                to={"/blog/" + blog.id}
                className="hover:opacity-70 transition duration-300 ease-in-out active:scale-100"
              >
                <div key={blog.id}>
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-60 object-cover mt-5 bg-slate-300 dark:bg-slate-700 rounded-md"
                  />
                  <h1 className="text-2xl font-[500] text-slate-900 dark:text-slate-50 mt-5 mb-2">
                    {blog.title}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    {blog.author} | {blog.publishedAt.toDate().toDateString()}
                  </p>
                </div>
              </Link>
            </Animated>
          ))}
        </div>
      </div>
    </>
  );
}
