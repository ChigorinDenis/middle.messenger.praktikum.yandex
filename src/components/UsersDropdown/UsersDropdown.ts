import Block from '../../framework/Block';
import IconButton from '../../components/IconButton/IconButton';
import connect from '../../store/connect';
import store from '../../store/store';

interface User {
  name: string;
  login: string;
}

interface UsersDropdownProps {
  users: User[];
  onDeleteUser: (login: string) => void;
}


class UserItem extends Block {
  constructor(props: Indexed) {
    super({
      ButtonDelete: new IconButton({
        img_src: '/icons/delete.svg',
        alt: 'Удалить',
        onClick: () => {
          store.set('ui.modalActive', {name: 'deleteUserFromChat', value: props.id});
          console.log('store', store.getState());
        }
      }),
      ...props
    });
  }

  render(): string {
    return `
            <li class="users-dropdown-item">
              <span>{{login}}</span>
              {{{ButtonDelete}}}
            </li>`;
  }
}

class UsersDropdown extends Block {
  constructor(props: UsersDropdownProps) {
    super({
      UserItemsList: [],
      ...props
    });
  }

  render(): string {
    return `
      <div class="users-dropdown">
        <div class="users-dropdown-trigger">Пользователи</div>
        <ul class="users-dropdown-list">
          {{{UserItemsList}}}
        </ul>
      </div>
    `;
  }
}

function mapUserToProps(state: State):Indexed {
  return {
    chatUsers: state.chatUsers,
  };
}

const createItemCallback =  (prop:Indexed) => {
  return  new UserItem(prop);
}
const listUpdateProps = {
  key:'UserItemsList',
  createItemCallback,
}

function mapStateToListProps(state: Indexed):Indexed {
  return  state.chatUsers as Indexed;
}

export default connect(UsersDropdown, mapUserToProps, listUpdateProps, mapStateToListProps);
