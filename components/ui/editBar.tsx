'use client'
import { cn } from '@/utils/css';
import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Menu } from 'lucide-react';

export default function EditBar() {
  const [editorHtml, setEditorHtml] = useState('');
  const [modulesVisible, setModulesVisible] = useState(true);

  const toggleModules = () => {
    setModulesVisible(prev => !prev);
  };

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  // useEffect для отслеживания разрешения экрана
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setModulesVisible(true); // Показываем модули, если ширина больше 320px
      } else {
        setModulesVisible(false); // Скрываем модули, если ширина меньше 320px
      }
    };

    // Начальный вызов для проверки текущего состояния
    // handleMediaChange(mediaQuery);

    // Добавляем слушатель изменений
    mediaQuery.addEventListener('change', handleMediaChange);

    // Удаляем слушатель при размонтировании
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);
  
  const modules =  {
        toolbar: modulesVisible ? [
          [{ font: [] }],
          [{ size: [] }],
          [{color: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
          ['clean'],
        ] : false,
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      };
    return (
      <>
        <Menu
          onClick={toggleModules}
          style={modulesVisible ? {display: 'none'} : {display: 'block'}}
          className="absolute top-40 left-11 z-10 sm:hidden"
        />
        <ReactQuill
          value={editorHtml}
          onChange={handleChange}
          modules={modules}
          theme="snow"
          style={modulesVisible ? {paddingTop: '0'} : {paddingTop: '20px'}}
          className={cn("bg-DT_TextboxCont h-full grid grid-rows-[max-content_auto] rounded-md mb-3 mt-2 react-q ")}
        />
        {modulesVisible && (
        <button 
          onClick={toggleModules} 
          className="absolute top-10 left-11 z-10 sm:block"
        >
          Скрыть модули
        </button>
      )}
      </>
		)
}

