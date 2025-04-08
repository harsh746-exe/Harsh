<<<<<<< HEAD
# Harsh Dwivedi's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI/UX with a clean design
- 🌗 Dark/Light mode support
- 🎮 Interactive elements (Snake & Pacman games)
- 📱 Fully responsive design
- 🚀 Optimized performance
- 🖼️ Image optimization with Next.js
- ⚡ Fast page loads with dynamic imports
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── public/
│   └── assets/
│       ├── favicon/     # Favicon files
│       ├── images/      # Static images
│       ├── projects/    # Project screenshots
│       └── resume/      # Resume PDF
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── context/        # React context providers
│   └── types/          # TypeScript types
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/harsh746-exe/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

## Running Production Build

```bash
npm start
```

## License

This project is open source and available under the MIT License.

## Contact

- Email: eharshdwivedi@gmail.com
- LinkedIn: [Harsh Dwivedi](https://www.linkedin.com/in/harsh-dwivedi-854b39202/)
- GitHub: [harsh746-exe](https://github.com/harsh746-exe)
=======
# portfolio-template

Welcome to the Portfolio Template repository! This template provides a simple starting point for students to create their own personal portfolio websites using [Jekyll](https://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/). Follow the instructions below to fork the repository, customize it, and publish your site. This repo is just a starting place. Feel free to make your own modifications, or use different tooling entirely for your own portfolio site.

## Prerequisites

Before you begin, ensure you have the following:

- A GitHub account
- Basic knowledge of Git and GitHub
- Ruby and Bundler installed on your local machine

## Getting Started

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this page to create a copy of this repository in your GitHub account.
   - Remove "`-template`" from your new repo name so that the repo name is just "`portfolio`", or whatever you'd like to name it.

2. **Enable GitHub Actions **
   - Browse to your forked repository on GitHub.
   - Navigate to the `Actions` tab.
   - Confirm that you'd like to use the GitHub Actions copied over from the fork defined in the `.github/workflows` directory.

3. **Clone Your Fork**
   - Open your terminal and run the following command, replacing `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your chosen repo name:
     ```
     git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     ```

4. **Navigate to the Project Directory**
   ```
   cd YOUR_REPO_NAME
   ```

5. **Install Dependencies**
   - Run the following command to install the required gems:
     ```
     bundle install
     ```

## Customizing Your Site

1. **Modify the Configuration Files**
   - Open the `_config.yml` file in your favorite text editor.
   - Update the fields with your own personal info.

2. **Add Your Content**
   - You can add your own new sections in the `_data` directory, and/or modify the existing ones.


3. **Run the Site Locally**
   - Use the following command to serve your site locally and see the changes:
     ```bash
     jekyll serve
     ```

## Deploying Your Site

1. **Push Your Changes to GitHub**
   - After making your changes, commit and push them to your forked repository:
   ```bash
    git add .
    git commit -m "Customize site"
    git push origin main
    ```

2. **Visit Your Site**
   - Your site should be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`.
   - You can check your GitHub Pages status and settings under `Settings > Pages` in your repo.

## (Optional) Choosing a Different Jekyll Theme

By default this repo uses this theme: [https://github.com/byanko55/jekyll-professional-resume](https://github.com/byanko55/jekyll-professional-resume)

If you want to use a different Jekyll theme, follow these steps:

1. **Find a Jekyll Theme**
   - Browse [Jekyll Themes](http://jekyllthemes.org/) or [GitHub Pages Themes](https://pages.github.com/themes/) to find a theme you like.

2. **Update the Gemfile**
   - Open the `Gemfile` and replace the existing theme with your chosen theme. For example:
     ```
     gem "your-chosen-theme"
     ```

3. **Update the Configuration**
   - Modify the `_config.yml` file to include the new theme name

## (Optional) Using a CNAME File for Custom Domain

If you want to use a custom domain for your GitHub Pages site rather than using the free github.io domain, follow these steps:

1. **Purchase a Domain**
   - Buy a domain from a domain registrar of your choice.

2. **Create a CNAME File**
   - In the root of your repository, create a file named `CNAME` (no file extension).
   - Inside the `CNAME` file, add your custom domain (e.g., www.yourcustomdomain.com).

3. **Configure DNS Settings**
   - Go to your domain registrar's website and configure the DNS settings to point to GitHub Pages. You will typically need to set up an A record pointing to GitHub's IP addresses and/or a CNAME record pointing to your GitHub Pages URL. See the [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for more info.

4. **Update GitHub Pages Settings**
   - Go to your repository on GitHub.
   - Navigate to `Settings` > `Pages`.
   - Ensure your custom domain is listed under "Custom domain."

5. **Wait for DNS Propagation**
   - It may take some time for the DNS changes to propagate. Once complete, your site should be accessible via your custom domain.
>>>>>>> 53a442ba5de92e27c471bfa13a702026a7e9d53c
