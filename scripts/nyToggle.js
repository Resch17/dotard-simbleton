export const nyFunction = () => {
  const nyToggle = document.querySelector("#nyToggle")
  nyToggle.addEventListener("click", () => {
    const nyBus = document.querySelector("#nyBus")
    if (nyBus.style.display === "block") {
      nyBus.style.display = "none";
    } else {
      nyBus.style.display = "block";
    }

  })

}