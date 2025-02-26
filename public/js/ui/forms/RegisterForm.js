/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    const callback = (err, response) => {
      // response = {success: true, user: {name: "Alan Rickman", email: "alan@rickman", password: "123", id: "sktwij8lluq2fc5d"}}
      if (response.success) {
        this.element.reset();
        App.setState("user-logged");
        App.getModal("register").close();
      }
    }
    User.register(data, callback);
  }
}
