// bai1
// const person = {
//     name: prompt("Nhap ten cua ban"),
//     year: prompt("Nhap nam sinh"),
// }
// let tuoi = 2022 - person.year;
// console.log("Tuoi hien nay cua ban la", tuoi);

// bai2
// let a = [1,2,3,4,5];
// a[0] = Number(prompt("nhap so dau tien"));
// a[1] = Number(prompt("nhap so thu hai"));
// a[2] = prompt("nhap so thu ba");
// a[3] = prompt("nhap so thu tu");
// a[4] = prompt("nhap so thu nam");
// console.log(a[4]);
// console.log(a[a.length -1[]);
// thieu number


// bai3
// function hello(ten, year) {
//     console.log("Xin chào, mình tên là", ten);
//     console.log("Mình sinh năm", year);
//     console.log("Rất vui được gặp bạn.");
// }
// hello("Tien", 1998);

// bai4
// const identity = {
//     ten: "Tien",
//     namsinh: 1998,
// }
// function hello(person) {
//     console.log("Xin chào, mình tên là", person.ten);
//     console.log("Mình sinh năm", person.namsinh);
//     console.log("Rất vui được gặp bạn.");
// }
// hello(identity);

// BAI5
// const identity = {
//     ten: prompt("Nhap ten cua ban"),
//     namsinh: prompt("Nhap nam sinh cua ban")
// }

function getValue() {
    const ten = prompt("Nhap ten cu ban");
    const namsinh = prompt("Nhap nam sinh cua ban");
    hello();
}
function hello(person) {
    console.log("Xin chào, mình tên là", person.ten);
    console.log("Mình sinh năm", person.namsinh);
    console.log("Rất vui được gặp bạn.");
}
getValue();

// BAI6
// function ten() {
//     let k = prompt("Nhap ten cua ban");
//     return k;
// }
// function namsinh() {
//     let z = String(prompt("Nhap nam sinh cua ban"));
//     return z;
// }

// function hello() {
//         console.log("Xin chào, mình tên là", k);
//         console.log("Mình sinh năm", z);
//         console.log("Rất vui được gặp bạn.");
//     }
// hello();

BAI11
function hello() {
    let ten = prompt("Nhap ten cua ban");
    let namsinh = prompt("Nhap nam sinh cua ban");
    let person = {ten,namsinh}
    console.log("Xin chào, mình tên là",person.ten);
    console.log("Mình sinh năm",person.namsinh);
    console.log("Rất vui được gặp bạn.");
}
hello();

// BAI7
// function doinhietdo(a) {
//     let b = (5*(a-32))/9;
//     return b;
// }
// function ketqua() {
//     let f = Number(prompt("Nhap nhiet do"));
//     let c = doinhietdo(f);
//     console.log("Nhiet do C la", c);
// }
// ketqua();
    
// BAI8
// function area() {
//     let w = Number(prompt("Nhap chieu dai hinh chu nhat"));
//     let h = Number(prompt("Nhap chieu rong hinh chu nhat"));
//     let s = dientich(w,h);
//     console.log("Dien tich hinh chu nhat la:", s);
// }
// function dientich(a,b) {
//     let c = a * b;
//     return c;
// }
// area();

// BAI9
// let a = [1,2,3,4];
// function average(a) {
//     a[0] = Number(prompt("Nhap diem Toan"));
//     a[1] = Number(prompt("Nhap diem Ly"));
//     a[2] = Number(prompt("Nhap diem Sinh"));
//     a[3] = Number(prompt("Nhap diem Anh"));
//     let b = trungbinh(a[0],a[1],a[2],a[3]);
//     console.log("Diem trung binh la", b);
// }
// function trungbinh(m,n,p,q) {
//     let x = (m+n+p+q)/4;
//     return x;
// }
// average(a);

// bai10
// let a = [1,2,3];
// function tachso(x) {
//     a[0] = x % 10;
//     let k = Math.floor(x/10); 
//     a[1] = k % 10;
//     let h = Math.floor(k/10)
//     a[2] = h;
//     console.log(a);
// }
// tachso(293);