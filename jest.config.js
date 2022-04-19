module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!*.config.js',
    '!**/*.d.ts',
    '!**/.next/**',
    '!**/configFiles/**',
    '!**/coverage/**',
    '!**/stories/**',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    // '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    // '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
    //   '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jestSetupTests.ts'],
};
