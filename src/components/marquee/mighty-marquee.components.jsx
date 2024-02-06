import Marquee from "react-fast-marquee";

export const MigtyMarquee = () => {
  return (
    <div className="bg-gradient-to-r from-black to-mainColor cursor-default">
      <Marquee speed={50} pauseOnClick={true} autoFill={true}>
        <div className="flex flex-row gap-x-10 p-5">
          <h1 className="text-7xl md:text-9xl font-primary text-white">
            MIGHTY
          </h1>
        </div>
      </Marquee>
    </div>
  );
};
