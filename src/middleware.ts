export function onRequest (context, next) {
  if (context.url.pathname.startsWith('/page-1')) {
    return context.rewrite('/page-2')
  }
  return next()
}