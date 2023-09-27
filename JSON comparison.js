const jsonStr1 = '{"name": "John", "age": 30}';
const jsonStr2 = '{"age": 30, "name": "John"}';

if (compareJSON(jsonStr1, jsonStr2)) {
    console.log("The JSON objects are equivalent.");
} else {
    console.log("The JSON objects are not equivalent.");
}