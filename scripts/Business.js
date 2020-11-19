export const Business = (bus) => {
  return `
  <section class="business">
    <h3>${bus.companyName}</h3>
    <p>${bus.addressFullStreet}</p>
    <p>${bus.addressCity}, ${bus.addressStateCode} ${bus.addressZipCode}</p>
  </section>
  `;
};
