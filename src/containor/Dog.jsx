/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { Component } from 'react';
import Dogresponse from '../components/answer/DogResponse';
import RequestDog from '../components/app/request/RequestDogs';


import { deleteDog, findDogById, getDog, postDog, updateDog } from '../services/fetch';

export default class Animals extends Component {
    state = {
      name: '',
      type: '',
      characteristic: '',
      method: '',
      response: {},
      id: ''
    };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { name, type, characteristic, method, id } = this.state;

      if(method === 'post') {
        postDog(name, type, characteristic)
          .then(res => this.setState({
            name: res.name,
            type: res.type,
            characteristic: res.characteristic,
            response: res
          }));
      }
      else if(method === 'get') {
        getDog().then(response => this.setState({ response }));
      } else if(method === 'find') {
        findDogById(id).then(response => this.setState({ response }));
      } else if(method === 'delete') {
        deleteDog(id).then(response => this.setState({ response }));
      } else if(method === 'put') {
        updateDog(id, name, type, characteristic).then(response => this.setState({ response }));
      }
    }

    render() {
      const { name, type, characteristic, response, method } = this.state;
      return (
        <>
          <RequestDog
            name={name}
            type={type}
            characteristic={characteristic}
            method={method}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />

          <Dogresponse response={response} />
        </>
      );
    }
}
