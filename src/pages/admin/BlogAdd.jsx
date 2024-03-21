import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import ImageTool from "@editorjs/image";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

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
    const editor = new EditorJS({
      holder: "_blog-body-editor",
      inlineToolbar: true,
      data: DEFAULT_INITIAL_DATA,
      tools: {
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
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        embed: {
          class: Embed,
          inlineToolbar: true,
        },
        style: EditorJSStyle.StyleInlineTool,
      },
      onReady: () => {
        ejInstance.current = editor;
      },
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
        <div className="mt-12 flex justify-center">
          <form
            className="bg-white dark:bg-slate-800 shadow-md rounded-md p-8 w-full max-w-[700px]"
            onSubmit={(e) => {
              e.preventDefault();
              createBlogPost(e);
            }}
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  name="thumbnail"
                  id="thumbnail"
                  className="hidden"
                  required
                />
                <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-md flex items-center justify-center gap-2">
                  <label htmlFor="thumbnail" className="cursor-pointer">
                    <span className="text-slate-800 dark:text-white font-[500] text-sm">
                      Upload Thumbnail
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2 sm:w-[65%]">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="What is Branding? The Ultimate Guide"
                    className="text-slate-800 p-2 border border-slate-200 dark:border-slate-700 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 sm:w-[35%]">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    className="text-slate-800 p-3 py-[0.6rem] border border-slate-200 dark:border-slate-700 rounded-md"
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
                  className="border border-slate-200 dark:border-slate-700 rounded-md p-4"
                ></div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white font-[500] text-sm py-2 px-4 mt-4 rounded"
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BlogAdd;
