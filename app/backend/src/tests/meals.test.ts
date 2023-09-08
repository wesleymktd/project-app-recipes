import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import MealsModel from '../database/models/MealsModel';
import mockMeals from './mockMeals';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test Meals routes and functions', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('Test the "/meals" Route', () => {
    it('Tests GET with status 200', async () => {
    sinon.stub(MealsModel, 'findAll').resolves(mockMeals as any);
    const responseFindAll = await chai.request(app).get('/meals');
    expect(responseFindAll.status).to.be.equal(200);
    expect(responseFindAll.body).to.be.deep.equal({ meals: mockMeals});
  });
    it('Tests GET with status 200 with a meal name', async () => {
    sinon.stub(MealsModel, 'findAll').resolves(mockMeals as any);
    const responseFindAll = await chai.request(app)
    .get('/meals/name?q=')
    .send(mockMeals);
    expect(responseFindAll.status).to.be.equal(200);
    expect(responseFindAll.body).to.be.deep.equal(mockMeals);
  });
    it('Tests GET with error message', async () => {
    sinon.stub(MealsModel, 'findAll').resolves({ message: 'Invalid input, or no meal starts with that letter.'} as any);
    const responseFindAll = await chai.request(app)
    .get('/meals/name?q=');
    expect(responseFindAll.status).to.be.equal(200);
    expect(responseFindAll.body).to.be.deep.equal({ message: 'Invalid input, or no meal starts with that letter.'});
  });
});
});