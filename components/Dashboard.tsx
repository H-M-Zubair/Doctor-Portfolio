"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "./Banner";
import heroimage from "@/public/images/dashboard/heroimage.jpg";
import heroimage1 from "@/public/images/dashboard/heroimage1.jpg";
import heroimage2 from "@/public/images/dashboard/heroimage2.avif";
import heroimage3 from "@/public/images/dashboard/heroimage3.jpg";
import heroimage4 from "@/public/images/dashboard/heroimage4.jpg";

const images = [heroimage1, heroimage, heroimage3, heroimage2];

const Dashboard: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="home">
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mt-[5rem]">
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={image}
              alt={`heroimage${i}`}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              priority
            />
          </motion.div>
        ))}
        <Banner />
      </div>
    </main>
  );
}

export default Dashboard;
