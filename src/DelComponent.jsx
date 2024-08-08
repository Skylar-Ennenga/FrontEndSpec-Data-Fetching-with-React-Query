import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const DelComponent = () => {
    
    const deleteData = async (id) => {
        try {
          const response = await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/1`
          );
          console.log("Deleted:", response.data);
          return response.data;
        } catch (error) {
          console.error("Error deleting post:", error);
        }
      };
    
      const { mutate } = useMutation({
        mutationFn: deleteData,
        
        onSuccess: () => {
            alert(`Successfully Deleted the Post`);
        }
      });
    
      const handleDelete = () => {
        mutate();
      };
    
      return (
        <div>
          <button onClick={() => handleDelete()}>Delete Post</button>
        </div>
      );
    }

export default DelComponent
