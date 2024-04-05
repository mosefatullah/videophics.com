/*
   /id
       title
       body
       author
       publishedAt
       category
       thumbnail
*/

import React from "react";
import { useParams } from "react-router-dom";
import edjsParser from "editorjs-parser";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { Helmet } from "react-helmet";

/* Utils */
import fi from "../utils/firebase";

/* Components */
import TableOfContents from "./components/TableOfContents";
import NotFound from "./NotFound";

export default function BlogView() {
  const [blogData, setBlogData] = React.useState(null);
  const id = useParams().id;

  const isJson = (str) => {
    try {
      return JSON.parse(str);
    } catch (e) {
      try {
        return typeof str === "object" && str;
      } catch (e) {
        return false;
      }
    }
    return false;
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
    const navEffect = () => {
      if (window.scrollY > 1) {
        document.querySelector("._navbar").classList.remove("sticky");
      } else {
        document.querySelector("._navbar").classList.add("sticky");
      }
    };
    window.addEventListener("scroll", navEffect);
    return () => {
      window.removeEventListener("scroll", navEffect);
    };
  }, [id]);

  return (
    <>
      <Helmet>
        <title>
          {blogData && blogData.title ? blogData.title : "Blog - Videophics"}
        </title>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>

      {blogData == null ? (
        <div className="flex items-center justify-center h-[90vh]">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : !blogData.title ? (
        <NotFound />
      ) : (
        <div key={id}>
          <div className="container mx-auto max-w-[1300px] border-b-[rgba(0,0,0,0.1)] dark:border-b-[rgba(255,255,255,0.2)] border-b-[1px] md:flex gap-4 py-10 lg:py-20 items-center">
            <div className="py-12 text-left">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
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
                className="w-full object-cover rounded-md min-h-80 bg-slate-300 dark:bg-slate-700"
              />
            </div>
          </div>

          <div className="container max-w-[1300px] mx-auto dark:text-white py-20 pb-30">
            <div className="flex flex-grow flex-col lg:flex-row gap-14">
              <div className="text-gray-700 lg:h-full lg:sticky top-[7rem] dark:text-gray-400 flex lg:flex-col gap-4 pt-3">
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&title=${blogData.title}`}
                >
                  <ion-icon
                    name="logo-facebook"
                    style={{ fontSize: "17px" }}
                  ></ion-icon>
                </a>
                <a
                  target="_blank"
                  href={`https://twitter.com/share?url=${window.location.href}&title=${blogData.title}&summary=`}
                >
                  <ion-icon
                    name="logo-twitter"
                    style={{ fontSize: "17px" }}
                  ></ion-icon>
                </a>
                <a
                  target="_blank"
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blogData.title}&summary=`}
                >
                  <ion-icon
                    name="logo-linkedin"
                    style={{ fontSize: "17px" }}
                  ></ion-icon>
                </a>
              </div>
              <div className="min-w-[300px] lg:h-full lg:sticky top-[7rem] lg:order-2 lg:ml-auto">
                <h2
                  className="text-2xl font-bold text-slate-900 dark:text-slate-50"
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
                  __html: isJson(blogData.body)
                    ? new edjsParser({
                        youtube: `<iframe src="<%data.embed%>" width="<%data.width%>"><%data.caption%></iframe>`,
                        list: `<ul><%data.items.map(item => { return '<li>' + item + '</li>' }).join('')}</ul>`,
                      }).parse(isJson(blogData.body))
                    : "",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
