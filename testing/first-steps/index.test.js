const { sum, createUser, working } = require('./index');

function doSomeConfig() {
  console.log('configuring tests....')
}

function cleanup() {
  console.log('cleaning tests....')
}

describe('sum', () => {
  // beforeEach(() => {
  //   doSomeConfig();
  // });

  // afterEach(() => {
  //   cleanup();
  // });

  // beforeAll(() => {
  //   doSomeConfig();
  // });

  // afterAll(() => {
  //   cleanup();
  // });

  it('should add 1 and 3 correctly', () => {
    const result = sum(1, 3);

    expect(result).toBe(4);
  });

  it('should add 3270489237 and 23980745 correctly', () => {
    const result = sum(3270489237, 23980745);

    expect(result).toBe(3294469982);
  });
});

describe('createUser', () => {
  it('should create an user' , () => {
    const user = createUser('email', 'password123');

    expect(user).toMatchObject({ email: 'email', password: 'password123' })
  });
});

describe('working', () => {
  it('should set my current status as busy', () => {
    const status = working(true);

    expect(status).toMatch('busy');
  });

  it('should set my current status as available', () => {
    const status = working(false);

    expect(status).toMatch('available');
  })
})
