"use client";

import { FetchedImage } from "@/lib/image";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ZoomIn, Download, ExternalLink } from "lucide-react";

export default function PhotoContainer({ photo }: { photo: FetchedImage }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="mb-4 break-inside-avoid"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Dialog>
        <DialogTrigger asChild>
          <button className="group rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full overflow-hidden">
            <div className="relative shadow-lg hover:shadow-2xl rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 transform">
              {/* Loading skeleton */}
              {isLoading && (
                <div className="z-10 absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
              )}

              {/* Image */}
              {isInView && (
                <Image
                  src={photo.url}
                  alt={photo.public_id}
                  width={300}
                  height={Math.ceil(300 * (photo.height / photo.width))}
                  onLoad={() => setIsLoading(false)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="w-full h-auto transition-opacity duration-300"
                  style={{ opacity: isLoading ? 0 : 1 }}
                />
              )}

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0 }}
              >
                <motion.div
                  className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ZoomIn className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="bg-black/95 backdrop-blur-sm p-0 border-0 w-screen max-w-none h-screen">
          <DialogTitle className="sr-only" />
          <div className="relative flex justify-center items-center w-full h-full">
            <Image
              src={photo.url}
              alt={photo.public_id}
              fill
              className="object-contain"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
