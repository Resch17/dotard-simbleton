import { Business } from "./Business.js";
import { useBusinesses } from "./BusinessProvider.js";


const businessArray = useBusinesses();


export const BusinessList = () => {
  const domTarget = document.querySelector(".businessList");
  businessArray.forEach((business) => {
    domTarget.innerHTML += Business(business);
  });
};

export const NewYorkList = () => {
  const nyElement = document.querySelector(".businessList--newYork");
  let newYorkArray = businessArray.filter((business) => {
    if (business.addressStateCode === "NY") {
      return true;
    }
    return false;
  });

  newYorkArray.forEach((business) => {
    nyElement.innerHTML += Business(business);
  });
};

export const BusinessSearchFunction = () => {
  const businessSearchResultArticle = document.querySelector(".foundCompanies");

  document
    .querySelector("#companySearch")
    .addEventListener("keypress", (keyPressEvent) => {
      if (keyPressEvent.charCode === 13) {
        const foundCompany = businessArray.find((company) => {
          return company.companyName.includes(keyPressEvent.target.value);
        });
        businessSearchResultArticle.innerHTML = Business(foundCompany);
      }
    });
};

