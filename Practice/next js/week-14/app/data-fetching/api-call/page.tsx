import axios from "axios";




//next allows async components now but only in server components 
export default async function Home() {
    async function getUserDetails() {
        const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
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
