import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='bg-white h-screen'>
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

                  <p className="text-[10px]font-light pb-4">the page you are looking for not avaible!</p>

                  <Link to={'/'}>
                    <button
                      className="bg-black rounded-none hover:shadow-inner px-16 text-white hover:bg-base-200 font-semibold hover:text-black border-none btn">
                      HOME</button>
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