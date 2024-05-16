import { Metadata } from "next";
import Image from "next/image";


export const metadata:Metadata = {
  title: 'New Page',
};

const newpage = () => {
  return (
      <div className="justify-center text-center pt-1 bg-black text-white">
      <div
        style={{
          backgroundImage: `url(/images/copilot-logo.png)`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundColor: "grey",
          width: "100vw",
          height: "50vh"
        }}
      />
        <div>Microsoft 365 Copilot</div>
      </div>
      

  );
};


export default newpage;