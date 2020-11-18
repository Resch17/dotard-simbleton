import {Business} from "./Business.js";
import {useBusinesses} from "./BusinessProvider.js"

export const BusinessList = () => {
  const domTarget = document.querySelector(".container")
  const businessArray = useBusinesses();

  businessArray.forEach((business) => {
      domTarget.innerHTML += Business(business);
    }
  )

}