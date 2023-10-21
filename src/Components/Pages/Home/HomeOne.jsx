

const HomeOne = () => {
  return (
    <div className="card lg:flex card-side bg-base-100 shadow-xl">

      <figure><img src="https://i.ibb.co/YfZJsKF/logo1.pnghttps://i.ibb.co/LRRQWWv/banner1.png" alt="Movie" /></figure>

      <div className="card-body bg-slate-200 w-2/5 shadow-lg ">
        <h2 className="card-title  text-4xl ">Best Deal You Will Find Here.</h2>
        <p className="text-2xl" >Your Stisfaction is our Succss.</p>
        <div className="card-actions justify-end">

          <p className="italic text-green-400" > Highlight what makes the place special, and try to share something unique and new. Be authentic: Review your own experience, and explain what the place was like and describe the service that you received.</p>

          <button className="btn btn-primary text-2xl">Your Choice</button>
        </div>
      </div>
    </div>
  );
};

export default HomeOne;