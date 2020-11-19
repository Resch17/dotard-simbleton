import { Agent } from "./Agent.js";
import { Business } from "./Business.js";
import { useBusinesses } from "./BusinessProvider.js";
import { useAgents } from "./PurchasingAgents.js";

const businessArray = useBusinesses();
const agentArray = useAgents();

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

export const AgentList = () => {
  const agentElement = document.querySelector(".agents");

  agentArray.forEach((agent) => {
    agentElement.innerHTML += Agent(agent);
  });
};

export const searchFunction = () => {
  const companySearchResultArticle = document.querySelector(".foundCompanies");

  document
    .querySelector("#companySearch")
    .addEventListener("keypress", (keyPressEvent) => {
      if (keyPressEvent.charCode === 13) {
        const foundBusiness = businessArray.find((business) => {
          return business.companyName.includes(keyPressEvent.target.value);
        });

        companySearchResultArticle.innerHTML = `
          <h2>
          ${foundBusiness.companyName}
          </h2>
          <section>
          ${foundBusiness.addressFullStreet}
            </section>
            <section>
            ${foundBusiness.addressCity},
            ${foundBusiness.addressStateCode}
            ${foundBusiness.addressZipCode}
            </section>
        `;
      }
    });
};
