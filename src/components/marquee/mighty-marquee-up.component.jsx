import Marquee from "react-fast-marquee";

export const MigtyMarqueeUp = () => {
  return (
    <div className="cursor-default">
      <Marquee speed={50} direction="right" pauseOnClick={true} autoFill={true}>
        <div className="flex flex-row gap-x-10 p-5">
          <h1 className="text-7xl md:text-9xl font-primary text-black">
            MIGHTY
          </h1>
        </div>
      </Marquee>
    </div>
  );
};
