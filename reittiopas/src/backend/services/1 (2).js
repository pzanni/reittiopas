
const fs=require('fs');

let rawdata=fs.readFileSync('reittiopas.json');
let student = JSON.parse(rawdata);
//console.log(student);
//console.log(student.linjastot.keltainen.length)


const kartta = {
    A:{B:3, C:1},
    B:{A:3, D:2},
    C:{A:1, D:5, E:2},
    D:{B:2, C:5, E:3, R:6},
    E:{C:2, D:3, F:1, M:10},
    F:{E:1, G:1},
    G:{F:1, H:2, K:8},
    H:{G:2, I:2},
    I:{H:2, J:1},
    J:{I:1},
    K:{G:8, L:1},
    L:{K:1, M:1},
    M:{E:10, L:1, N:2},
    N:{M:2, O:2, Q:1},
    O:{N:2, P:2},
    P:{O:2},
    Q:{N:1, R:5},
    R:{D:6, Q:5}

}
//console.log(kartta)


function pathfinder (start, end) {
    const bestroutes = {
        A:"",
        B:"",
        C:"",
        D:"",
        E:"",
        F:"",
        G:"",
        H:"",
        I:"",
        J:"",
        K:"",
        L:"",
        M:"",
        N:"",
        O:"",
        P:"",
        Q:"",
        R:"",
    }
    const bestpaths = {
        A:Infinity,
        B:Infinity,
        C:Infinity,
        D:Infinity,
        E:Infinity,
        F:Infinity,
        G:Infinity,
        H:Infinity,
        I:Infinity,
        J:Infinity,
        K:Infinity,
        L:Infinity,
        M:Infinity,
        N:Infinity,
        O:Infinity,
        P:Infinity,
        Q:Infinity,
        R:Infinity,
    }
    bestpaths[start]=0
    bestroutes[start]+=start
    const queue=[]
    const path=[start]
    const visited = [start]
    var i =0
    var current = start
    while (i<Object.keys(kartta[start]).length) {
        if ((bestpaths[current] + Object.values(kartta[start])[i])<bestpaths[Object.keys(kartta[start])[i]]) {
            queue.push(Object.keys(kartta[start])[i])
            bestpaths[Object.keys(kartta[start])[i]]=bestpaths[current] + Object.values(kartta[start])[i]
            bestroutes[Object.keys(kartta[start])[i]]=bestroutes[current] +", "+ Object.keys(kartta[start])[i]
        }
        
        i=i+1
    }
    
    while (queue && queue.length) {
        current=queue.shift()
        i=0
        while (i<Object.keys(kartta[current]).length) {
            if ((bestpaths[current] + Object.values(kartta[current])[i])<bestpaths[Object.keys(kartta[current])[i]]) {              
                queue.push(Object.keys(kartta[current])[i])
                bestpaths[Object.keys(kartta[current])[i]]=bestpaths[current] + Object.values(kartta[current])[i]
                bestroutes[Object.keys(kartta[current])[i]]=bestroutes[current] +", "+ Object.keys(kartta[current])[i]
            }
            
            i=i+1
        }
    }
    
    console.log(bestpaths)
    console.log(bestroutes)
   
    //console.log(Object.keys(kartta[start]))
   // console.log(kartta[Object.keys(kartta[start])[0]])
}
pathfinder("A", "J")
//console.log(getLowest(kartta.N))
//console.log(getLowest(kartta.B))
//console.log(Object.values(kartta))