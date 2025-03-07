import React from "react";
import Image from "next/image";

const BlogCard: React.FC = () => {
  return (
    <div id="blockchain" className="bg-black text-white min-h-screen flex justify-center items-center py-10">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/blockchain.png"
            alt="Team Meeting"
            width={700}
            height={500}
            className="object-cover w-full h-auto"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:bottom-[-20%] lg:left-1/2 lg:transform lg:-translate-x-1/2 w-48 h-20 mt-28 md:-mb-2 sm:w-40 sm:h-32 md:w-44 md:h-48 lg:w-140 lg:h-120 z-10">
            <Image
              src="/blog7.png"
              alt="Handshake"
              width={260}
              height={200}
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col rounded-xl  justify-center bg-white md:p-4 md:pl-6 pt-20 pl-2 pr-2 pb-8 shadow-lg relative lg:-left-28 lg:-mb-12 lg:z-10 mt-8 lg:w-5/7 text-black h-auto sm:mt-12 lg:mt-48">
          <h2 className="font-bold mb-1 text-lg sm:text-xl ">
          Blockchain Solutions
          </h2>
          <p className="text-gray-700 mb-1 text-sm "> 1. Custom Blockchain Solutions: Develop personalized blockchain networks for businesses. <br/> 2. Smart Contract Creation: Enable secure and automated workflow processes. <br/> 3. Decentralized Finance (DeFi) Solutions: Create platforms for decentralized financial ecosystems. <br/> 4. Tokenomics & Token Administration: Develop and manage blockchain-based tokens. <br/> 5. Blockchain Security Solutions: Implement advanced security measures to boost operational effectiveness. </p>
          
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
