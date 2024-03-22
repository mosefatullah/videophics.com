import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "@firebase/auth";
import { getFirestore, doc, setDoc } from "@firebase/firestore";
import { getDatabase, ref, onValue } from "@firebase/database";

import fi from "./firebase";
const auth = getAuth(fi);
const db = getDatabase(fi);
const fr = getFirestore(fi);

const logOut = (success, error) => {
  signOut(auth)
    .then(() => {
      if (typeof success === "function") {
        success();
      }
    })
    .catch((e) => {
      // console.log(error);
      if (typeof error === "function") {
        error(e);
      }
    });
};

const checkAdmin = (email, success, error, result) => {
  onValue(ref(db, "app/admins"), (snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val().includes(email)) {
        if (typeof success === "function") {
          success(result);
        }
      } else {
        if (typeof error === "function") {
          error();
        }
      }
    }
  });
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

export {
  login,
  logOut,
  checkAdmin,
  auth,
  onAuthStateChanged as onAuth,
  createBlogPost,
};
