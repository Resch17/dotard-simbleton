import { useAgents } from "./PurchasingAgents.js";
import { Agent } from "./Agent.js";

const agentArray = useAgents();

export const AgentList = () => {
  const agentElement = document.querySelector(".agents");
  agentArray.forEach((agent) => {
    agentElement.innerHTML += Agent(agent);
  });
};

export const AgentSearchFunction = () => {
  const agentSearchResultArticle = document.querySelector(".foundAgents");

  document
    .querySelector("#agentSearch")
    .addEventListener("keypress", (keyPressEvent) => {
      if (keyPressEvent.charCode === 13) {
        const foundAgent = agentArray.find((agent) => {
          return agent.fullName.includes(keyPressEvent.target.value);
        });
        agentSearchResultArticle.innerHTML = Agent(foundAgent);
      }
    });
};
