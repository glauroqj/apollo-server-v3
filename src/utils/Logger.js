export default () => ({
  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart(requestContext) {
    const { request } = requestContext
    if (request.query.indexOf('IntrospectionQuery') < 0) {
      const payload = {
        request: {
          query: request?.query,
          variables: request?.variables,
        }
      }
      console.log(`[ REQUEST ][ ${request?.operationName} ]`, payload)

      return {
        async willSendResponse(requestContext) {
          const { request, response } = requestContext

          // const _getDataValue = () => {
          //   const cloneData = Object.assign({}, response?.data)

          //   for (const value in cloneData) {
          //     const data = cloneData[value]
          //     console.log( JSON.stringify(data).length )
          //   }
          // } 

          const payload = {
            response: {
              errors: response?.errors || 'none',
              data: {...response?.data},
              extensions: response?.extensions
            }
          }
          console.log(`[ RESPONSE ][ ${request?.operationName} ]`, payload)
        }
      }
    }
  }
})