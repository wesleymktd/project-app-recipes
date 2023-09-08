import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import DrinkCategoriesModel from '../database/models/DrinkCategoriesModel';
import mockMealCategory from './MockMealCategory';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests "Drink Category" Route and funcitons', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('Tests GET category with status 200, success', async () => {
    sinon.stub(DrinkCategoriesModel, 'findAll').resolves(mockMealCategory as any);
    const response = await chai.request(app)
    .get('/drinks/categories')
    .send(mockMealCategory);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ drinks: mockMealCategory });
  });
});