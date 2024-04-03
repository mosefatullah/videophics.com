import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
import { getSitemap, postSitemap } from "../../utils/sitemap";

function BlogAdd() {
  const ejInstance = React.useRef(null);
  const [blogBody, setBlogBody] = React.useState({});
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

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "_blog-body-editor",
      inlineToolbar: true,
      data: DEFAULT_INITIAL_DATA,
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

  const addPost = () => {
    const validate = () => {
      const title = document.getElementById("title").value;
      const category = document.getElementById("category").value;
      if (!title || !category || !blogBody) {
        alert("Please fill all the required fields!");
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

      title: document.getElementById("title").value,
      category: document.getElementById("category").value,
      thumbnail: thumbnail || null,
      body: blogBody,
      publishedAt: new Date(),
      author: document.getElementById("author").value || "Author",
    };
    createBlogPost(
      post,
      () => {
        getSitemap((data) => {
          let dataParsed = JSON.parse(data);
          dataParsed.urlset.url.push({
            loc: `https://videophics.com/?/blog/${post.id}`,
            lastmod: new Date().toISOString(),
          });
          setTimeout(() => {
            postSitemap(dataParsed, (result, e) => {
              if (result) {
                alert(
                  "Post added successfully and sitemap submitted successfully!"
                );
                window.location.href = "/admin/blog/";
                window.open("/blog/" + post.id, "_blank");
              } else {
                alert("Post added successfully but sitemap submission failed!");
                window.location.href = "/admin/blog/";
                window.open("/blog/" + post.id, "_blank");
                console.error(e);
              }
            });
          }, 500);
        });
      },
      (e) => {
        alert("Failed to add post! Please try again.");
        console.error(e);
      }
    );
  };

  const uploadThumbnail = (file) => {
    uploadBlogImage(
      file,
      (snapshot) => {
        const urlofImage = `https://firebasestorage.googleapis.com/v0/b/${
          snapshot.ref.bucket
        }/o/${encodeURIComponent(snapshot.ref.fullPath)}?alt=media`;

        setThumbnail(urlofImage);
      },
      (e) => {
        alert("Failed to upload thumbnail! Please try again.");
        console.error(e);
      }
    );
  };

  const deleteThumbnail = () => {
    const HGfgh = () => {
      alert("Thumbnail deleted successfully!");
      setThumbnail(null);
      document.getElementById("thumbnail").value = "";
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
    setTimeout(() => {
      if (
        ejInstance.current === null &&
        document.querySelectorAll(".ce-block").length === 0
      ) {
        initEditor();
      }
    }, 100);

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
            <title>Add Blog Post - Admin</title>
          </Helmet>
          <div className="container mx-auto max-w-[1300px] py-10 text-slate-800 dark:text-white">
            <Link to="/admin/blog">
              <button className="mb-5">&larr; Go back</button>
            </Link>
            <h1 className="text-4xl font-bold text-center">Add Blog Post</h1>
            <div className="mt-12 flex flex-col lg:flex-row justify-center gap-9">
              <form
                className="bg-white dark:bg-slate-800 shadow-md rounded-md p-8 w-full max-w-[700px]"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex flex-col gap-8">
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
                          Upload Thumbnail
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
                      >
                        <option value="Branding">Branding</option>
                        <option value="Development">Development</option>
                        <option value="Design">Brand Advisory</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Content Writing">Content Writing</option>
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
                      className="border border-slate-200 dark:border-slate-700 rounded-md p-4 dark:border-violet-500 dark:border-2 min-h-[300px]"
                    ></div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-violet-600 hover:bg-violet-700 text-white font-[500] text-sm py-3 px-6 mt-6 rounded"
                  id="addPost"
                  onClick={addPost}
                >
                  Add Post
                </button>
              </form>
              <div className="w-full">
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
          </div>
        </>
      )}
    </WithAuth>
  );
}

export default BlogAdd;
