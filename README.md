# React AD login
Login screen for web and mobile built using React

### Working Demo
https://github.com/tuxrace/react-ad-login

## Install

```bash
npm install
npm start
```
Open locally at http://localhost:3000

### Credentials

| Username  | Password    | 
|---        |          ---|
| Johnsmith | password    |

### Screen
![](login.png)

## Technologies used

- React
- React Hooks
- Typescript
- Bootstrap
- SASS

### Layout Guide
SASS Variables

all sass variable are in `variables.scss`

- `$spacing`
    - value is 8
    - If we need to add margin we multiply by * $spacing
    - Example ```padding-top: calc(#{spacing} * 3px)``` will give us 24px

- `$gutter-bottom-size`
    - value is 12px
    - This is the margin bottom between divs
    - Example ```margin-bottom: $gutter-bottom-size```