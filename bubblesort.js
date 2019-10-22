function bubbleSort(array, num) {
    if (num === undefined){
        num = array.length
    } 
    if (num === 1 ){
        return array
    } else if (num > 1){
        
            for (let i = 0; i < num; i++){
            
            let currentElem = array[i]
            let nextElem = array[i+1]
            if (currentElem > nextElem){
                // console.log('hi')
                array[i] = nextElem
                array[i+1] = currentElem
           
            }
           
          
        }
        num--
        return bubbleSort(array, num)

     
        // return array
    }  return array
    
}



   // console.log('craziness', array.splice(0, counter, array))
        // array = array.splice(0, counter, array)
        // return bubbleSort(array)