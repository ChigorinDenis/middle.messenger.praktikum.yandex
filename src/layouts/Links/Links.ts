export default class Links{
  constructor() {
   
  }

  public render(): string {
    return `
      <nav class="nav-container">
        <ul>
          <li><a href="/messenger" class="nav-links" data-template="main">Chat Page</a></li>
          <li><a href="/" class="nav-links" data-template="login">Login Page</a></li>
          <li><a href="/sign-up" class="nav-links" data-template="signup">Signup Page</a></li>
          <li><a href="/settings" class="nav-links" data-template="profile">Profile</a></li>
          <li><a href="/edit-profile" class="nav-links" data-template="edit">Edit Profile</a></li>
          <li><a href="/edit-password" class="nav-links" data-template="password">Edit Password</a></li>
          <li><a href="/404" class="nav-links" data-template="page404">404 Page</a></li>
          <li><a href="500" class="nav-links" data-template="page500">500 Page</a>
          </li>
        </ul>
      </nav>
    `;
  }
}
