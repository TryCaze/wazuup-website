"use client";

import { ChevronRight, Quote, Zap, Image as ImageIcon, Users, PictureInPicture, Text, Cat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiBowlingBall } from "react-icons/bi";
import { GoNumber } from "react-icons/go";

export default function Features() {
  const features = [
    {
      icon: <Quote className="w-6 h-6" />,
      title: "Message Quoting",
      subtitle: "Capture the memorable moments",
      description: "Easily quote dumb things your friends say and share them across the server with datestamps and usertags so they will not beat any allegations.",
      image: "/commands/quoting.png",
      backImage: "/commands/quote-back.png",
      cta: "Quote Now!",
    },
    {
      icon: <BiBowlingBall className="w-6 h-6" />,
      title: "Bowling ball of Wisdom",
      subtitle: "A magical ball full of wisdom",
      description: "When in doubt ask the ball that will totally not get annoyed and start saying stuff just you can leave it alone (￣ε￣〃) b",
      image: "/commands/ball-feature.png",
      backImage: "/commands/ball-back.jpg",
      cta: "Ask Away!"
    },
    {
      icon: <PictureInPicture className="w-6 h-6" />,
      title: "Avatar or banner",
      subtitle: "Get users avatar or banner",
      description: "Idk man its self explanitory, request an avatar or banner what else are you expecting (¬､¬)",
      image: "/commands/avatar-feature.png",
      backImage: "/commands/banner-back.png",
      cta: "Request it!"
    },
    {
      icon: <Text className="w-6 h-6" />,
      title: "Caption an image",
      subtitle: "Give an image a stupid caption",
      description: "As title says give an image a caption, soon gifs will be supported!",
      image: "/commands/caption-feature.png",
      backImage: "/commands/caption-back.png",
      cta: "Caption!"
    },
    {
      icon: <Cat className="w-6 h-6" />,
      title: "OMG CATS",
      subtitle: "OMG CAT CAT CAT CAT CAT CAT /ᐠ - ˕ -マ /ᐠ - ˕ -マ /ᐠ - ˕ -マ /ᐠ - ˕ -マ ",
      description: "OMG I LOVE CATS THEY ARE SO CUTE AAAAAAAAAAAAAAAAAAAAAAAAAAA I LOVE THIS COMMAND ALL I WANT TO DO IS LOOK AT CATS AND PET THEM MEOW MEOW MEOW MEOW",
      image: "/commands/cat-feature.png",
      backImage: "/commands/cat-back.jpg",
      cta: "CATS ARE SO CUTE",
    },
    {
      icon: <GoNumber className="w-6 h-6" />,
      title: "Counting",
      subtitle: "Count as high as you can with your friends",
      description: "See how high you can count with your friends and beat the records! Mess up and you will be executed on the spot :)",
      image: "/commands/counting-feature.png",
      backImage: "/commands/counting-back.webp",
      cta: "Count now!",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Deepfry Images",
      subtitle: "Crispy profile generator",
      description: "Turn any profile picture into a crispy image with our totally advanced deepfry algorithm that I didnt make in 5 minutes. Multiple intensity levels available lol.",
      image: "/commands/deepfry-feature.png",
      backImage: "/commands/deepfry-back.png",
      cta: "Deepfry Now!",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Interactions",
      subtitle: "Fun with friends",
      description: "Kill, revive, or headpat your friends with fun interaction commands. Dozens of actions to choose from!",
      image: "/commands/interactions-feature.png",
      backImage: "/commands/interactions-back.png",
      cta: "Explore Actions",
    }
  ];

  return (
    <section className="relative py-24 text-white px-8 overflow-hidden bg-black">
      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span id="features"  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-900 text-sm font-semibold text-white mb-4">
              <Zap className="w-4 h-4" /> Features
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ✨Features✨
            </h2>
            <p className="text-gray-300 max-w-2xl mt-4">
              Wazuup is packed with fun tools to make your Discord server more interactive and stupid!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8`}
            >
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative w-64 h-64 perspective-1000">
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group">
                    {/* Front Image */}
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-300 backface-hidden transform-rotate-y-0 group-hover:opacity-0">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        height={400}
                        width={400}
                        className="rounded-xl object-cover shadow-lg border-2 border-indigo-600"
                      />
                    </div>
                    
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 backface-hidden transform-rotate-y-180 group-hover:opacity-100">
                      <Image
                        src={feature.backImage}
                        alt={`${feature.title} example`}
                        height={500}
                        width={500}
                        className="rounded-xl object-cover shadow-lg border-2 border-indigo-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/5 bg-gray-900/80 rounded-2xl p-8 border border-gray-800 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <h4 className="text-lg font-semibold text-purple-300 mb-3">{feature.subtitle}</h4>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <Link href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold">
                  {feature.cta}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-rotate-y-0 {
          transform: rotateY(0deg);
        }
        .transform-rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
