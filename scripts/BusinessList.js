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
  const agentSearchResultArticle = document.querySelector(".foundCompanies");

  document
    .querySelector("#companySearch")
    .addEventListener("keypress", (keyPressEvent) => {
      if (keyPressEvent.charCode === 13) {
        const foundAgent = agentArray.find((agent) => {
          return agent.fullName.includes(keyPressEvent.target.value);
        });

        agentSearchResultArticle.innerHTML = `
          <h2>${foundAgent.fullName}</h2>
          <p>${foundAgent.company}</p>
          <p>${foundAgent.phoneNumber}</p>
        `;
      }
    });
};
