import { initializeApp } from "@firebase/app";

const fi = initializeApp({
  apiKey: "AIzaSyCZTYT3FJcQ3HPKX-B9xybXG0I9I_WvBIk",
  authDomain: "videophics-dev.firebaseapp.com",
  projectId: "videophics-dev",
  databaseURL:
    "https://videophics-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "videophics-dev.appspot.com",
  messagingSenderId: "376164907747",
  appId: "1:376164907747:web:e2dc69da53e36f5b9fe3d6",
});
export default fi;
