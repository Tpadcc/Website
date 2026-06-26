# My First Website

A beginner-friendly static website built with HTML, CSS, and JavaScript, ready for GitHub Pages.

## Features
- Responsive homepage.
- Navigation menu.
- Contact form with basic validation.
- Mobile-friendly layout.

## Local setup
1. Open the folder in VS Code.
2. Open `index.html` in a browser, or use the Live Server extension.

## Git setup
```bash
git init
git add .
git commit -m "Initial website setup"
```

## GitHub Pages deployment
1. Create a new repository on GitHub.
2. Push your code:
```bash
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```
3. In GitHub, go to **Settings > Pages**.
4. Set **Source** to `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Save and wait for the published URL.

## Validation checklist
- Test the navigation links.
- Resize the browser to check mobile layout.
- Submit the contact form with valid and invalid inputs.