import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Portfolio',
};

const Services = () => {
  return (
  <div className="container mx-auto text-center">
    <div className="mx-auto grid grid-cols-4 gap-4 justify-center text-center pt-40">
      <div><img src="../images/copilot-logo.png" alt="Axon Logo" />Copilot</div>
      <div><img src="../images/azure-logo.png" alt="Azure" />Azure</div>
      <div><img src="../images/axon-hub.png" alt="Axon Hub" />Axon Hub</div>
      <div><img src="../images/D365-logo.png" alt="Dynamics" />Dynamics</div>
    </div>
  <div className="mx-auto grid grid-cols-4 gap-4 justify-center text-center pt-40">
    <div>TEXT SAMPLE 1</div>
    <div>TEXT SAMPLE 2</div>
    <div>TEXT SAMPLE 3</div>
    <div>TEXT SAMPLE 4</div>  
  </div>    
  </div>
  );
}

export default Services;