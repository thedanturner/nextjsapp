import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'New Page',
};

const newpage = () => {
  return (
      <div className="justify-center text-center pt-1 bg-white text-black">
      <div
        style={{
          backgroundImage: `url(/images/copilot-logo.png)`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundColor: "white",
          width: "100vw",
          height: "100vh"
        }}
      />
        <h1>Microsoft 365 Copilot</h1>
      </div>
      

  );
};


export default newpage;