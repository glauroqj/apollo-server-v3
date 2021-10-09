import { RESTDataSource } from 'apollo-datasource-rest'

class EventsDS extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://sympla.com.br'
    this.HTTP = {
      GET: 'get',
      POST: 'post',
      PUT: 'put',
      DELETE: 'delete'
    }
  }

  /** middleware */
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.fullHeaders['authorization'])
  }

  async events() {
    return this.get('/public/v3/events')
  }

  async eventsByID() {
    return this.get('/public/v3/events/{event_id}')
  }
}

export default EventsDS

/**
  DOC: https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest
*/