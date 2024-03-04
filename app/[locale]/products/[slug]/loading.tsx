// "use client";
// import { useEffect, useState } from "react";

const Loading = () => {
  // const [showLoading, setShowLoading] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoading(true);
  //   }, 50000); // 20 seconds

  //   return () => clearTimeout(timer); // Clear the timer if the component unmounts before 20 seconds
  // }, []);

  return (
    <>
      {
        <div className="flex justify-center min-h-screen items-center">
          <div>
            <h2>Loading</h2>
          </div>
        </div>
      }
    </>
  );
};

export default Loading;
