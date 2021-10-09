import { RESTDataSource } from 'apollo-datasource-rest'

class EventsDS extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://sympla.com.br'
  }

  /** middleware */
  willSendRequest(request) {
    console.log('< EVENT DS > ', this.context)
    request.headers.set('Authorization', this.context.fullHeaders['authorization'])
    /** set new headers */
    request.headers.set('s_token', this.context.fullHeaders['authorization'])
  }

  async events() {
    return this.get('/public/v3/events')
  }

  async eventsByID(id) {
    return this.get(`/public/v3/events/${id}`)
  }
}

export default EventsDS

/**
  DOC: https://github.com/apollographql/apollo-server/tree/main/packages/apollo-datasource-rest
*/