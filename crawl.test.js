const { test, expect } = require("@jest/globals")
const { normalizeUrl } = require('./crawl.js')
test('http-url-to-normalized', () => {
	expect(normalizeUrl('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('http-url-slash-to-normalized', () => {
	expect(normalizeUrl('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('http-url-query-params-to-normalized', () => {
	expect(normalizeUrl('http://blog.boot.dev/path?var=value')).toBe('blog.boot.dev/path')
})

test('https-url-to-normalized', () => {
	expect(normalizeUrl('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('https-url-slash-to-normalized', () => {
	expect(normalizeUrl('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})

test('https-url-query-params-to-normalized', () => {
	expect(normalizeUrl('https://blog.boot.dev/path?var=value')).toBe('blog.boot.dev/path')
})
