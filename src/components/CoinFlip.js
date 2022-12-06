const CoinFlip = ({ number }) => {
  return (
    <div>
      {number == 1 ? (
        <img src="https://tinyurl.com/react-coin-heads-jpg" />
      ) : (
        <img src="https://media.istockphoto.com/id/476142091/photo/quarter-dollar-us-coin-isolated-on-white.jpg?s=612x612&w=0&k=20&c=wNzr7m0Z3dhlf8_O1G3EFNz8u2tALVobVs4K4XfFN5c=" />
      )}
    </div>
  );
};

export default CoinFlip;
