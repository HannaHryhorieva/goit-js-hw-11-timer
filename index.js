
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        
    };
    
    start() {
        const targetTime = this.targetDate.getTime();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
            return this.updateTimer({ days, hours, mins, secs })
        }, 1000);
      
    };

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    };

    pad(value) {
        return String(value).padStart(2, '0')
    };
    
    updateTimer({ days, hours, mins, secs }) {
        const timeDays = document.querySelector(`${this.selector} [data-value="days"]`);
        const timeHours = document.querySelector(`${this.selector} [data-value="hours"]`);
        const timeMins = document.querySelector(`${this.selector} [data-value="mins"]`);
        const timeSecs = document.querySelector(`${this.selector} [data-value="secs"]`);
        
        timeDays.textContent = `${days}`;
        timeHours.textContent = `${hours}`;
        timeMins.textContent = `${mins}`;
        timeSecs.textContent = `${secs}`;
    };
};



const time = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 15, 2021'),
});
time.start()
