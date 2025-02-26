/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет статическое свойство URL со значением '/account'
 * */
class Account extends Entity {
  static URL = "/account";

  /**
   * Получает информацию о счёте
   * */
  static get(id = "", callback) {
    const options = {
      url: `${this.URL}/${id}`,
      method: "GET",
      callback: callback
    };
    createRequest(options);
  }
}
