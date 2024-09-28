let day = "thursda"

// if (day === 'monday')
//     console.log('7am')
// else if(day === "tuesday"|| day=== "wednesday" || day === "thursday")
//     console.log("4am")
// else if(day === "friday")
//     console.log("9am")
// else
//     console.log("8am")

switch(day){
    case "monday":
        console.log("7am")
        break;
    case "tuesday":
    case "thursday":
    case "wednesday":
        console.log("4am")
        break;
    case "friday":
        console.log("9am")
        break;
    case "saturday":
    case "sunday":
         console.log("8am")
         break;

    default:
        console.log("12am")


        
    
}
 