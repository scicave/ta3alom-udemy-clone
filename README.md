# Udemy clone

Udemy front-end clone with back-end as microservices.

## Scripts

```bash
> yarn dev        # start webpack server
> yarn prod       # build in production mode
> yarn storybook  # start-storybook
```

## Notes

### CSS modules

We are using webpack@5 as the bundler for this project, the SCSS-CSS loader is by default enables what so called ***CSS modules***. For example I use a CSS module for the [Button component](https://github.com/scicave/ta3alom-frontend/tree/main/src/components/Button). The reason to notice this type of CSS file, the CSS modules, is to make the somponent classes scoped only to the Button and not to the global scope (the whole page). This reduces the unexpected errors and *"Why it is not working?!"*. The second reason is that it is cool ✨️.

The SCSS-CSS loader is use for storybook as well to make the system coherent.

### Git hooks

One of the reason to use git hooks in this project is that we are using hooks in React as well :D

Git hooks are hooked using *husky*. When you `git commit`, the *pre-commit* hook will start its job to *prettier* the stuff you made, *eslint* them as well, using *lint-staged*.

~~~
✔ Preparing...
✔ Running tasks...
✔ Applying modifications...
✔ Cleaning up...
~~~~

### 

## Tasks

Tasks are assigned to developers as issues, they are organized also in [Pages project](https://github.com/scicave/ta3alom-frontend/projects/3).

## Pages

- [ ] __All pages__
  - [ ] Header (search & cart & wishlist & user icon)
  - [ ] ... page content
  - [ ] Footer 
- [ ] Login ⬅️ ***(@KhaledFarghaly11, @khaledmontaser20)***
  - [ ] Login with
  - [ ] Input fields for email and pass.
- [ ] sign up 📝 ***(@KhaledFarghaly11, @khaledmontaser20)***
  - [ ] Input fields.
- [ ] [Home page 🏠](https://www.udemy.com) ***(@MuhammadSawalhy)***
  - [ ] Intro
  - [ ] My learning (with slider component)
  - [ ] Section for other courses (stack of different types of courses)
- [ ] Cart page (states: auth) ***(@KhaledFarghaly11, @khaledmontaser20)***
  - [ ] See what is in cart (remove, payment)
  - [ ] Wish list (add to cart, remove from wish list)
  - [ ] Slider of courses (add to cart or wish list)
- [ ] [My courses](https://www.udemy.com/home/my-courses) ***(@muhammed-blib)***
  - [ ] Tabs
  - [ ] Sort and search
  - [ ] Pagination (Another course component, but we will use the same couse component)
- [-] Course learning page
  - [ ] Video player element
  - [ ] Resources sidebar
  - [ ] Course details
  - [ ] Instructor info

## Postponed pages

- [ ] Course details (states: enrolled, not enrolled)
  - [ ] Preview video
  - [ ] Title & description 📝 & rating 🌟 & some other details & price 💸 💵
  - [ ] Add to cart & wish list & share
  - [ ] What you'll learn
  - [ ] Resources
  - [ ] Requirements
  - [ ] Full description
  - [ ] Instructor details
  - [ ] Rating
- [ ] [Instructor Dashboard](https://www.udemy.com/instructor)
  - [ ] Create cources form
  - [ ] Fill the course details and content
  - [ ] Other tabs for announcements and messeges

## Components

1. Slider component `under development >> _Muhammad Samir_`
    - Home page
    - Cart page
2. Hover-Popup component
    - Home page
3. Course card component 🗂️
    - Home page
    - My courses page
    - Cart page
4. Course in wish list component
    - Cart page
5. Pagination component 🔢
    - My courses page
6. Header and footer
    - ***ALL PAGES***
7. Resources 📚
    - Course details page
8. Sidebar Resources 📚
    - Course learning page
9. Video player 🎬
    - Course details page
    - Course learning page

## License

MIT
