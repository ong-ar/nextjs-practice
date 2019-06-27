# ssr 연습하기 (nextjs)

## 설치

```
$ yarn add next react react-dom
```

## scripts 추가

- package.json

```javascript
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```

## 설명

### pretty URLs

- express 로 요청 받아 req, res 이용하여 post/:title -> post?title=:title 로 변경해주는 작업을 해주어야 됨

### style 적용

- global style 일 경우

```html
<style jsx global>
  {`
  body {
    color:red;
    }
  `}
</style>
```

- local style 일 경우

```html
<style jsx>
  ul {
    display: flex;
  }
  ul li {
    margin-right: 20px;
  }
  header {
    background-color: peru;
    color: white;
  }
</style>
```
