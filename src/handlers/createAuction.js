async function createAuction(event, context) {
  const { title } = JSON.parse(event.body)

  const now = new Date()
  const auction = {
    title: title || 'Default title is null',
    status: 'OPEN',
    createdAt: now.toISOString()
  }
  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

export const handler = createAuction;
