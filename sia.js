window.addEventListener("load", (event) => {
  const calendarElement =
    document.querySelector < HTMLElement > '[data-element="calendar"]';
  if (!calendarElement) return;

  console.log(calendarElement);
});
