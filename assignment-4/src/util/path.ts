import { dirname } from "path";

const t: NodeModule | undefined = process.mainModule;
let fileName = '';
if(t) {
   fileName = t.filename;
}
const name: string = dirname(fileName);
export {name as fileName};