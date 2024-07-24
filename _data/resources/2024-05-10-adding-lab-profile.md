---
template: BlogPost
path: /resources/adding-lab-profile
date: 2024-05-10T13:00:00.137Z
title: Adding Your Profile to the Lab Webpage
titlevn: Thêm profile của bạn vào trang web của Lab
thumbnail: ""
metaDescription: How to add and customize your profile on the lab webpage
---

We host our lab website on GitHub at [github.com/rise-bkai/rise-bkai.github.io](https://github.com/rise-bkai/rise-bkai.github.io). The website is built using the [GatsbyJS](https://www.gatsbyjs.com/) framework.

### How to Add Your Profile

1. **Fork and Clone the Repository:**
   - Fork the [repository](https://github.com/rise-bkai/rise-bkai.github.io).
   - Clone it to your local environment.

2. **Add Your Profile:**
   - Create a markdown file under `_data/people/` named `<your_profile.md>`.
   - Add your profile image to `static/assets/people/` as `<your_photo.png>`.

   Example profile markdown file:

   ```markdown
   ---
   name: "Your Name"
   title: "Your Title"
   organization: "Your Organization"
   photo: "assets/people/your_photo.png"
   description: "A brief description about you."
   ---

   More information about you

3. **Make a Pull Request**
