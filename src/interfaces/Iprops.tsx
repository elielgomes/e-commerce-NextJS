export interface TypeSlideBackground {
  slidesBackground: string;
}

export interface TypePropsProductCard {
  productImage: string;
  productName: string;
  productCurrentPrice: number;
  productPreviousPrice: number;
  addCartItem: () => void;
}
