import logo from "../../assets/logo.png";
import bg from "../../assets/bg3.svg";

const Footer = () => {

  // const containerStyle = {
  //   position: 'relative',
  // };

  // const pseudoElementStyle = {
  //   content: '""',
  //   position: 'absolute',
  //   top: '-50%',
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  //   backgroundImage: `url(${bg})`,
  //   backgroundSize: 'cover',  // Cover the entire container
  //   backgroundRepeat: 'no-repeat',  // Do not repeat the background image
  //   filter: 'blur(10px)', // Adjust the blur value as needed
  //   zIndex: -1,
  // };
  return (
    // <div className="footer-container" style={containerStyle}>
    <div className="2xl:container mx-auto">
      <div className="divider divider-neutral w-[30%] mx-auto">o</div>
      <footer className="footer 2xl:container mx-auto p-10 text-base-content">
        <nav className="w-full">
          <div className="mx-auto">
            <div className="mx-auto">
              <img className="w-14 mx-auto" src={logo} alt="" />
            </div>
            <header className="w-full text-2xl font-bold text-center ">
              Social
            </header>
            <div className="grid grid-flow-col items-center mx-auto gap-4">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current mx-auto"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current mx-auto"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current mx-auto"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </p>
            </div>
          </div>
          <p className="mx-auto text-center footer-titles text-sm font-bold">Copyright © 2023 - All right reserved by IMS Ltd</p>
        </nav>
        <nav>
          <header className="footer-titles text-black text-2xl font-bold">
            Inventory Management
          </header>
          <p href="/features" className="link font-bold link-hover">
            Features
          </p>
          <p href="/pricing" className="link font-bold link-hover">
            Pricing
          </p>
          <p href="/demo" className="link font-bold link-hover">
            Demo
          </p>
          <p href="/support" className="link font-bold link-hover">
            Support
          </p>
        </nav>
        <nav>
          <header className="footer-titles text-black text-2xl font-bold">Company</header>
          <p href="/pbout" className="link font-bold link-hover">
            About us
          </p>
          <p href="/contact" className="link font-bold link-hover">
            Contact
          </p>
          <p href="/careers" className="link font-bold link-hover">
            Shops
          </p>
          <p href="/press" className="link font-bold link-hover">
            Press kit
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
