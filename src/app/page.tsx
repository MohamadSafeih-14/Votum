import Navbar from "@/components/Navbar";
import Image from "next/image";
import dashboardImg from '../../public/images/image.png';

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] h-fit bg-[#E8E6E3] p-5 pb-10">
      <Navbar />
      <h1 className="mt-20 text-7xl font-bold text-center text-[#1B1B1B]">Votum: Your Personal Paralegal</h1>
      <p className="mt-6 text-xl text-center text-[#6C6C6C] w-[700px] mx-auto">Justice is a fundamental right for all people, but with access to the legal system.</p>
      <div className="flex justify-center w-full mt-6"> 
        <button className="px-4 py-3 mx-auto text-white bg-[#1B1B1B] rounded-xl">Get Started</button>
      </div>
      <Image src={dashboardImg} width={1200} alt="dashboard img" className="mx-auto mt-6"/>
    </div>
  );
}
