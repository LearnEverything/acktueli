module.exports = {
  siteUrl: 'https://acktueli.com',
  generateRobotsTxt: true,
  outDir: './out/',
  exclude: ['/vns/*', '/login', '/profile', '/signup', '/admin', '/auth'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/vns/*', '/login', '/profile', '/signup', '/admin', '/auth'],
      },
    ]
  }
}