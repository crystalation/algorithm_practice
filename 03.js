//제어의 역전
class Logger {
  log(message) {
    console.log(message);
  }
}

class UserManager {
  constructor() {
    this.logger = null;
  }

  setLogger(logger) {
    this.logger = logger;
  }

  greetUser(username) {
    this.logger.log(`Hello, ${username}!`);
  }
}

const logger = new Logger();
const userManager = new UserManager();
userManager.setLogger(logger);
userManager.greetUser('Bob');
