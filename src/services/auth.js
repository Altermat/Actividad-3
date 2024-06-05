import axios from "axios";

const register = async (name, lastname, email, password) => {
    return await axios.post("https://evaluacion-2.vercel.app/api/users/", {
        name,
        lastname,
        email,
        password,
        roles: ['servicios_escolares'],
    }, {
        headers:{
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTk3NDMzMWM2MTc0MjcyZDY1NDUwZiIsIm5hbWUiOiJrYXJsYSBlcmlrYSIsImxhc3RuYW1lIjoicm9ibGVzIHZhcmdhcyIsImlhdCI6MTcxNzYyMTQ5NiwiZXhwIjoxNzE3NzA3ODk2fQ.D-eEZJL0ptdE1xtX1cJZILUOr4iZheuREEz4V9yTzS4'
        }
        })
    };


        const loginFn = async (email, password) => {
            return await axios.post("https://evaluacion-2.vercel.app/api/auth/signin", {
                email,
                password,
                
            });
    };
    export default { 
        register,
         loginFn
         };
