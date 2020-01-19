import * as fs from 'fs'

const secretTable = {
    a: 'b',
    b: 'c',
    l: '_',
    d: '1',
    w: 'm',
    t: 'g',
    o: '#'
};


export let encodeAll = (...source) => {

    let sourceArr = []
    sourceArr.push(...source) 
    console.log(sourceArr)
    console.log(...source)
    let result = {}
    
    sourceArr.map(source => {
        if(!fs.existsSync(source)){
            result[source] = ""
            return result
            
        }
    });
                  
    const src = sourceArr.map(source => fs.readFileSync(source, "utf-8"))  
    const buffer = [];

    for(let i = 0; i < src.length; i++){
        
        //console.log(src[i])
                                
        for(let l = 0; l < src[i].length; l++) {
            if(src[i][l] in secretTable) {
                buffer.push(secretTable[src[i][l]])
            }
            else buffer.push(src[i][l])        
        }

        result[sourceArr[i]] = buffer.join('');
        
        }
        
    return result
}
    
export let decodeAll = (...source) =>{
    
    let sourceArr = []
    sourceArr.push(...source)
    //console.log(sourceArr)
    
    const src = sourceArr.map(source => fs.readFileSync(source, "utf-8"))
    let result = {}
    
    const visszaFele = {};
    Object.entries(secretTable).forEach( ( [key, value]) => {
        visszaFele[value] = key;
    });

    //console.log(visszaFele)
    
    // console.log(filePaths)
  
    for(let i = 0; i < src.length; i++){

    console.log(src[i])
    
    const buffer = [];
                        
    for(let l = 0; l < src[i].length; l++) {
        if(src[i][l] in visszaFele) {
            buffer.push(visszaFele[src[i][l]])
        }
        else buffer.push(src[i][l])        
    }

    result[sourceArr[i]] = buffer.join('');
    
    }

    return result
}

//console.log(encodeAll('files/sima1','files/sima2'))
// console.log(encodeAll('C:/Users/szabo1anna130/Desktop/braininghub/repo_forked/bh-fst01/docs/lectures/20200107/orai_munka/folder_encryption/files/sima11'))

//console.log(decodeAll('files/titkos1','files/titkos2'))