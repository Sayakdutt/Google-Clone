import { useNavigate,Link } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();


  return (
    <div className="h-[100vh] w-full bg-gray-900">
      <section className="flex items-center  p-16  text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 hover:bg-violet-600"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
