<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# React AI Image Editor

A powerful and intuitive web-based image editor built with React, Tailwind CSS, and Google Gemini API.

View your app in AI Studio: https://ai.studio/apps/drive/1LajvK_ykVrUOk-bTOhVMwhgvuWvfxk34

## Features

- **Basic Tools**: Crop, Rotate, Resize, Grayscale.
- **Advanced Tools**: 
  - **Cutout**: Remove backgrounds automatically using AI or manually by color.
  - **AI Edit**: Modify images using text prompts (Generative AI).
  - **Collage**: Create photo grids and layouts.
  - **Adjust**: Fine-tune Hue, Saturation, and Brightness.
- **Theming**: Customizable UI colors.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env` or `.env.local` file:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. Run the app:
   `npm run dev`

## Deployment (How to share with others)

The easiest way to deploy this app is using **Vercel**.

1. Push this code to a Git repository (GitHub, GitLab, etc.).
2. Go to [Vercel](https://vercel.com) and import your project.
3. **Important**: In the Vercel project settings (Environment Variables), add your API Key:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: `Your actual API Key`
4. Click **Deploy**.

Vercel will build the project and provide you with a public URL (e.g., `https://your-image-editor.vercel.app`) that you can share with others.
