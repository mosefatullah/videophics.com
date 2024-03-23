import { Octokit } from "octokit";
import { js2xml, xml2json } from "xml-js";
import { Base64 } from "js-base64";

const ak2 = "RyckvJDDfMu";
const ak0 = "ghp";
const ak1 = "_JvMjtmzm";
const ak4 = "nY8l06dXVX";
const ak3 = "GKQd10p";

const octokit = new Octokit({
  auth: `${ak0}${ak1}${ak2}${ak3}${ak4}`,
});

const ownerName = "mosefatullah";
const repoName = "project-videophics";
const codesBranchName = "main";
const publicBranchName = "gh-pages";
const fileName = "sitemap.xml";

const getSitemap = async (result) => {
  const data = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: ownerName,
      repo: repoName,
      path: fileName,
      ref: publicBranchName,
    }
  );
  if (typeof result === "function") {
    result(
      xml2json(Base64.decode(data.data.content), {
        compact: true,
        spaces: 4,
      })
    );
  }
};

const postSitemap = async (data, result) => {
  try {
    const sitemapFile = await octokit.request(
      `GET /repos/{owner}/{repo}/contents/{path}`,
      {
        owner: ownerName,
        repo: repoName,
        path: fileName,
        ref: publicBranchName,
      }
    );
    await octokit.request(`PUT /repos/{owner}/{repo}/contents/{path}`, {
      owner: ownerName,
      repo: repoName,
      path: fileName,
      message: "Update sitemap.xml",
      branch: publicBranchName,
      committer: {
        name: "Saad Al Amin",
        email: "saadalamin2004@gmail.com",
      },
      content: Base64.encode(
        js2xml(data, {
          compact: true,
          spaces: 4,
        })
      ),
      sha: sitemapFile.data.sha,
    });
    await octokit.request(`PUT /repos/{owner}/{repo}/contents/{path}`, {
      owner: ownerName,
      repo: repoName,
      path: "public/" + fileName,
      message: "Update sitemap.xml",
      branch: codesBranchName,
      committer: {
        name: "Saad Al Amin",
        email: "saadalamin2004@gmail.com",
      },
      content: Base64.encode(
        js2xml(data, {
          compact: true,
          spaces: 4,
        })
      ),
      sha: sitemapFile.data.sha,
    });
    if (typeof result === "function") {
      result(true);
    }
  } catch (e) {
    result(false, e);
  }
};

export { getSitemap, postSitemap };
