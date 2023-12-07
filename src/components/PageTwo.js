"use client"

import { useEffect, useState } from "react";
// import { Postcard } from "./PostCard";
export function Trend() {
  // const [pages, setPages] = useState(4);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dev.to/api/articles?per_page=4");
      const jsonData = await res.json();
      setData(jsonData);
    };
 
    getData();
  }, []);
 
  console.log(data);
}




export const PageTwo = () => {
    return <div className="flex text-left flex-col gap-[30px]">
        <div className="text-3xl">
            <h1>Trending</h1>
        </div>
        <div className="flex flex-row gap-[20px]">
            {/* <div className="relative grow-1">
                <img className="rounded-[12px]" src="https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                <div className="absolute bottom-4 left-3">
                    <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                        <h1>Technology</h1>
                    </div>
                    <div className="text-white">
                        <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    </div>

                </div>
            </div>
            <div className="relative grow-1">
                <img className="rounded-[12px]" src="https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1702857600&Signature=iMU-7Qz1Mbpq1V~SJFTCy0eim3ir1jjcZ9WuY1jMQ~e8xG~GtQ1YvS5uHIMGX7iI~x8gCuA8cgO~AEQSN~CjEmoAPydwvYxU68OWHT~OP91wrXr1Il88mI2m77BDnkWPBwkPiqyMAdZRpL1uUdVcYc7H-y4KhRgdZZOles31oS6WlBR~dL3j-SJMwurF8WR2485RHIxd0vNh-SUd0d5lTjghTtOxgiJ0UGriEWNBMbt3qED6uA8dBEfLoq~pgD3pCYRftJvZ6go1UFd76ENIdWFQ4r3hVC8JiV8HbR57XX5ykU8F5wGnXVtoGYVLXIJSGgiuKBe8bxRuh~qak8iAqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                <div className="absolute bottom-4 left-3">
                    <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                        <h1>Technology</h1>
                    </div>
                    <div className="text-white">
                        <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    </div>

                </div>
            </div>
            <div className="relative grow-1">
                <img className="rounded-[12px]" src="https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1702857600&Signature=XnHa8Q-XIFUmjjLsRm9xjDTuPs05J5cFScQK67QN9RVDr3bdRMdUDKgSsVtncgaFEPg01mmSzX1vrOFrjUHinEXkAZYT5ClcNvTNqKB2w-Sqt7qgtMtEXLOBZABkNIvJa9QrGHaS75gih8c6JJC21cDIx9Z~NrgcdINMSZ6r2UvuV2zEobwg6pc5MCX3jrlIDnu8u0kGvHxsCYazbggBp6cNwI7IjgjU9m0gpv43NroKwu1LoMSUUbH2AaIl8rxJGtvOTkhbFvq3VGBBSHHytq289W6dnFskmaN~y5TDoMtjikQK8vzZGmRH~ao5QMFa9DPkHdE68g94-YceuDLVdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                <div className="absolute bottom-4 left-3">
                    <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                        <h1>Technology</h1>
                    </div>
                    <div className="text-white">
                        <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    </div>

                </div>
            </div>
            <div className="relative grow-1">
                <img className="rounded-[12px]" src="https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1702857600&Signature=pSWj7~T8FkEgg3IG4myLmybU8Im2fCEhMKR~sZkMLc6lFredr8jb6YL~cL7q5sD1Fz6B5fsRuxeNUrn72GxGgR6yMAkHcJuftovCLrhJDegOQtF-TgTpRy1UamH9vPZlTwV3T1UKigVhmnGNUIhUaKePxOg64nX-zViv1ecY1YWz3Ls~GhX8W1Z74U9lv76qsPp2JGrZMRzm8LtvLmzrE4iBlDQEyA2rW0SZeJA2nAWJZCu2wzALbMnCsCeeVmYzRh20DYRgoV~5UqK1DFWMoz8C~vgFPT3D8i8LoXALhvaE7i8sSh6nct3Lh8nKTjRT2N7FWbpMweVMQvvaLdY06g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                <div className="absolute bottom-4 left-3">
                    <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                        <h1>Technology</h1>
                    </div>
                    <div className="text-white">
                        <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    </div>

                </div>
            </div> */}
            {data.map((blog) => {
            return <Postcard key={blog.id} blog={blog} />;
          })}

        </div>
    </div>
}