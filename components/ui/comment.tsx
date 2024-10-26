import { ComponentPropsWithoutRef } from "react";

interface CommentProps extends ComponentPropsWithoutRef<"div">{
    author:string
    text:string
}

export default function Comment({author,text,...props}:CommentProps){
    return (
			<div
				className="bg-DT_TextboxCont self-stretch justify-stretch rounded-3xl p-3"
				{...props}>
				<h4 className="text-lg mb-1">{author}</h4>
				<h5 className="text-sm">{text}</h5>
			</div>
		) 
}