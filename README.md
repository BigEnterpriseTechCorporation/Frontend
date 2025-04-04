# This is documentation for this project(_Russian version below_)

## You _have to_ read it before writing something

# Rules

### ALWAYS track your tasks in notion _link_

### Name files lowercase like layout.tsx, app.tsx and so on

### Your components must be less than 100 lines

### If you create component that is specific for 1 page, then you have to create folder in components/layout with name of the page

### Use @/ for importing something, this @/ means that path of import is absolute starting from src. That means if you change location of your editing file, that won't affect to validity of path

### Touch root files only in extreme cases (files like layout.tsx, global.css and all configs except tailwind.config.ts)

### Use Functional components

```typescript
export default function YourComponent() {
	return <></>
}
```

### ALWAYS write interface for components' props

```typescript
interface ComponentNameProps{
// some props
}

export default ComponentName(props:ComponentNameProps){
return (
//Your code
)
}
```

### If you know that you'll use some prop, then extend props declaration :

```typescript
interface ComponentNameProps{
  someProp: someType
  // some props
}

export default ComponentName({someProp, ...props}:ComponentNameProps){
  return (
    //Your code
  )
}
```

### Use pure css only in extreme cases (when you need to mutate whole app or create animation)

### If you want to use svg you need to import it like this:

```typescript
import { ReactComponent as YourIconName } from '@/assets/icons/YourImageName'
```

### If you know that your image will be static, then use public folder instead of assets

# Это документация для этого проекта

## Вы _ДОЛЖНЫ_ прочитать это перед написанием кода

### ВСЕГДА трэкайте ваш прогресс в notion _ссылка_

### Названия файлов должны быть с маленькой буквы layout.tsx, app.tsx и тд.

### Компоненты должны быть меньше 100 строк

### Если компонент будет использоваться только на 1й странице, то для него нужно создать отдельную папку в components/layout с названием страницы(если такой еще нет)

### Используйте префикс @/ для импорта, этот префикс обозначает, что путь абсолютный начиная с src/ . Это значит, что при перемещении файла, над которым вы работаете, путь до импорта все равно будет валидным

### Изменяйте коренные файлы только в крайнем случае (файлы как layout.tsx, global.css и все конфиги, кроме tailwind.config.ts)

### Использовать только функциональные компоненты:

```typescript
export default function YourComponent() {
	return <></>
}
```

### ВСЕГДА пишите interface для пропсов компонента

```typescript
interface ComponentNameProps{
  // some props
}

export default ComponentName(props:ComponentNameProps){
  return (
    //Your code
  )
}
```

### Если вы знаете, что какие-то пропсы будут точно использоваться в компоненте, то расширяйте props :

```typescript
interface ComponentNameProps{
  someProp: someType
  // some props
}

export default ComponentName({someProp, ...props}:ComponentNameProps){
  return (
    //Your code
  )
}
```

### Использовать чистый css разрешается только в крайних случаях(если нужно изменить весь сайт или сделать анимацию)

### Чтобы использовать svg, нужно импортировать его так:

```typescript
import { ReactComponent as YourIconName } from '@/assets/icons/YourImageName'

export default function SomeComponent() {
	return (
		<>
			//some code...
			<YourIconName />
		</>
	)
}
```

### Если вы знаете, что ваше изображение - статичное, то его нужно переместить в папку public
