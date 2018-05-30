'use strict';

const dayList = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}
class Reservation {
//  needs the slice to counter the too long randomizations
  getCodeBooking(): string {
    return (Math.random() *10).toString(36).substring(4).toUpperCase().slice(0, 7);
  }

  getDowBooking(): string {
    return  dayList[Math.floor(Math.random()* dayList.length)];
  }

  info() {
    for(let i: number = 0; i < dayList.length; i++) {
      console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
    }
  }
}

let res: Reservation = new Reservation();

res.getCodeBooking();
res.getDowBooking();
res.info();

