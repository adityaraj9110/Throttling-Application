This is debouncing
---> when we need to excute a function when user stop the event like stop to typing , stop to moving mouse then it is used
---> code:

// const debouncing = (func,delay,a,b)=>{
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func(a,b);
//         },delay)
//     }
// }

This is throttling 
---> when we need to execute the funciton after regular interval when user continues too fire the event example- clicking button to many timess,
moving mouse continuously . Basically in this the function execute on a regular interval of time
---> code

// const throttling  = (func,delay,name)=>{
//     let timer;

//     return function(...args){
//         if(!timer){
//             timer = setTimeout(()=>{
//                 func(name);
//                 timer = null;
//             },delay)
//         }
//     }
// }

