const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(coupon.value).then(() => {
        btn.textContent = "Copied!!!";
        setTimeout(() => {
            btn.textContent = "Copy";
        },3000)
    })

    // coupon.select();
    // coupon.setSelectionRange(0,999999*100000);
    // document.execCommand("copy");

    // btn.textContent = "Copied!!!";
    // setTimeout(() => {
    //     btn.textContent = "Copy";
    // },3000)
   
}

btn.addEventListener("click",copyText);

