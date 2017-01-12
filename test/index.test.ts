/// <reference path="describe.d.ts" />

import { suite, test, slow, timeout, skip, only } from 'mocha-typescript';
import { expect } from 'chai';

import * as _ from 'lodash';

import { Index } from '../index'

describe('Sanity', () => {
  @suite class Sanity {

    before() {
    }

    @test sanity(){
      expect('true').to.eql('true')
    }

  }
});