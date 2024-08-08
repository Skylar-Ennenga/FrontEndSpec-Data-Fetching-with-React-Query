import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const GetComponent = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log(response.data)
      return response.data;

    } catch (error) {
      console.error("Error fetching posts:", error);
    }
    
  };

  const { data: randomData, refetch } = useQuery({
    queryKey: ["dataFetch"],
    queryFn: fetchData,
    enabled: false,
  
  });

  const handleClick = () => {
    refetch();
  };



  return (
    <div>
      <button onClick={handleClick}>Get Info</button>
      
  
      {randomData && randomData.length > 0 && (
        <div>
          {randomData.map((data) => (
            <div key={data.id}>
              <h1>{data.title}</h1>
              <p>{data.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetComponent;



