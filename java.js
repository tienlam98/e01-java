// bai1
// const person = {
//     name: prompt("Nhap ten cua ban"),
//     year: prompt("Nhap nam sinh"),
// }
// let tuoi = 2022 - person.year;
// console.log("Tuoi hien nay cua ban la", tuoi);

// bai2
// let a = [1,2,3,4,5];
// a[0] = prompt("nhap so dau tien");
// a[1] = prompt("nhap so thu hai");
// a[2] = prompt("nhap so thu ba");
// a[3] = prompt("nhap so thu tu");
// a[4] = prompt("nhap so thu nam");
// console.log(a[4]);

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
// function hello() {
//     console.log("Xin chào, mình tên là", identity.ten);
//     console.log("Mình sinh năm", identity.namsinh);
//     console.log("Rất vui được gặp bạn.");
// }
// hello(identity);

// bai5a
// const identity = {
//     ten: prompt("Nhap ten cua ban"),
//     namsinh: prompt("Nhap nam sinh cua ban")
// }
// function hello() {
//     console.log("Xin chào, mình tên là", identity.ten);
//     console.log("Mình sinh năm", identity.namsinh);
//     console.log("Rất vui được gặp bạn.");
// }
// hello(identity);



function ten(name,y) {
    let name,
    name = prompt("Nhap ten cua ban"),
    let y = prompt("Nhap nam sinh cua ban")
}
function hello() {
    console.log("Xin chào, mình tên là", ten(x));
    console.log("Mình sinh năm", ten(y));
    console.log("Rất vui được gặp bạn.");
}
hello();