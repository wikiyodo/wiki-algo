export default class Algorithm{
    defaultAlgorithm = String;
    algorithms = {};
    addChild = (name, value)=>{
        if(!(value instanceof this) || typeof name !== 'string'){
            throw new Exception("Invalid child has been passed");
            return;
        }
        this[name] = value;
    }
}