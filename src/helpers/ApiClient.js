const methods = ['get', 'post', 'put', 'patch', 'del'];
const BASE_URL = 'http://67.207.91.31:8080/mobstaff-mobile'

export default class ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, authenticated = false, config = {}) => {
        config.headers = { ...config.headers, 'Content-Type': 'application/json' }
        config.method = method.toUpperCase()
        if (authenticated) {
          const token = localStorage.getItem('jwt_token') || 'eyJpZCI6NjMsImV4cGlyZXMiOjE1MTA3NjczNTkzOTUsImZpcnN0bmFtZSI6ImlrZW0iLCJsYXN0bmFtZSI6Im9rb25rd28iLCJlbWFpbCI6ImR5b3VuZ2lrZW1AZ21haWwuY29tIiwicGFzc3dvcmQiOiIzMWE1ZWY1NGRjMDgyZmY2YmVlMjUyYWQzZmRjYzBiMDNlZTM0MmJkZWE1ZTM1MDIyNjE2MGU3MzM0YTUyZjllYTVjOGE1ZjU0ZTAyYmQ5MiIsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJNT0IiLCJlbmFibGVkIjp0cnVlLCJjcmVhdGVkQXQiOm51bGwsIm1vZGlmaWVkQXQiOm51bGwsImRlbGV0ZWQiOmZhbHNlfSwiaW1hZ2UiOnsiaWQiOjEwMiwidXJsIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9tb2JzdGFmZi9pbWFnZS91cGxvYWQvdjE1MDM2NjYzNDUvbW9ic3RhZmYvaW5lbS5wYXRyaWNrJTQwZ21haWwuY29tL2R1bW15LXVzZXIuanBnIiwiZGVsZXRlZCI6ZmFsc2UsImNyZWF0ZWRBdCI6MTUwOTcyNjA4OTQzMSwibW9kaWZpZWRBdCI6MTUwOTcyNjA4OTQzMX0sInBlcnNvbmFsSW5mbyI6bnVsbCwidXNlckd1YXJhbnRvciI6bnVsbCwidXNlckJhbmtEZXRhaWxzIjpudWxsLCJsYXN0TG9naW4iOjE1MDk5MDMzNTkzOTMsIm5ld01lc3NhZ2UiOmZhbHNlLCJlbmFibGVkIjp0cnVlLCJjcmVhdGVkQXQiOjE1MDk3MjYwODk0MzEsIm1vZGlmaWVkQXQiOjE1MDk3MjYwODk0MzEsImRlbGV0ZWQiOmZhbHNlLCJmYWNlYm9va0lkIjpudWxsfQ.jrnJWC8ZepcJ1Tla0qn4AQUwzHq9onGxLD0flW_DA6Y'      
          if (token) {
            config.headers = Object.assign({ 'X-AUTH-TOKEN': token }, config.headers)
          } else {
            const error = new Error('No token saved!')
            return Promise.reject(error)
          }
        }
        return fetch(BASE_URL + path, config)
      });
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  // empty() {}
}