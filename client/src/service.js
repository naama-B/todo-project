import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/items`, { name: name, isComplete: false });
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
   const result = await axios.put(`/items/${id}`, { isComplete: isComplete });
   return result.data;
  },

   deleteTask: async (id) => {
   await axios.delete(`/items/${id}`);
  },
};
