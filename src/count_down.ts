const day: number =  8.64e7;
const second: number = 1e3;
const minute: number = 6e4;
const hour: number = 3.6e6;

export default class CountDown {
    private COUNT_DOWN_TO: number;
    private distance: number = 0;

    constructor() {
        this.COUNT_DOWN_TO = 1548050400000;
        requestAnimationFrame(this.update.bind(this));
    }

    setText(selector: string, value: string | number) {
        const ele = document.querySelector<HTMLElement>(selector);
        if (!ele) {
            throw Error(`${selector} element does not exist`);
        }

        ele.innerText = this.padding(value);
    }
    
    update() {
        this.distance = this.COUNT_DOWN_TO - (new Date().getTime());
        this.render();
        requestAnimationFrame(this.update.bind(this));
    }

    render() {
        this.setText(
            '.js-hours',
            Math.floor(this.distance / (hour))
        );
        this.setText(
            '.js-minutes',
            Math.floor((this.distance % (hour)) / (minute))
        );
        this.setText(
            '.js-seconds',
            Math.floor((this.distance % (minute)) / second)
        );
    }

    padding(str: string | number) {
        str = str.toString();
        if (str.length === 1) {
            return `0${str}`;
        }

        return str;
    }
}

let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)