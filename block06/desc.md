## Exercise 1 / Initiation to Navigation ( function )

### Recommended version:

- Recreate your second cloning project from HTML/CSS week with a website divided into several pages but now use react router for the navigation (no test prebuilt)

### Standard version:

- Create a brand new React application ex01" in the 03_react/block06 folder.

- With React Router create a navigation menu with at least 4 pages: Home, About, Contact and Profile

- Render an `h1` with the name of the page for each component just to distinguish which one is being rendered.
  - I am Home
  - I am About
  - I am Contact
  - I am Profile

- By clicking on the corresponding item in the navigation menu you should be able to switch between these 4 views.

Example:
![](https://barcelonacodeschool.com/files/pics/navbar_1.png)
![](https://barcelonacodeschool.com/files/pics/navbar_2.png)
![](https://barcelonacodeschool.com/files/pics/navbar_3.png)
![](https://barcelonacodeschool.com/files/pics/navbar_4.png)

**_Your solution goes to the current folder_**

## Exercise 2 / passing data, applying logic, nested navigation

Create a navigation menu with at least 4 pages, Home, About, Contact and Profile

- By clicking on the corresponding item in the navigation menu you should be able to switch between these 4 views.

- User should be able to access Profile page only if state vasriable `isLoggedIn` declared in App.js has a value `true` (hint: use Navigate component)

- Profile page should get `userId` via params declared in App.js and render it in hte browser

- About page should have button to navigate one page back in browser memory-stack

- Contact page should contain nested navigation to 3 different components for different company departments: HR (/contact/hr), Marketing(/contact/marketing), Sales(/contact/sales)