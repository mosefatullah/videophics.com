import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
} from "@firebase/auth";
import { getFirestore, doc, setDoc } from "@firebase/firestore";
import { getDatabase, ref, onValue } from "@firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  deleteObject,
} from "@firebase/storage";

import fi from "./firebase";
const auth = getAuth(fi);
const db = getDatabase(fi);
const fr = getFirestore(fi);
const st = getStorage(fi);

const logOut = (success, error) => {
  signOut(auth)
    .then(() => {
      if (typeof success === "function") {
        success();
      }
    })
    .catch((e) => {
      if (typeof error === "function") {
        error(e);
      }
    });
};

const checkAdmin = (email, success, error, result) => {
  onValue(
    ref(db, "app/admins"),
    (snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val().includes(email)) {
          if (typeof success === "function") {
            success(result);
          }
        } else {
          if (typeof error === "function") {
            deleteUser(result.user);
            error();
          }
        }
      } else {
        if (typeof error === "function") {
          deleteUser(result.user);
          error();
        }
      }
    },
    (e) => {
      console.error(e);
    }
  );
};

const login = (success, error) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      checkAdmin(result.user.email, success, error, result);
    })
    .catch((e) => {
      if (typeof error === "function") {
        error(e);
      }
    });
};

const createBlogPost = (data, success, error) => {
  setDoc(doc(fr, "Blogs", data.id), data)
    .then(() => {
      if (typeof success === "function") {
        success();
      }
    })
    .catch((e) => {
      if (typeof error === "function") {
        error(e);
      }
    });
};

const uploadBlogImage = (file, success, error) => {
  uploadBytes(storageRef(st, `blog/images/${file.name}`), file)
    .then((snapshot) => {
      if (typeof success === "function") {
        success(snapshot);
      }
    })
    .catch((e) => {
      if (typeof error === "function") {
        error(e);
      }
    });
};

const deleteBlogImage = (url, success, error) => {
  const imageRef = storageRef(
    st,
    decodeURIComponent(
      url
        .replace("https://firebasestorage.googleapis.com/v0/b/", "")
        .replace("videophics-dev.appspot.com", "")
        .replace("/o/", "")
        .replace("?alt=media", "")
    )
  );
  deleteObject(imageRef)
    .then(() => {
      if (typeof success === "function") {
        success();
      }
    })
    .catch((e) => {
      if (typeof error === "function") {
        error(e);
      }
    });
};

export {
  login,
  logOut,
  checkAdmin,
  auth,
  onAuthStateChanged as onAuth,
  createBlogPost,
  uploadBlogImage,
  deleteBlogImage,
};
