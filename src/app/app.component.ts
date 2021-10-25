import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "./_services/token-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  title = "FreeMarket";
  user = this.tokenStorageService.getUser();

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
      this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

      this.username = user.username;
    }
    if (this.isLoggedIn) {
      window.location.reload();
    }
    console.log(this.username);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["mainUI"]).then(() => window.location.reload());
  }
}
