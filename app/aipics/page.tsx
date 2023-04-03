import Pic from "./Pic";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const AiPics = () => {
  const app = initializeApp({
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
  });

  const storage = getStorage(app);

  const imageRef = ref(storage, "batch1/0_7.png");

  getDownloadURL(imageRef).then((url) => {
    console.log(url);
  }).catch((error) => {
    console.log(error);
  });

  const image = "https://images.unsplash.com/photo-1680364453970-4d7dd2125010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

  return (
    <main className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 xl:gap-4">
      {Array.from({ length: 100 }).map((_, i) => (
        <Pic key={i} link={image} />
      ))}
    </main>
  );
};

export default AiPics;
