import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "@firebase/auth";
import { getDatabase, ref, onValue } from "@firebase/database";

import fi from "./firebase";
const auth = getAuth(fi);
const db = getDatabase(fi);

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

const login = (success, error) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      onValue(ref(db, "app/admins"), (snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val().includes(result.user.email)) {
            if (typeof success === "function") {
              success();
            }
          } else {
            if (typeof error === "function") {
              error();
            }
          }
        }
      });
    })
    .catch((e) => {
      if (typeof error === "function") {
        error(e);
      }
    });
};

export { login, logOut, auth, onAuthStateChanged as onAuth };
