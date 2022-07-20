import React, { useEffect, useState } from "react";
import { userApi } from "../api";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await userApi.users();
        setData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="w-full">
          <h1 className="mb-2">Home</h1>
          {data?.map((value) => (
            <div className="w-full flex flex-col justify-between rounded bg-slate-200 p-5 mx-auto mb-6" key={value._id}>
              <h1>이름 : {value.name}</h1>
              <h1>나이 : {value.age}</h1>
              <p>결혼 유무 : {value.married ? "기혼" : "미혼"}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
