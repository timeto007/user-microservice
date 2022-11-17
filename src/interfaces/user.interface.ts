import { Product } from 'src/Entities/product.entity';
import { UserType } from 'src/Entities/usertype.enum';

export class userPost {
  id: number;
  firstName: string;
  lastName: string;
  role: UserType;
  isActive: boolean;
  phoneNumber: string;
  products: Product[];
}
