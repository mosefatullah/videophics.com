import React from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc, getFirestore, deleteDoc } from "@firebase/firestore";

/* Plugins */
import EditorJS from "@editorjs/editorjs";
import RawTool from "@editorjs/raw";
import ImageTool from "@editorjs/image";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Header from "editorjs-header-with-alignment";
import Paragraph from "editorjs-paragraph-with-alignment";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import AnyButton from "editorjs-button";
import Tooltip from "editorjs-tooltip";
import DragDrop from "editorjs-drag-drop";
import Hyperlink from "editorjs-hyperlink";
import IndentTune from "editorjs-indent-tune";
import Undo from "editorjs-undo";
import edjsParser from "editorjs-parser";
import { StyleInlineTool } from "editorjs-style";

/* Components */
import WithAuth from "./components/WithAuth";

/* Utils */
import {
  createBlogPost,
  uploadBlogImage,
  deleteBlogImage,
} from "../../utils/admin";
import fi from "../../utils/firebase";

function BlogEdit() {
  const ejInstance = React.useRef(null);
  const { postId } = useParams();
  const [thePost, setThePost] = React.useState(null);

  const [blogBody, setBlogBody] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("Branding");
  const [author, setAuthor] = React.useState("Author");
  const [thumbnail, setThumbnail] = React.useState(null);

  const DEFAULT_INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Introduction",
          level: 1,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "This is a simple paragraph.",
        },
      },
    ],
  };

  const initEditor = (bodyData) => {
    const editor = new EditorJS({
      holder: "_blog-body-editor",
      inlineToolbar: true,
      data: bodyData || DEFAULT_INITIAL_DATA,
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        header: {
          class: Header,
          inlineToolbar: true,
        },
        raw: RawTool,
        hyperlink: {
          class: Hyperlink,
          config: {
            shortcut: "CMD+L",
            target: "_blank",
            rel: "nofollow",
            availableTargets: ["_blank", "_self"],
            availableRels: ["author", "noreferrer"],
            validate: false,
          },
        },
        image: {
          class: ImageTool,
          inlineToolbar: true,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append("image", file);
                if (file.size > 32 * 1024 * 1024) {
                  alert("File size is too big! Maximum file size is 32MB.");
                  return false;
                }
                const res = await fetch(
                  "https://api.imgbb.com/1/upload?key=b34d67d79c5f9398c74836642e645cd2",
                  {
                    method: "POST",
                    body: formData,
                  }
                );
                const data = await res.json();
                return {
                  success: 1,
                  file: {
                    url: data.data.url,
                  },
                };
              },
            },
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        embed: {
          class: Embed,
          inlineToolbar: true,
        },
        AnyButton: {
          class: AnyButton,
          inlineToolbar: false,
          config: {
            css: {
              btnColor: "btn--gray",
            },
          },
        },
        tooltip: {
          class: Tooltip,
          config: {
            location: "left",
            underline: true,
            placeholder: "Enter a tooltip",
            highlightColor: "#FFEFD5",
            backgroundColor: "#154360",
            textColor: "#FDFEFE",
            holder: "editorId",
          },
        },
        indentTune: IndentTune,
        style: StyleInlineTool,
      },
      tunes: ["indentTune"],
      onReady: async () => {
        ejInstance.current = editor;
        new Undo({ editor });
        new DragDrop(editor);
        let outputData = await editor.saver.save();
        document.getElementById("output").innerHTML = new edjsParser().parse(
          outputData
        );
        setBlogBody(outputData);
      },
      onChange: async () => {
        let outputData = await editor.saver.save();
        document.getElementById("output").innerHTML = new edjsParser().parse(
          outputData
        );
        setBlogBody(outputData);
      },
    });
  };

  const updatePost = () => {
    function areArraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      function areObjectsEqual(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
          return false;
        }
        for (const key of keys1) {
          const val1 = obj1[key];
          const val2 = obj2[key];
          if (typeof val1 === "object" && typeof val2 === "object") {
            if (!areObjectsEqual(val1, val2)) {
              return false;
            }
          } else {
            if (val1 !== val2) {
              return false;
            }
          }
        }
        return true;
      }
      for (let i = 0; i < arr1.length; i++) {
        const obj1 = arr1[i];
        const obj2 = arr2[i];
        if (typeof obj1 !== "object" || typeof obj2 !== "object") {
          return false;
        }
        if (!areObjectsEqual(obj1, obj2)) {
          return false;
        }
      }
      return true;
    }
    const validate = () => {
      const title = document.getElementById("title").value;
      const category = document.getElementById("category").value;
      console.log(blogBody);
      if (!title || !category || !blogBody) {
        alert("Please fill all the required fields!");
        return false;
      } else if (
        title === thePost.title &&
        category === thePost.category &&
        author === thePost.author &&
        thumbnail === thePost.thumbnail &&
        areArraysEqual(blogBody.blocks, thePost.body.blocks)
      ) {
        alert("No changes detected!");
        return false;
      }
      return true;
    };

    if (!validate()) return;

    const post = {
      id: document
        .getElementById("title")
        .value.toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "-")
        .replace(/--/g, "-")
        .replace(/^-|-$/g, ""),

      title: title,
      category: category,
      thumbnail: thumbnail || null,
      body: blogBody,
      publishedAt: new Date(),
      author: author || "Author",
    };
    createBlogPost(
      post,
      () => {
        alert("Post updated successfully!");
        window.location.href = "/admin/blog";
      },
      (e) => {
        alert("Failed to update post! Please try again.");
        console.error(e);
      }
    );
  };

  const deletePost = () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    const postRef = doc(getFirestore(fi), "Blogs", postId);
    deleteDoc(postRef)
      .then(() => {
        alert("Post deleted successfully!");
        window.location.href = "/admin/blog";
      })
      .catch((e) => {
        alert("Failed to delete post! Please try again.");
        console.error(e);
      });
  };

  const uploadThumbnail = (file) => {
    uploadBlogImage(
      file,
      (snapshot) => {
        const urlofImage = `https://firebasestorage.googleapis.com/v0/b/${
          snapshot.ref.bucket
        }/o/${encodeURIComponent(snapshot.ref.fullPath)}?alt=media`;

        createBlogPost(
          { ...thePost, thumbnail: urlofImage },
          () => {
            setThumbnail(urlofImage);
          },
          (e) => {
            alert("Failed to upload thumbnail! Please try again.");
            console.error(e);
          }
        );
      },
      (e) => {
        alert("Failed to upload thumbnail! Please try again.");
        console.error(e);
      }
    );
  };

  const deleteThumbnail = () => {
    const HGfgh = () => {
      createBlogPost(
        {
          ...thePost,
          thumbnail: null,
        },
        () => {
          alert("Thumbnail deleted successfully!");
          setThumbnail(null);
          document.getElementById("thumbnail").value = "";
        },
        (e) => {
          alert("Failed to delete thumbnail! Please try again.");
          console.error(e);
        }
      );
    };
    deleteBlogImage(
      thumbnail,
      () => {
        HGfgh();
      },
      (e) => {
        if (e.code === "storage/object-not-found") {
          HGfgh();
        } else {
          alert("Failed to delete thumbnail! Please try again.");
          console.error(e);
        }
      }
    );
  };

  React.useEffect(() => {
    getDoc(doc(getFirestore(fi), "Blogs", postId)).then((doc) => {
      if (doc.exists()) {
        setThePost(doc.data());
        if (doc.data().thumbnail) {
          setThumbnail(doc.data().thumbnail);
        }
        if (doc.data().title) setTitle(doc.data().title);
        if (doc.data().author) setAuthor(doc.data().author);
        if (doc.data().category) setCategory(doc.data().category);

        if (doc.data().body) {
          if (document.getElementById("output")) {
            document.getElementById("output").innerHTML =
              new edjsParser().parse(doc.data().body);
          }
          setBlogBody(doc.data().body);
          setTimeout(() => {
            if (
              ejInstance.current === null &&
              document.querySelectorAll(".ce-block").length === 0
            ) {
              initEditor(doc.data().body);
            }
          }, 100);
        }
      } else {
        setThePost(false);
      }
    });
    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <WithAuth>
      {() => (
        <>
          <Helmet>
            <title>Manage Blog Post - Admin</title>
          </Helmet>
          <div className="container mx-auto max-w-[1300px] py-10 text-slate-800 dark:text-white">
            <Link to="/admin/blog">
              <button className="mb-5">&larr; Go back</button>
            </Link>
            <h1 className="text-4xl font-bold text-center">Manage Blog Post</h1>
            {thePost === null ? (
              <div className="text-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-lg text-gray-400 dark:text-gray-500 mt-5">
                  Loading post...
                </p>
              </div>
            ) : thePost === false ? (
              <div className="text-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-lg text-gray-400 dark:text-gray-500 mt-5">
                  Post not found!
                </p>
              </div>
            ) : (
              <div className="mt-12 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12">
                <form
                  className="bg-white dark:bg-slate-800 shadow-md rounded-md p-8 w-full h-fit max-w-[700px]"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="border-b border-slate-200 dark:border-slate-700 pb-4 flex gap-2 sm:gap-4 flex-col sm:flex-row">
                    <button
                      type="submit"
                      className="bg-violet-600 hover:bg-violet-700 text-white font-[500] text-sm py-3 px-6 rounded"
                      id="updatePost"
                      onClick={updatePost}
                    >
                      Update the Post
                    </button>
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white font-[500] text-sm py-3 px-6 rounded"
                      id="updatePost"
                      onClick={deletePost}
                    >
                      Delete the Post
                    </button>
                  </div>
                  <div className="flex flex-col gap-8 mt-6">
                    <div className="flex flex-col gap-2">
                      <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file.size > 32 * 1024 * 1024) {
                            alert(
                              "File size is too big! Maximum file size is 32MB."
                            );
                            return false;
                          }
                          uploadThumbnail(file);
                        }}
                      />
                      <label htmlFor="thumbnail" className="cursor-pointer">
                        <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-md flex items-center justify-center gap-2">
                          <span className="text-slate-800 dark:text-white font-[500] text-sm">
                            Change or Upload Thumbnail
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="title">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={thePost.title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="What is Branding? The Ultimate Guide"
                        className="text-slate-800 p-2 border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex flex-col gap-2 sm:w-[65%]">
                        <label htmlFor="author">Author</label>
                        <input
                          type="text"
                          name="author"
                          id="author"
                          value={thePost.author}
                          onChange={(e) => setAuthor(e.target.value)}
                          placeholder="Abdullah"
                          className="text-slate-800 p-2 border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                        />
                      </div>
                      <div className="flex flex-col gap-2 sm:w-[35%]">
                        <label htmlFor="category">
                          Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="category"
                          id="category"
                          className="text-slate-800 p-3 py-[0.6rem] border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                          value={thePost.category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="Branding">Branding</option>
                          <option value="Development">Development</option>
                          <option value="Design">Brand Advisory</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Content Writing">
                            Content Writing
                          </option>
                          <option value="Software Testing">
                            Software Testing
                          </option>
                          <option value="Topic">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="content">
                        Content <span className="text-red-500">*</span>
                      </label>
                      <div
                        id="_blog-body-editor"
                        className="border border-slate-200 dark:border-slate-700 rounded-md p-4 dark:border-violet-500 dark:border-2 min-h-[300px] max-h-[500px] overflow-y-auto"
                      ></div>
                    </div>
                  </div>
                </form>
                <div className="w-full max-w-[700px]">
                  <div id="top" className="mb-5 min-h-[200px] relative">
                    {!thumbnail ? (
                      <div className="absolute bg-slate-200 w-full h-full dark:bg-slate-700 p-4 rounded-md flex items-center justify-center">
                        <span className="text-slate-800 dark:text-white font-[500] text-sm">
                          Thumbnail Preview
                        </span>
                      </div>
                    ) : (
                      <img
                        src={thumbnail}
                        alt="Thumbnail"
                        className="w-full object-cover rounded-md"
                        style={{ aspectRatio: "16/9" }}
                      />
                    )}
                  </div>
                  {thumbnail && (
                    <button
                      className="mb-5 bg-red-500 dark:bg-red-600 dark:hover:bg-red-700 hover:bg-red-600 text-white font-[500] text-sm py-2 px-4 rounded flex items-center gap-1"
                      onClick={(e) => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete the thumbnail?"
                          )
                        ) {
                          deleteThumbnail();
                        }
                      }}
                    >
                      Remove{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 25 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}

                  <div
                    id="output"
                    className="_blog-body border border-slate-200 dark:border-slate-700 rounded-md p-4 dark:border-violet-500 dark:border-2"
                  ></div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </WithAuth>
  );
}

export default BlogEdit;
