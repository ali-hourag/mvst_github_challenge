# <a href="https://mvst-github-challenge.vercel.app/">GitHub Challenge</a> APP 👽📱
<br/>
<div align="center">
   <img src="https://github.com/ali-hourag/mvst_github_challenge/assets/131694498/0559d725-e275-4c84-8a27-ba239dcd67e1" width="900"/>
   <img src="https://github.com/ali-hourag/mvst_github_challenge/assets/131694498/a524ea9f-c903-4d91-9402-24f66370a48e" width="250"/>
</div>
<br/>

## Table of Content:

- [About](#about)
- [Future implementations](#future-implementations)
- [Technologies](#technologies)
- [Setup](#setup)

## About
This project aims to  display the repositories and allow the user to filter through the repositories by name using a search bar.
I have used **GraphQL** and **Apollo Client** for the first time. I sent the GraphQL **GitHub API** different queries so that I could get the
information I needed at each time. It was amazed by the efficiency of GraphQL and how simple it is once you understand it.
Aside from this, in this project you can find:
<br/>
* A **React application** using **TypeScript**.
* Great attention to **UX/UI**, **components interactions**, **best practices**, clean, maintainable and scalable code by **modularizing** and using **React contexts** and **reducers** as well as **hooks** such as useState, useEffect, useLocation and useParams, and **custom hooks**.
* Completely **responsive**. Available at any device!
* **Dynamic** **searchbar** and **filters**.
* Use of **CSS modules** for **code legibility**.
* Usage of **Git** for versioning.
* One simple Unit Test has been done with **Jest** and **React-Testing-Library**.

## Future implementations
* In the future I am looking forward to implementing another searchbar so that any user can see his/her repositories, search and filter them. Since at the moment, the username and token is set through the code as the challenge said.
* Being able to access repositories in which I am not the owner and I contributed.
* Implement more testing.
* Implement storybooks so that components can be developed isolated without having to worry about dependencies and other requirements.

## Technologies
- React
- CSS
- TypeScript
- QraphQL
- Vercel
- Jest
- React-Testing-Library


## Setup

Project is deployed (<a href="https://mvst-github-challenge.vercel.app/">GitHub challenge</a>), but if you want to run it locally:

```
git clone https://github.com/ali-hourag/mvst_github_challenge
```

```
npm install
```

```
add .env file and enter this variable -> VITE_GITHUB_TOKEN
This token is needed to have permission to make queries to the GraphQL API of GitHub.
You can get it in your GitHub settings -> Developer settings -> personal access tokens -> tokens(classic)
Be careful, make sure you store it if you don't have it yet!
```

```
npm npm run dev -> http://localhost:5173/
```


## Try <a href="https://mvst-github-challenge.vercel.app/">GitHub Repo</a> app!📱
