let house1={
    mat:'plastic',
    inch:"6",
    comp_date:2025
}

let house2={
    mat:'ultra',
    inch:"89",
    comp_date:2026,

    compare:function(house1){

        if(this.inch>house1.inch)
            console.log(this)
        
        else
            console.log(house1)
        
    }


}

house2.compare(house1)