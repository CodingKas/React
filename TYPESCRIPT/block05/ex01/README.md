## Coding Challenges

**EX1: Implement Main/List/Item Pattern to Render a List of Products** 

Objective: Use interfaces and type aliases to define and manage the types for props and data used in the components.

- In `block01/ex01`you will find a react app created for you. App.tsx and other components are empty on purpose, this is where you will write your code
- Create a file `types.ts` in the `src` folder and in it:
    - Create an **interface** for each product object that specifies the structure of a product (name it `Product`).
    - Create a **type alias** for `Category`, which can be `"t-shirts" | "hats" | "jackets" | "pants" | "shoes"`. Use this alias inside the `Product` interface.
    
    > remember to export them!
    > 
- Declare the array of products inside the main component `App.tsx` with type annotations using **interfaces imported from `types.ts`**.
- Use the following data and define appropriate types:

```tsx
// App.tsx
const products = [
  {
    product: "flash t-shirt",
    price: 27.5,
    category: "t-shirts",
    bestSeller: false,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
    onSale: true,
  },
  {
    product: "batman t-shirt",
    price: 22.5,
    category: "t-shirts",
    bestSeller: true,
    image:
      "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
    onSale: false,
  },
  {
    product: "superman hat",
    price: 13.9,
    category: "hats",
    bestSeller: true,
    image:
      "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
    onSale: false,
  },
];
```

- Pass the `products` array via props to a child component called `List.tsx`.
- In `List.tsx`, define an **interface** for the props that includes the `products` array.
- In `List.tsx`, use the `<ul>` element to map through the array and pass each product to the `Item.tsx` component as a prop.
- In `Item.tsx`, define an **interface** for the props to type the individual product object.
- Render the received product properties inside the `<li>` element.
- Start the app with `npm run dev` from the `block01/ex01` folder

> ⚠️ Make sure there are no errors or warnings in the terminal or browser console!
> 
- Test the app with `npx vitest` from the `block01/ex01` folder (there is a test in App.test.tsx)

🏆