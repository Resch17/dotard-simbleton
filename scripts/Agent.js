export const Agent = (agent) => {
  return `
  <section class="agent">
    <h3>${agent.fullName}</h3>
    <p>${agent.company}</p>
    <p>${agent.phoneNumber}</p>
  </section>
  `;
};
