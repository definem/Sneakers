import { sneakers } from "./data.js";
const wrapper = document.getElementById("wrapper");
const modal = document.getElementById("modal");
const blur = document.getElementById("blur");
const korzinka = document.getElementById("korzinka");
const korzinaWrapper = document.getElementById("korzina-wrapper");

let sneakersKorzinka = [];

korzinka.addEventListener("click", () => {
  blur.classList.remove("hidden");
  modal.classList.remove("hidden");
  document.body.style.overflowY = "hidden";
  renderToModal();
});

blur.addEventListener("click", () => {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

function render() {
  let result = "";
  sneakers.map((tapchka) => {
    result += `
        <div class="mb-[30px] mx-auto mt-[30px] w-[210px] h-[260px] border-[#F3F3F3] border-[2px] rounded-[40px] overflow-hidden px-[30px]">
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

function renderToModal() {
  sneakers.renderToModal.map((tapchka) => {
    res += `
        <div
        class="border-[#F3F3F3] border-[2px] rounded-[20px] py-[10px] px-[20px]  overflow-hidden flex items-center justify-between">
        <div class="w-[100px] flex items-center justify-center overflow-hidden">
          <img src="${tapchka.image}" alt="${tapchka.name}" class="w-full h-full m-auto mt-[-10px]" />
        </div>

        <div>
          <h1 class="text-[15px] mb-[14px]">${tapchka.name}</h1>
          <p class="mt-[-9px] text-[14px] font-bold">${tapchka.price}</p>
        </div>
        <button
          class="border-[#F3F3F3] border-[2px] px-[10px] py-[6px] rounded-lg flex items-center justify-center  active:border-slate-300">
          ➕
        </button>

      </div>
    `;
  })
}

wrapper.addEventListener("click", (e) => {
  if (e.target.id.includes("btn")) {
    let id = +e.target.getAttribute("data-id")
    sneakersKorzinka.push(sneakers[id]);
    // console.log(sneakersKorzinka)
    renderToModal();
  }
});

render();
