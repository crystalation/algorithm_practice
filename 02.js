//의존성 주입
class Logger {
  log(message) {
    console.log(message);
  }
}

class UserManager {
  constructor(logger) {
    this.logger = logger;
  }

  greetUser(username) {
    this.logger.log(`Hello, ${username}!`);
  }
}

const logger = new Logger();
// console.log(logger);
const userManager = new UserManager(logger);
userManager.greetUser('Alice');
