import EventBus from '../../framework/EventBus';

export enum WebSocketEvents {
  OPEN = 'open',
  ERROR = 'error',
  MESSAGE = 'message',
  CLOSE = 'close',
}

interface WebSocketOptions {
  pingInterval?: number; // Интервал для ping сообщений
  reconnectInterval?: number; // Интервал переподключений
  maxReconnectAttempts?: number; // Максимальное количество попыток переподключения
}

export default class WebSocketTransport extends EventBus {
  private socket: WebSocket | null = null;
  private url: string;
  private pingInterval: number;
  private reconnectInterval: number;
  private maxReconnectAttempts: number;
  private reconnectAttempts: number = 0;
  private pingTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(url: string, options?: WebSocketOptions) {
    super();
    this.url = url;
    this.pingInterval = options?.pingInterval ?? 10000; // Интервал пинга, по умолчанию 10 сек
    this.reconnectInterval = options?.reconnectInterval ?? 5000; // Интервал переподключения, по умолчанию 5 сек
    this.maxReconnectAttempts = options?.maxReconnectAttempts ?? 10; // Количество попыток переподключения
  }

  connect(): void {
    this.socket = new WebSocket(this.url);
    this.socket.addEventListener('open', this.onOpen.bind(this));
    this.socket.addEventListener('message', this.onMessage.bind(this));
    this.socket.addEventListener('close', this.onClose.bind(this));
    this.socket.addEventListener('error', this.onError.bind(this));
    
  }

  private onOpen(): void {
    console.log('WebSocket connection opened');
    this.reconnectAttempts = 0;
    this.startPing();
    this.emit(WebSocketEvents.OPEN); 
  }

  private onMessage(event: MessageEvent): void {
    const message = JSON.parse(event.data);
    if (message.type === 'pong') {
      this.emit('pong');
    } else {
      this.emit('message', message);
    }
  }

  private onClose(): void {
    console.log('WebSocket connection closed');
    this.stopPing();
    this.emit(WebSocketEvents.CLOSE);

    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnect();
    } else {
      console.error('Max reconnect attempts reached');
    }
  }

  private onError(event: Event): void {
    console.error('WebSocket error:', event);
    this.emit(WebSocketEvents.ERROR, event);
  }

  private startPing(): void {
    if (this.pingTimer === null) {
      this.pingTimer = setInterval(() => {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
          const pingMessage = JSON.stringify({ type: 'ping' });
          //console.log('Sending ping:', pingMessage);
          this.socket.send(pingMessage);
          this.emit('ping');
        }
      }, this.pingInterval);
    }
  }

  private stopPing(): void {
    if (this.pingTimer !== null) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
  }

  private reconnect(): void {
    this.reconnectAttempts += 1;
    //console.log(`Attempting to reconnect... (${this.reconnectAttempts})`);

    setTimeout(() => {
      this.connect();
    }, this.reconnectInterval);
  }

  send(data: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    } else {
      console.error('WebSocket is not open. Cannot send message');
    }
  }

  close(): void {
    this.stopPing();
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

