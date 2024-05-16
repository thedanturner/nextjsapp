import { Metadata } from "next";
export const metadata:Metadata = {
  title: 'New Page',
};

const newpage = () => {
  return (
      <div className="justify-center text-center pt-1 bg-black text-white">
        <div>Holding Page</div>
      </div>
  );
};


export default newpage;