import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='bg-white 2xl:container mx-auto h-screen'>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center">404</h1>


                </div>

                <div className="">
                  <h3 className="text-4xl font-semibold">
                    Look like you're lost
                  </h3>

                  <p className="text-[10px]font-light pb-4">the page you are looking for is not avaible!</p>

                  <Link to={'/'}>
                  <button className="btn btn-sm px-6 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium">Home</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;