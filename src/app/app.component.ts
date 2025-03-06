
import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
// import { UserService } from './services/user.service';
// import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any = null;
  product: any = null;
  userId: number | null = null;
  productId: number | null = null;

  constructor(
    private userService: UserService, 
    private productService: ProductService
  ) {}

  fetchUser(): void {
    if (this.userId !== null) {
      this.userService.getUser(this.userId).subscribe(response => {
        this.user = response;
      }, error => {
        this.user = null;
      });
    }
  }

  fetchProduct(): void {
 
  }
}