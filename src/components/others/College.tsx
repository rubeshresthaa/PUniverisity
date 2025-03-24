import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const College = () => {
  const CollegeItems = [
    {
      title: "Purbanchal University",
      logo:"/plogo.png",
      image: "/hero.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio soluta blanditiis eum modi? Non, quasi amet. Maiores dolorum asperiores at sapiente porro sunt enim illo consequatur dolores ullam, et nesciunt aut expedita mollitia atque quos vel sint! Tempore, sint mollitia perspiciatis facere ex aliquid sequi corporis deserunt magni enim?",
      link: "https://puexam.edu.np/",
    },
    {
      title: "Purbanchal University",
      logo:"/plogo.png",
      image: "/hero.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio soluta blanditiis eum modi? Non, quasi amet. Maiores dolorum asperiores at sapiente porro sunt enim illo consequatur dolores ullam, et nesciunt aut expedita mollitia atque quos vel sint! Tempore, sint mollitia perspiciatis facere ex aliquid sequi corporis deserunt magni enim?",
      link: "https://puexam.edu.np/",
    },
    {
      title: "Purbanchal University",
      logo:"/plogo.png",
      image: "/hero.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio soluta blanditiis eum modi? Non, quasi amet. Maiores dolorum asperiores at sapiente porro sunt enim illo consequatur dolores ullam, et nesciunt aut expedita mollitia atque quos vel sint! Tempore, sint mollitia perspiciatis facere ex aliquid sequi corporis deserunt magni enim?",
      link: "https://puexam.edu.np/",
    },
    {
      title: "Purbanchal University",
      logo:"/plogo.png",
      image: "/hero.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio soluta blanditiis eum modi? Non, quasi amet. Maiores dolorum asperiores at sapiente porro sunt enim illo consequatur dolores ullam, et nesciunt aut expedita mollitia atque quos vel sint! Tempore, sint mollitia perspiciatis facere ex aliquid sequi corporis deserunt magni enim?",
      link: "https://puexam.edu.np/",
    },
    {
      title: "Purbanchal University",
      logo:"/plogo.png",
      image: "/hero.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio soluta blanditiis eum modi? Non, quasi amet. Maiores dolorum asperiores at sapiente porro sunt enim illo consequatur dolores ullam, et nesciunt aut expedita mollitia atque quos vel sint! Tempore, sint mollitia perspiciatis facere ex aliquid sequi corporis deserunt magni enim?",
      link: "https://puexam.edu.np/",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 px-4 sm:px-12 lg:px-24 xl:px-32 my-5">
    {CollegeItems.map((college, index) => (
      <div className="border border-black rounded-xl">
        <div className="flex items-center gap-2 p-2">
          <Image
          src={college.logo}
          alt={college.title}
          width={30}
          height={30}

           />
        <h1 className="text-bold underline underline-offset-8">{college.title}</h1>
      
        </div>
        <div className="w-full rounded-2xl">
          <Image
          src={college.image}
          alt={college.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-52 object-cover rounded-xl px-5 py-2"
          />
        </div>
        <p className="">{college.description.slice(0,100)}</p>
      </div>
    ))}
  </div>
  
  );
};
export default College;
