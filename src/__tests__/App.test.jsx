import './test_suites/NewTeaForm.test'

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn((url, options) => {
    if (url.endsWith('/tea')) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 123 }),
      });
    }
    return Promise.resolve({ ok: true, json: () => Promise.resolve([]) });
  }))
})
