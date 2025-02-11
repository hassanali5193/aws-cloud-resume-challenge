const counters = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch("https://iomakmdstpaepjlcr5dfvtchfq0rkurn.lambda-url.eu-west-2.on.aws/");
  let data = await response.json();
counters.innerHTML = `Views: ${data}`;
  } 

updateCounter();


let viewCount = localStorage.getItem('viewCount');


if (!viewCount) {
  viewCount = 0;
} else {
  viewCount = parseInt(viewCount) + 1;
}

localStorage.setItem('viewCount', viewCount);

document.querySelector('.counter-number').textContent = `Views: ${viewCount}`;
