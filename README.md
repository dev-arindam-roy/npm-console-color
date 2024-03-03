# NPM - Package
## A library to print console log in different colors. Like: danger, success, info, highlight

## How to use?

```javascript
npm i arindam-console-color
```

## How to call?

```javascript
const _console = require('arindam-console-color');
console.log(_console.ColorLog.success('Hello'));
```

## Main Code
```javascript
export class ColorLog {

    /** Use for success console log */
    static success(msg:string) {
        console.log(`%c ${msg}`, 'color: green');
    }

    /** Use for error console log */
    static danger(msg:string) {
        console.log(`%c ${msg}`, 'color: red');
    }

    /** Use for information/statement console log */
    static info(msg:string) {
        console.log(`%c ${msg}`, 'color: blue');
    }

    /** Use for highlight something console log */
    static highlight(msg:string) {
        console.log(`%c ${msg}`, 'color: black; background: yellow');
    }
}
```

### Thanks!
