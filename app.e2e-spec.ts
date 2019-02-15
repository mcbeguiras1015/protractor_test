import { AppPage } from './app.po';
import * as moment from 'moment';
import { CreatePatientPage } from './create-patient.po';
import { PatientListPage } from './patient-list.po';
import { PatientDetailPage } from './patient-detail.po';
import { ScheduleAppPage } from './schedule-app.po';
import { CreateAppPage } from './create-app.po';
import { SchduleAppointmentPage } from './schedule-list.po';
import { utils } from './utils';
import { async } from '@angular/core/testing';

describe('Payne Dentistry App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should start by displaying today's schedule`, () => {
    page.navigateTo();

    const paragraphText = page.getParagraphText();
    expect(paragraphText).toContain('Schedule');
    expect(paragraphText).toContain(moment().format('LL'));
  });
});

describe('Patient management', () => {
  const firstName = 'Jeremy';
  const lastName = 'Burnett';

  let createPage: CreatePatientPage;
  let listPage: PatientListPage;
  let detailPage: PatientDetailPage;
  let schedApp: ScheduleAppPage;
  let createAppPage: CreateAppPage;
  let schedulePage: SchduleAppointmentPage;
  let utility: utils;

  beforeEach(() => {
    createPage = new CreatePatientPage();
    listPage = new PatientListPage();
    detailPage = new PatientDetailPage();
    schedApp = new ScheduleAppPage();
    createAppPage = new CreateAppPage();
    schedulePage = new SchduleAppointmentPage();
    utility = new utils();
  });

  it('should create a new patient', async () => {
    await createPage.navigateTo();

    await createPage.setFirstName(firstName);
    await createPage.setLastName(lastName);
    await createPage.setBirthDate('1996-04-07');
    await createPage.submitForm();
  });

  it('should list the newly created patient', async () => {
    await listPage.navigateTo();

    await listPage.selectPatientByName(firstName, lastName);
  });

  it('should show details of clicked patient', async () => {
    const patientName = await detailPage.getTitleText();

    expect(patientName).toBe(`${lastName}, ${firstName}`);
  });

  // Add Appointment
  it('should click Schedule Appointment', async () => {
    await schedApp.clickScheduleApp();

  });

  it('should create a new appointment', async () => {
    //await createAppPage.navigateTo();

    await createAppPage.setDate('2019-02-18');
    await createAppPage.setTime('10:30 AM');
    await createAppPage.setDuration('60');
    await createAppPage.saveAppointment();
  });

  it('should show scheduled appointments of the day', async () => {
    await schedulePage.navigateTo('2019-02-18');

    const scheduleDate = schedulePage.getScheduledDate();
    const scheduleTime = await schedulePage.getScheduledTime();
    const patientName = schedulePage.getScheduledName();
    //const noAppointmentText = schedulePage.getNoScheduledApp();

    //const timeFromTo = utility.calcTime('10:30 AM', 30);

    expect(scheduleDate).toContain('February 18, 2019');
    expect(scheduleTime).toContain('10:30 AM');
    //expect(scheduleTime).toContain(timeFromTo);
    expect(patientName).toBe(`${lastName}, ${firstName}`);

  });
});
