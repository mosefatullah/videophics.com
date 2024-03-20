import React from "react";
import { useParams } from "react-router-dom";
import fi from "../utils/firebase";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import edjsParser from "editorjs-parser";

/* Components */
import TableOfContents from "./components/TableOfContents";

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
      {blogData.title && (
        <div key={id}>
          <div className="border-b-[rgba(255,255,255,0.2)] border-b-[1px] md:flex gap-4 items-center max-h-screen">
            <h1 className="text-4xl font-bold text-violet-900 dark:text-slate-50 p-12">
              {blogData.title}
            </h1>
            <div className="md:min-w-[50%]">
              <img
                src={blogData.thumbnail}
                alt={blogData.title}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="container mx-auto dark:text-white py-20 pb-30">
            <div className="flex gap-10 justify-around">
              <div>
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
              <div className="min-w-[300px]">
                <h2
                  className="text-2xl font-bold text-violet-900 dark:text-slate-50"
                  id="table-of-contents"
                >
                  Table of Contents
                </h2>
                <div className="text-xl font-[500] text-violet-900 dark:text-slate-50 mt-5">
                  <TableOfContents />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
