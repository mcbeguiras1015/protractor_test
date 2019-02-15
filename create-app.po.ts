import { browser, by, element } from 'protractor';

export class CreateAppPage {
  async navigateTo(id) {
    return browser.get(`/appointments/${id}/new`);
  }

  async setDate(value) {
    await element(by.css('input[name="date"]')).sendKeys(value);
  }

  async setTime(value) {
    await element(by.css('input[name="time"]')).sendKeys(value);
  }

  async setDuration(value) {
    await element(by.css('input[name="duration"]')).sendKeys(value);
  }

  async saveAppointment() {
    await element(by.css('button[type="submit"]')).click();
  }
}