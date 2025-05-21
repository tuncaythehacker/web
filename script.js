// Price data for both plans
const prices = {
  annually: ["$19.99", "$24.99", "$39.99"],
  monthly: ["$199.99", "$249.99", "$399.99"]
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.toggle-switch input[type="checkbox"]');
  const priceElements = document.querySelectorAll('.card .price');

  toggle.addEventListener('change', function () {
    const mode = this.checked ? "monthly" : "annually";
    priceElements.forEach((el, idx) => {
      el.textContent = prices[mode][idx];
    });
  });
});


function learnmore()
{
    alert(
        "This is an Individual work for the course of Web Development.(ONLY JS is written by Nizami Arazoglu) \n\n" 
    )
}