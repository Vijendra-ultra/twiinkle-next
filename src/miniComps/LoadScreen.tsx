import "./LoadScreener.css";
type loadScreenProp = {
  message?: string;
};
const LoadScreen: React.FC<loadScreenProp> = ({
  message = "Loading up....",
}) => {
  return (
    <>
      <div className="mt-24 overflow-hidden px-3 flex justify-center items-center flex-col gap-5">
        <span className="text-xl md:text-2xl text-center">{message}</span>
        <span className="loader"></span>
      </div>
    </>
  );
};
export default LoadScreen;
