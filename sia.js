window.addEventListener("load", (event) => {
  const calendarElement =
    document.querySelector < HTMLDivElement > '[data-element="calendar"]';
  if (!calendarElement) return;

  console.log(calendarElement);
});
