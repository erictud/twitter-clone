import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_au/company/2018/lifeline/Lifelin1.png.img.fullhd.medium.png"
        alt="twitter img"
        className="object-cover md:w-44 md:h-80 rotate-6 hidden md:inline-flex"
      />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
              className="w-36 object-cover "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
              alt="twitter logo"
            />
            <p className="text-center text-sm italic my-10 ">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
