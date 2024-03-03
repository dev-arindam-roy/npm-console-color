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