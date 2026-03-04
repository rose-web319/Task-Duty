import { Link } from "react-router";

export default function Home() {
  return (
    <>
     <div className="max-w-[1100px] mx-auto flex justify-between items-center mt-10">
        <div className="w-[45%]">
            <h1 className="font-medium text-3xl">Manage your Tasks on<span className="text-purple-500"><br/>TaskDuty</span></h1>
            <p className="py-4 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aut veritatis obcaecati dolorem reprehenderit ducimus quidem adipisci dolore eum! Ipsam rem laudantium atque ab doloremque saepe quam praesentium perferendis voluptates!</p>
            <Link to="/auth/gotomytask" className="bg-purple-500 rounded text-white px-3 py-1">Go to my Tasks</Link>
        </div>
        <div className="w-[45%]">
            <img src="https://task-duty-proj-client.vercel.app/assets/hero-eGcUghao.png" alt="" className="w-full"/>
        </div>
     </div>
    </>
  );
}
