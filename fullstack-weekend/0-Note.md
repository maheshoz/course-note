

Fullstack webapp in weekend notes
form this [course](https://www.udemy.com/course/full-stack-crash-course/)

## HTML CSS

win + . -- for emojis

Css
propeties about text, font, spacing, layout

```css
h1 {
  color: blue;
  text-align : center;
  font-size: 20px;
}
```

Google fonts - coiny, sono

**Box model** : defines how elements are displayed. Each element on a page is a rectangular box.
box sizing : border-box;

inline elements are treated as text so to center, text align: center 
and inline elements dont create extra space on padding, margin should make them as block. 

block inline elements,

css flexbox, grid
media queries

## Supabase
- Service that allows developers to easily create a back-end with a database. also API's

 database pswd

Project URL - https://yohonquollraclodvxxe.supabase.co
API Key -  


curl 'https://yohonquollraclodvxxe.supabase.co/rest/v1/facts?select=id' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"



## Javascript--

```js
const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');

btn.addEventListener('click', function () {

  if(form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a fact'; 
  }

});
```

## Google fonts
https://fonts.google.com/specimen/Coiny?query=coiny

## flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Tailwind css colors
https://tailwindcss.com/docs/customizing-colors


## REACT JS

install node.js, check version `node -v`, `npm -v`
`npx create-react-app today-i-learned`

JSX, component start with capital letter
return only 1 element from a component


```js
function App() {
  return (
    <h1>Hello world</h1>
  )
}
```

making ui components, 

prop drilling, sending the props from parent to child

```sh
npm run build
```
drap and drop the build folder in netlify 

https://todayilearnd-mk.netlify.app/



