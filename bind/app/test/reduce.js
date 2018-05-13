/**
 * Created by rambo.huang on 18/5/13.
 */

/*
 reduce(function(a,b,c,d) , 0);
 reduce 有两个参数 一个回调函数，一个参数， 当参数存在时， 即为a 的初始值，
 之后a为回调返回的值， b为数组当前的元素， c为当前元素序号值， d为调用reduce的数组。
 */
export default function reduceTest() {
    let arr = [1,3,5,2,0];
    let num = arr.map(ele => ele + 1)
        .filter(ele => ele > 3)
        .reduce((acc, ele) => acc + ele, 0);
    console.log("reduceTest num = " +num);
}