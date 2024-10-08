import Block from "../../framework/Block";
import Message from '../../components/Message/Message';
import MessageInput from "../../components/MessageInput/MessageInput";
import data from '../../mockData/messagesData';



const Messages =  data.map((props) => new Message(props))



export default class MessageBox extends Block {
  constructor() {
    super({
      Messages,
      MessageInput: new MessageInput(),
    });
  }

  public render(): string {
    return `
          <section class="message-list bgd-dark">
            <header class="message-header">
              <div class="user">
                <div class="chat-avatar">
                  <div class="chat-avatar-img"></div>
                </div>
                <div class="user-info">
                  <span class="user-title">Вадим</span>
                </div>
              </div>
              <span class="close-chat">
                <img src="/icons/points.svg" alt="points" />
              </span>
            </header>
          <div class="message-box">
             {{{Messages}}}
           </div>
           {{{MessageInput}}}
           </section>`;
  }
}
