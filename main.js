
let vertexArray = new Float32Array([
    1.0, 3.0,   // 0
    3.0, 2.0,   // 1
    2.0, 1.5,   // 2
    4.0, 2.0,   // 3
    4.0, 3.0    // 4
])
// console.log(vertexArray);

let elementArray = new Int32Array([
    0, 1, 2,
    1, 3, 2,
    1, 4, 3,
    1, 0, 4
])
// console.log(elementArray);

function findConnectedPoints(id){

    let connectedNodes = [];
    for(let i = 0; i < elementArray.length; i+=3){
        let n1 = elementArray[i];
        let n2 = elementArray[i+1];
        let n3 = elementArray[i+2];

        // Asking what triangle contains id?
        if(id == n1 || id == n2 || id == n3){
            console.log("Found: ", n1,n2,n3);
             
            if(n1 != id){
                connectedNodes.push(n1);
            }
            if(n2 != id){
                connectedNodes.push(n2);
            }
            if(n3 != id){
                connectedNodes.push(n3);
            }
        }
    }

    // console.log(connectedNodes)

    // Reducing to unique values only
    let uniqueVals = new Set(connectedNodes);
    console.log("Node " + id + " is connected to: ", uniqueVals);
}

findConnectedPoints(1);
