import { browser, by, element } from 'protractor';

export class ScheduleAppPage {
  async navigateTo(id) {
    return browser.get(`/patients/${id}`);
  }

  async clickScheduleApp() {
    await element(by.xpath('//*[@class="container"]/div[2]/div/a')).click();
  }
}



