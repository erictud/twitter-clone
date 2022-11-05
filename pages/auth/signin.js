import { getAuth, sinInWithPopup, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";

export default function Signin() {
  const router = useRouter();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const proivder = new GoogleAuthProvider();
      await signInWithPopup(auth, proivder);
      const user = auth.currentUser.providerData[0];
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          username: user.displayName.split(" ").join("").toLocaleLowerCase(),
          userImg: user.photoURL,
          uid: user.uid,
          timestamp: serverTimestamp(),
        });
      }
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_au/company/2018/lifeline/Lifelin1.png.img.fullhd.medium.png"
        alt="twitter img"
        className="object-cover md:w-44 md:h-80 rotate-6 hidden md:inline-flex"
      />
      <div className="">
        <div className="flex flex-col items-center">
          <img
            className="w-36 object-cover "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt="twitter logo"
          />
          <p className="text-center text-sm italic my-10 ">
            This app is created for learning purposes
          </p>
          <button
            onClick={onGoogleClick}
            className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
