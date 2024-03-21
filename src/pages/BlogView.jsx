import React from "react";
import { useParams } from "react-router-dom";
import edjsParser from "editorjs-parser";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { Helmet } from "react-helmet";
import fi from "../utils/firebase";

/* Components */
import TableOfContents from "./components/TableOfContents";
import NotFound from "./NotFound";

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
  const [blogData, setBlogData] = React.useState(null);
  const id = useParams().id;

  const isJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  React.useEffect(() => {
    const getBlog = async () => {
      const docRef = doc(getFirestore(fi), "Blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlogData({ ...docSnap.data(), id: docSnap.id });
      } else {
        setBlogData({});
      }
    };
    getBlog();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>
          {blogData && blogData.title
            ? blogData.title + " - Videophics"
            : "Blog - Videophics"}
        </title>
      </Helmet>

      {blogData == null ? (
        <div className="flex items-center justify-center h-[90vh]">
          <h1 className="text-2xl md:text-4xl font-bold text-violet-900 dark:text-slate-50">
            Loading...
          </h1>
        </div>
      ) : !blogData.title ? (
        <NotFound />
      ) : (
        <div key={id}>
          <div className="container mx-auto border-b-[rgba(0,0,0,0.1)] dark:border-b-[rgba(255,255,255,0.2)] border-b-[1px] md:flex gap-4 py-10 items-center">
            <div className="py-12 text-left">
              <h1 className="text-4xl font-bold text-violet-900 dark:text-slate-50">
                {blogData.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                {blogData.author} |{" "}
                {blogData.publishedAt.toDate().toDateString()}
              </p>
              <p className="w-fit bg-violet-900 text-white text-sm py-2 px-5 rounded-full mt-4">
                {blogData.category}
              </p>
            </div>
            <div className="md:min-w-[50%] ml-auto">
              <img
                src={blogData.thumbnail}
                alt={blogData.title}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="container mx-auto dark:text-white py-20 pb-30">
            <div className="flex flex-grow flex-col lg:flex-row gap-14">
              <div className="text-gray-700 lg:h-full lg:sticky top-[7rem] dark:text-gray-400 flex lg:flex-col gap-4 pt-1">
                <a href="https://www.facebook.com/videophics/">
                  <ion-icon
                    name="logo-facebook"
                    style={{ fontSize: "17px" }}
                  ></ion-icon>
                </a>
                <a href="#">
                  <ion-icon
                    name="logo-twitter"
                    style={{ fontSize: "17px" }}
                  ></ion-icon>
                </a>
                <a href="#">
                  <ion-icon
                    name="logo-instagram"
                    style={{ fontSize: "17px" }}
                  ></ion-icon>
                </a>
              </div>
              <div className="min-w-[300px] lg:h-full lg:sticky top-[7rem] lg:order-2 lg:ml-auto">
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
              <div
                className="_blog-body text-lg text-slate-900 dark:text-white"
                dangerouslySetInnerHTML={{
                  __html:
                    isJson(blogData.body) ?
                    new edjsParser({
                      youtube: `<iframe src="<%data.embed%>" width="<%data.width%>"><%data.caption%></iframe>`,
                      list: `<ul><%data.items.map(item => { return '<li>' + item + '</li>' }).join('')}</ul>`,
                    }).parse(JSON.parse(blogData.body)) : (""),
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
