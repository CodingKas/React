import { render, screen } from '@testing-library/react';
import Item from '../components/Item';
import { Product } from '../types';

// Sample product data
const product: Product = {
  product: "flash t-shirt",
  price: 27.5,
  category: "t-shirts",
  bestSeller: false,
  image: "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
  onSale: true,
};

describe('Item Component', () => {
  it('renders the product name', () => {
    render(<Item product={product} />);
    expect(screen.getByText(product.product)).toBeInTheDocument();
  });

  it('renders the product price', () => {
    render(<Item product={product} />);
    expect(screen.getByText(`Price: $${product.price}`)).toBeInTheDocument();
  });

  it('renders the product category', () => {
    render(<Item product={product} />);
    expect(screen.getByText(`Category: ${product.category}`)).toBeInTheDocument();
  });

  it('renders "On Sale!" when onSale is true', () => {
    render(<Item product={product} />);
    expect(screen.getByText('On Sale!')).toBeInTheDocument();
  });

  it('renders "Best Seller!" when bestSeller is true', () => {
    const bestSellerProduct = { ...product, bestSeller: true };
    render(<Item product={bestSellerProduct} />);
    expect(screen.getByText('Best Seller!')).toBeInTheDocument();
  });
});
