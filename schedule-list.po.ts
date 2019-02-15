import { browser, by, element } from 'protractor';

export class SchduleAppointmentPage {
  async navigateTo(id) {
    return browser.get(`/schedule/${id}`);
  }

  async getScheduledDate() {
    return await element(by.xpath('//span[@class="title"]')).getText();
    //return element(by.css('drp-schedule-day .title')).getText();
  }

  async getScheduledTime() {
    //return await element(by.xpath('//drp-schedule-item/div/div/div[1]')).getText();
    return await element(by.xpath('//div[@class="col-3 col-md-5 time"]')).getText();
  }
  
  getScheduledName() {
    //return element(by.xpath('//drp-schedule-item/div/div/div[2]/div')).getText();
    return element(by.xpath('//div[@ng-reflect-router-link="/patients,1"')).getText();
  }

  getNoScheduledApp() {
    //return element(by.xpath('//drp-schedule-day/div/div[2]/div')).getText();
    return element(by.xpath('//drp-schedule-day/div/div[2]/div')).getText();
  }
}
