import axios from "axios";


export const logoutUser =async()=>{
    try {
        const response = await axios.post("http://localhost:5000/api/logout",{},{withCredentials: true});
        if (response.status === 200) {
            return { success: true, message: response.data.message };
        }
        return { success: false, message: "Logout failed" };

    } catch (error) {
        
        return { success: false, message: "Logout failed" };
    }
}