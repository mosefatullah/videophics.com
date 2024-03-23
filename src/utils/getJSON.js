export default function getJSON(url, callback) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
      var status = xhr.status;
      if (xhr.readyState == 4 && status === 200) {
        callback(xhr.response, "ok");
      } else {
        callback(xhr.response, status);
        throw status;
      }
    };
    xhr.send();
  } catch {
    fetch(url)
      .then((res) => res.json())
      .then((out) => callback(out))
      .catch((err) => {
        throw err;
      });
  }
}
