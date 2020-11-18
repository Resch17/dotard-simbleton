import {Business} from "./Business.js";
import {useBusinesses} from "./BusinessProvider.js"

export const BusinessList = () => {
  const domTarget = document.querySelector(".businessList")
  const businessArray = useBusinesses();

  businessArray.forEach((business) => {
      domTarget.innerHTML += Business(business);
    }
  )

}

export const NewYorkList = () => {
  const businessArray = useBusinesses();
  const nyElement = document.querySelector(".businessList--newYork")
  let newYorkArray = businessArray.filter(business => {
    if (business.addressStateCode === "NY") {
      return true;
    }
    return false;
  });

  newYorkArray.forEach((business) => {
    nyElement.innerHTML += Business(business);
  });
}