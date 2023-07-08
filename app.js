import { sneakers } from "./data.js";
const wrapper = document.getElementById("wrapper");
const modal = document.getElementById("modal");
const korzinka = document.getElementById("korzinka");

korzinka.addEventListener("click", () => {
  blur.classList.add("hidden");
  modal.classList.add("hidden");
});

blur.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
});

function render() {
  let result = "";
  sneakers.map((tapchka) => {
    result += `
        <div class="mx-auto mt-[30px] w-[210px] h-[260px] border-[#F3F3F3] border-[2px] rounded-[40px] overflow-hidden px-[30px]">
            <div class="mb-[14px]">
              <img src="${tapchka.image}" alt="${tapchka.name}" />
            </div>

            <div>
              <h1 class="font-bold text-[13px] mb-[14px]">${tapchka.name}</h1>

              <div class="flex items-center justify-between">
                <div>
                  <p class="text-[#BDBDBD] text-[13px]">Цена:</p>
                  <p class="mt-[-5px]">${tapchka.price}</p>
                </div>
                <button data-id="${tapchka.id}" id="btn" class="border-[#F3F3F3] border-[2px] px-[14px] py-[6px] rounded-lg flex items-center justify-center active:border-slate-300">
                  +
                </button>
              </div>
            </div>
          </div>
    `;
  });

  wrapper.innerHTML = result;
}

wrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("btn")) {
    console.log(e.target.getAttribute("data-id"));
  }
});

render();
