// // let name={
// //     firstName:'Alex',
// //     secondName:'Martin'
// // }

// // function printName(home, state, country){
// //     console.log(this.firstName+' '+this.secondName+' '+home+' '+state+" "+country);
// // }

// // let printmyname = printName.bind(name, 'Jaipur');
// // printmyname('Rajasthan', 'India');

// // Function.prototype.myBind = function(...args){
// //     let object = this
// //     params = args.slice(1);
// //     return function(...args2){
// //         object.apply(args[0], [...params, ...args2]);
// //     }
// // }

// // let newPrintMyName = printName.myBind(name, 'Jaipur');
// // newPrintMyName('Rajasthan', 'India');

// // document.querySelector('#grandparent')
// // .addEventListener('click',()=>{
// //     console.log('Grandparent Clicked');
// // },false);

// // document.querySelector('#parent')
// // .addEventListener('click',()=>{
// //     console.log('Parent Clicked');
// // },true);

// // document.querySelector("#child")
// // .addEventListener('click',()=>{
// //     console.log('Child Clicked');
// // },true);

// // function loadScript(scr){
// //     return new Promise( function(resolve,reject){
// //         let script = document.createElement('script');
// //         script.src = scr;
// //         script.onload = ()=>resolve(script);
// //         script.onerror = ()=>reject(new Error('Script has error'));
// //         document.head.append(script);
// //     });
// // }
// // let promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');
// // promise.then(
// //     script => alert(`${script.src} is loaded`),
// //     error => alert(`Error: ${error.message}`)
// // );
// // promise.then(script=>alert('another handler'));


// /* Promise with then and fetch */
// function loadJson(url) {
//     return fetch(url)
//       .then(response => response.json());
//   }
  
//   function loadGithubUser(name) {
//     return fetch(`https://api.github.com/users/${name}`)
//       .then(response => response.json());
//   }
  
//   function showAvatar(githubUser) {
//     return new Promise(function(resolve, reject) {
//       let img = document.createElement('img');
//       img.src = githubUser.avatar_url;
//       img.className = "promise-avatar-example";
//       document.body.append(img);
  
//       setTimeout(() => {
//         img.remove();
//         resolve(githubUser);
//       }, 3000);
//     });
//   }
  
//   // Use them:
//   loadJson('/article/promise-chaining/user.json')
//     .then(user => loadGithubUser(user.name))
//     .then(showAvatar)
//     .then(githubUser => alert(`Finished showing ${githubUser.name}`));
//     // ...

/**
 * Polyfill for array functions created in Array prototype
 */
var logicAlbums = [
  'Bobby T',
  'The Incredible True Story',
  'Supermark',
  'Under Pressure',
]
/**
 * foreach
 * @param {} callback 
 */
Array.prototype.albumForEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this) // currentValue, index, array
  }
}
/**
 * map
 * @param {*} callback 
 * @returns 
 */
Array.prototype.albumMap = function(callback) {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    if(i in this){
      arr[i] = callback(this[i],i,this);
    }
  }
  return arr;
}
/**
 * filter
 * @param {*} callback 
 * @returns 
 */
Array.prototype.albumFilter = function(callback){
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(this, this[i])) {
      arr.push(this[i])
    }
  }
  return arr;
}
/**
 * reduce
 * @param {*} callback 
 * @param {*} initialValue 
 * @returns 
 */
Array.prototype.albumReduce = function(callback,initialValue){
  var val = initialValue;

  for (var i = 0; i < this.length; i++) {
    if(val!==undefined){
      val = callback.call(this, val, this[i]);
    }
    else{
      val = this[i];
    }
  }
  return val;
}

logicAlbums.albumForEach( (a) => console.log(a) );

console.log(logicAlbums.albumMap(function(a) {
  return a+"_Singer";
}));

console.log(logicAlbums.albumFilter(function(a) {
    return a.length>10;
}));

console.log(
  logicAlbums.albumReduce(
    function(a,b){
      return a+' , '+b;
    },'Singers: ')
)