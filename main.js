const refs = {
  timer: document.querySelector("#timer-1"),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  interval = setInterval(() => {
    const date = Date.now();
    const timerDate = this.targetDate - date;
    changeTime(timerDate);
    stopText(timerDate);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function changeTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function stopText(time) {
  if (time < 0) {
    refs.timer.textContent = `Promotion is Over!`;
    refs.timer.style.fontSize = "30px";
    refs.timer.style.color = "red";
    refs.timer.style.fontFamily = "Georgia";
    refs.timer.style.letterSpacing = "0.05em";
    refs.timer.style.fontWeight = "700";
    refs.timer.style.textAlign = "center";
    refs.timer.style.marginTop = "100px";
  }
}

new CountdownTimer({
	selector: "#timer-1",
	targetDate: new Date("Aug 30, 2021"),
  });

  new CountdownTimer({
	selector: "#timer-2",
	targetDate: new Date("Aug 15, 2021"),
  });
	