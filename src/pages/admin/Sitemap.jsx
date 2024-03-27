import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

/* Components */
import WithAuth from "./components/WithAuth";

/* Utils */
import { getSitemap, postSitemap } from "../../utils/sitemap";

function Sitemap() {
  const [data, setData] = React.useState(null);
  const [addnewsitemapInput1, setAddnewsitemapInput1] = React.useState("");
  const [addnewsitemapInput2, setAddnewsitemapInput2] = React.useState(
    new Date().toISOString().split("T")[0]
  );
  const [addnewsitemapInput3, setAddnewsitemapInput3] =
    React.useState("Select");

  React.useEffect(() => {
    getSitemap((result) => {
      setData(result);
    });
  }, []);
  return (
    <WithAuth>
      {() => (
        <>
          <Helmet>
            <title>Manage Sitemap - Admin</title>
          </Helmet>
          <div className="container mx-auto max-w-[1300px] py-10 text-slate-800 dark:text-white">
            <Link to="/admin">
              <button className="mb-5">
                &larr; Go back
              </button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-[500] text-center text-slate-800 dark:text-white">
              <span className="text-slate-500 dark:text-gray-500">Admin /</span>{" "}
              Sitemap
            </h1>
            <div className="mt-12 flex flex-col lg:flex-row justify-center gap-9 pt-2">
              <div className="_sitemap-section">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <form className="addnewurl-form">
                      <div className="form-group pb-3">
                        <label htmlFor="url">
                          URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="url"
                          placeholder="https://videophics.com/?/.../..."
                          className="text-slate-800 p-3 py-[0.6rem] border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                          value={addnewsitemapInput1}
                          onChange={(e) =>
                            setAddnewsitemapInput1(e.target.value)
                          }
                        />
                        <p
                          className="text-slate-500 dark:text-slate-400"
                          style={{
                            fontSize: "0.8rem",
                          }}
                        >
                          You must use <span className="underline">?/</span> in
                          the URL after the domain name.
                        </p>
                      </div>
                      <div className="form-group py-3">
                        <label htmlFor="lastmod">
                          Last Modified <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="lastmod"
                          className="text-slate-800 p-3 py-[0.6rem] border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                          value={addnewsitemapInput2}
                          onChange={(e) =>
                            setAddnewsitemapInput2(e.target.value)
                          }
                        />
                        <p
                          className="text-slate-500 dark:text-slate-400"
                          style={{
                            fontSize: "0.8rem",
                          }}
                        >
                          Last Modified tells search engines to re-crawl the
                          page.
                        </p>
                      </div>
                      <div className="form-group pt-3">
                        <label htmlFor="changefreq">Change Frequency</label>
                        <select
                          id="changefreq"
                          className="text-slate-800 p-3 py-[0.6rem] border border-slate-200 dark:border-slate-700 rounded-md dark:bg-slate-700 dark:text-white dark:border-violet-500 dark:border-2"
                          value={addnewsitemapInput3}
                          onChange={(e) =>
                            setAddnewsitemapInput3(e.target.value)
                          }
                        >
                          <option>Select</option>
                          <option value="always">Always</option>
                          <option value="hourly">Hourly</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                          <option value="never">Never</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="bg-violet-500 text-white px-4 py-2 rounded-md"
                        onClick={(e) => {
                          e.preventDefault();
                          const dataParsed = JSON.parse(data);
                          const url = document.getElementById("url").value;
                          const lastmod =
                            document.getElementById("lastmod").value;
                          const changefreq =
                            document.getElementById("changefreq").value;
                          const dataFinal = {};
                          if (!url) {
                            alert("URL is required!");
                            return;
                          } else {
                            dataFinal.loc = { _text: url };
                          }
                          if (!lastmod) {
                            alert("Last Modified is required!");
                            return;
                          } else {
                            dataFinal.lastmod = { _text: lastmod };
                          }
                          if (changefreq !== "Select") {
                            dataFinal.changefreq = { _text: changefreq };
                          }
                          dataParsed.urlset.url.push(dataFinal);
                          const newData = JSON.stringify(dataParsed, null, 4);
                          setData("");
                          setTimeout(() => {
                            postSitemap(dataParsed, (result, e) => {
                              if (result) {
                                alert(
                                  "Sitemap submitted! It may take a few minutes to update properly."
                                );
                                setData(newData);
                              } else {
                                alert(
                                  "Sitemap not submitted! Please try again."
                                );
                                console.error(e);
                              }
                            });
                          }, 500);
                        }}
                      >
                        Add to Sitemap
                      </button>
                    </form>
                  </div>
                  <div className="border border-slate-200 dark:border-slate-700 rounded-md p-4 dark:border-violet-500 dark:border-2">
                    <button
                      className="bg-violet-500 text-white px-4 py-2 mb-6 rounded-md"
                      onClick={() => {
                        setData("");
                        setTimeout(() => {
                          getSitemap((result) => {
                            setData(result);
                          });
                        }, 500);
                      }}
                    >
                      Refresh
                    </button>
                    <code style={{ display: "block", whiteSpace: "pre-wrap" }}>
                      {data &&
                        JSON.parse(data)["urlset"]["url"].map((item, index) => {
                          return (
                            <div key={index} className="py-2">
                              <div>
                                <strong>URL:</strong> {item.loc._text}
                              </div>
                              <div className="text-slate-500 dark:text-slate-400 flex flex-col md:flex-row gap-2 md:items-center pb-1">
                                <div>
                                  <div>
                                    <strong>Last Modified:</strong>{" "}
                                    {new Date(
                                      item.lastmod._text
                                    ).toDateString()}
                                  </div>
                                  {item.changefreq && (
                                    <div>
                                      <strong>Change Frequency:</strong>{" "}
                                      {item.changefreq._text}
                                    </div>
                                  )}
                                </div>
                                <div className="ml-auto">
                                  <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => {
                                      const dataParsed = JSON.parse(data);
                                      dataParsed.urlset.url.splice(index, 1);
                                      const newData = JSON.stringify(
                                        dataParsed,
                                        null,
                                        4
                                      );
                                      setData("");
                                      setTimeout(() => {
                                        postSitemap(dataParsed, (result, e) => {
                                          if (result) {
                                            alert(
                                              "Sitemap submitted! It may take a few minutes to update properly."
                                            );
                                            setData(newData);
                                          } else {
                                            alert(
                                              "Sitemap not submitted! Please try again."
                                            );
                                            console.error(e);
                                          }
                                        });
                                      }, 500);
                                    }}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          );
                        })}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </WithAuth>
  );
}

export default Sitemap;
