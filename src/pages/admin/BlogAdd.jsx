import React from "react";
import EditorJS from "@editorjs/editorjs";
import LinkTool from "@editorjs/link";
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
import IndentTune from "editorjs-indent-tune";
import Undo from "editorjs-undo";
import edjsParser from "editorjs-parser";
import { StyleInlineTool } from "editorjs-style";

import { createBlogPost } from "../../utils/admin";

function BlogAdd() {
  const ejInstance = React.useRef();
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
    const printOutput = () => {
      editor
        .save()
        .then((outputData) => {
          document.getElementById("output").innerHTML = new edjsParser({
            youtube: `<iframe src="<%data.embed%>" width="<%data.width%>"><%data.caption%></iframe>`,
            list: `<ul><%data.items.map(item => { return '<li>' + item + '</li>' }).join('')}</ul>`,
          }).parse(outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    };

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
        linkTool: {
          class: LinkTool,
          inlineToolbar: true,
        },
        raw: RawTool,
        image: {
          class: ImageTool,
          inlineToolbar: true,
          config: {
            uploader: {
              async uploadByFile(file) {
                const formData = new FormData();
                formData.append("image", file);
                if (file.size > 0.5 * 1024 * 1024) {
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
      onReady: () => {
        ejInstance.current = editor;
        new Undo({ editor });
        new DragDrop(editor);
        printOutput();
      },
    });
    document
      .querySelector("#_blog-body-editor")
      .addEventListener("keyup", () => {
        printOutput();
      });
  };
  React.useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);
  return (
    <>
      <div className="container mx-auto py-10 text-slate-800 dark:text-white">
        <button className="mb-5" onClick={() => window.history.back()}>
          &larr; Go back
        </button>
        <h1 className="text-4xl font-bold text-center">Add Blog Post</h1>
        <div className="mt-12 lg:flex justify-center gap-9">
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
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file.size > 32 * 1024 * 1024) {
                      alert("File size is too big! Maximum file size is 32MB.");
                      return false;
                    }
                    const reader = new FileReader();
                    reader.onload = function (e) {
                      const img = document.createElement("img");
                      img.src = e.target.result;
                      img.className = "w-full object-cover rounded-md";
                      img.style.aspectRatio = "16/9";
                      document.getElementById("top").innerHTML = img.outerHTML;
                    };
                    reader.readAsDataURL(file);
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
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2 sm:w-[65%]">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="What is Branding? The Ultimate Guide"
                    className="text-slate-800 p-2 border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:w-[35%]">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    className="text-slate-800 p-3 py-[0.6rem] border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                  >
                    <option value="Branding">Branding</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Technology">Technology</option>
                    <option value="Development">Development</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="content">Content</label>
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
            >
              Add Post
            </button>
          </form>
          <div className="w-full">
            <div id="top"></div>
            <div
              id="output"
              className="_blog-body border border-slate-200 dark:border-slate-700 rounded-md p-4 dark:border-violet-500 dark:border-2 mt-5"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogAdd;
