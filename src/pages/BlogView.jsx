import React from "react";
import { useParams } from "react-router-dom";
import fi from "../utils/firebase";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import edjsParser from "editorjs-parser";

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

export default function BlogView() {
  const [blogData, setBlogData] = React.useState({});
  const id = useParams().id;

  React.useEffect(() => {
    const getBlog = async () => {
      const docRef = doc(getFirestore(fi), "Blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlogData({ ...docSnap.data(), id: docSnap.id });
        console.log(blogData);
      } else {
        console.log("No such document!");
      }
    };
    getBlog();
  }, [id]);

  return (
    <>
      <div className="container mx-auto py-10 dark:text-white">
        {blogData.title && (
          <div key={id}>
            <h1 className="text-2xl font-bold text-violet-900 dark:text-slate-50 mt-5 mb-2">
              {blogData.title}
            </h1>
            <img
              src={blogData.thumbnail}
              alt={blogData.title}
              className="w-full h-60 object-cover mt-5"
            />
            <p
              className="_blog-body"
              dangerouslySetInnerHTML={{
                __html: new edjsParser({
                  youtube: `<iframe src="<%data.embed%>" width="<%data.width%>"><%data.caption%></iframe>`,
                  list: `<ul><%data.items.map(item => { return '<li>' + item + '</li>' }).join('')}</ul>`,
                }).parse(JSON.parse(blogData.body)),
              }}
            ></p>
          </div>
        )}
      </div>
    </>
  );
}
