import Block from "../../framework/Block";
import UserProfileController from "../../controllers/userProfileController";
import connect from "../../store/connect";

const userProfileController = new UserProfileController();


class ProfilePhotoRound extends Block {
  constructor(props: Indexed) {
    super({
      ...props,
      events: { // Добавляем обработчик события изменения файла
        click: (event: Event) => this.triggerFileInput(event), 
        change: (event: Event) => this.handleFileChange(event)  // Триггер для кнопки "загрузить фото"
      },
    });
  }

  protected triggerFileInput = (event: Event): void  =>{
    console.log('trigger')
    const fileInput = this.element?.querySelector('input[type="file"]');
    if (fileInput) {
      (fileInput as HTMLInputElement).click(); // Открываем окно выбора файла
    }
  }

  protected handleFileChange = async(event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      const file = input.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('avatar', file)
        console.log( Object.fromEntries(formData))
        userProfileController.updateAvatar(formData)
    }
    
  }}

  public render(): string {
    return `<div class="profile-photo-round">
              <img src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" alt="ava">
              <input type="file" name="ava" accept="image/*" hidden/>
            </div> `;
  }
}

function mapProfilePhotoToProps(state: State):Indexed {
  return {
    ...state.auth.user
  };
}

export default connect(ProfilePhotoRound,  mapProfilePhotoToProps);
