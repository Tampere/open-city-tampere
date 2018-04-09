import Config from 'src/config/config.json';
import { makeRequest } from 'src/utils/requests';

export const getUnit = async (unitId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = Config.RESPA_BASE_URL + 'unit/' + unitId;
      const unit = await makeRequest(url, 'GET', null, null, null);
      resolve(unit);
    } catch (error) {
      reject(error)
    }
  })
};

export const getResources = async (url) => {
  return new Promise(async (resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    try {
      const resources = await makeRequest(url, 'GET', headers, null, null);

      for (let i = 0; i < resources.results.length; i++) {
        const unit = await getUnit(resources.results[i].unit);
        resources.results[i].unit = unit;
      }

      resolve(resources);
    } catch (error) {
      reject(error);
    }
  })
};

export const getResource = async (id, params) => {
  return new Promise(async (resolve, reject) => {
    let url = Config.RESPA_BASE_URL + 'resource/' + id;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (params) url = url + params;

    try {
      const resource = await makeRequest(url, 'GET', headers, null, null);
      console.warn(resource)
      resolve(resource);
    } catch (error) {
      reject(error);
    }
  })
}
