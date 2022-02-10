import type { UUIDsPagesPluginFunction } from "../types";

export const onRequestGet: UUIDsPagesPluginFunction = async ({
  request
}) => {
  const url = new URL(request.url)
  let format = url.searchParams.get('format') || 'plain'
  if (!['plain', 'json'].includes(format)) {
    format = 'plain'
  }
  const result = await fetch(`https://uuid.rocks/${format}`)
  return new Response(await result.text(), {
    headers: {
      'Content-Type': result.headers.get('Content-Type')
    }
  })
};
