module.exports = function solveEquation(equation) {
  // your implementation
   let arr=[];
  
    equation=equation.replace(/ /g,'');
  
    let equation0=equation.split('*x^2');
    let equation1=equation0[1].split('*x');
    let a=equation0[0];
    let b=equation1[0];
    let c=equation1[1];
    let x=0;

    let d=(Math.pow(b,2)-4*a*c);

    if(d>0){
        let x1=Math.round((-b+Math.sqrt(d))/(2*a));
        let x2=Math.round((-b-Math.sqrt(d))/(2*a));

        arr.push(x1,x2 );
        arr.sort((a,b)=>a-b);


        return arr;}
    else if(d==0){
        x=(-b+Math.sqrt(d))/(2*a);
        arr.push(x,0);
        arr.sort((a,b)=>a-b);
      
        return arr;

    }
    else{
       arr.push(0,0);
        return arr;
    }
}
