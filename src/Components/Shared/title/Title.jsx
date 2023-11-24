
const Title = ({ head, semiHead }) => {
  return (
    <div className="mt-10 lg:mt-20">
      <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
        {head}
      </h1>
      <p
        className="text-[10px] lg:text-[18px] mb-4 font-medium w-[80%] lg:w-[70%] mt-2 lg:mt-8 mx-auto text-center"
        style={{ letterSpacing: "1px" }}
      >
        {semiHead}
      </p>
    </div>
  );
};

export default Title;
