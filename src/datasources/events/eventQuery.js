export default (responseError) => {
  const Events = async (parent, { id }, { dataSources }, info) => {
    const { eventAPI } = dataSources
    // info.cacheControl.setCacheHint({ maxAge: 0, scope: 'PUBLIC' })
    try {
      return await eventAPI.events()
    } catch(error) {
      responseError(error);
    }
  }

  const EventsByID = async (parent, { id }, { dataSources }, info) => {
    const { eventAPI } = dataSources
    // info.cacheControl.setCacheHint({ maxAge: 0, scope: 'PUBLIC' })
    try {
      return await eventAPI.eventsByID(id)
    } catch(error) {
      responseError(error);
    }
  }
  return {
    Events,
    EventsByID
  }
}