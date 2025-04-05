import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface BgImageContainerProps extends ComponentPropsWithoutRef<"div">{
  children:ReactNode
  image:StaticImageData
  imageClassName?:string
}

export default function BgImageContainer({children,image,className,imageClassName,...props}:BgImageContainerProps){
  return(
    <div className={`${className} relative bg-[rgba(0,0,0,0.4)] rounded-3xl p-10`} {...props}>
      {children}
      <Image src={image} alt="" className={`${imageClassName} absolute top-0 left-0 -z-10 h-full w-full object-cover object-center rounded-3xl`}/>
    </div>
  )
}