import React, { useState, useRef, useEffect } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

export default function EditBar() {
	const modules = {
		toolbar: [
			[{ font: [] }],
			[{ size: [] }],
			[{ color: [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
			['link', 'image', 'video'],
			['clean'],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	}
	return (
		<ReactQuill
			modules={modules}
			theme="snow"
			className="bg-DarkTextboxBGRD h-full grid grid-rows-[max-content_auto]"
		/>
	)
}
