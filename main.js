function showdatetime() {
  let today=new Date();
  document.getElementById("title").innerHTML = today.toLocaleString();
  console.log("today");
}
showdatetime();



// cart

const basePrice = 50;

function updateTotal() {
    let potPrice = Number(document.getElementById("pot").value);
    let standPrice = document.getElementById("stand").checked ? 20 : 0;

    let total = basePrice + potPrice + standPrice;

    document.getElementById("total").innerText = "$" + total;
}

document.getElementById("pot").addEventListener("change", updateTotal);
document.getElementById("stand").addEventListener("change", updateTotal);

function addToCart() {
    let total = document.getElementById("total").innerText;

    let message = document.getElementById("message");
    message.classList.remove("d-none");
    message.innerHTML = `
        <strong>✅ Added to Cart Successfully!</strong><br>
        Total Price: ${total}
    `;
}