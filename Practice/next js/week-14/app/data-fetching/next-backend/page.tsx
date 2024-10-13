import axios from "axios";




//next allows async components now but only in server components 
export default async function Home() {
    async function getUserDetails() {
        await new Promise((r)=>setTimeout(r,5000));
        const response = await axios.get("http://localhost:3000/api/user")
          return response.data;
      }
  const userData = await getUserDetails();

  return (
    <div>
      {userData.email}
      {userData.name}
    </div>
  );
}
