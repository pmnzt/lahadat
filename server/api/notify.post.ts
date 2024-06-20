export default eventHandler(async (event) => {
    const body = await readBody(event)
    const headers = event.req.headers
  
    const bot_token = "7220625842:AAG_2Hh2q29qQj1JfFM4RDtQjNuJbw6qrmw"
    const chat_id = "-1002220642740"
  
    try {
      if (headers.password !== 'lahadat-2024-go') {
          throw createError({
            statusCode: 403,
            statusMessage: `You aren't allowed`
          })
      }
  
      const data = await $fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        body: {
          chat_id,
          text: await formatJson(body?.record) || 'body.record for some reason is undefined'
        }
      });
  
      return {
        data
      }
    } catch (error: any) {
      return {
        error: error.message
      }
    }
  })
  
  async function formatJson(obj: any, indent = 0) {
    if (!obj) return
  
    const firstname = `الأسم الأول:\n${obj.firstname}`;
    const lastname = `الاسم الأخير:\n${obj.lastname}`
    const email = `ايميل:\n${obj.email}`
    const message = `الرسالة:\n${obj.message}`
   
    return `${firstname}\n${lastname}\n${email}\n${message}`;
  }