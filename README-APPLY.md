# Mayank Portfolio — V4 Balanced Motion

This version fixes the three issues from V3:

1. **Dark + light mode are both first-class.**
   - Dark mode is not pitch black; it uses a deep slate background with clearer text contrast.
   - Light mode is warm stone / paper, not pure white, so it does not feel like somebody switched on a floodlight.
   - `ModeToggle.tsx` is back in the navigation on desktop and mobile.

2. **The whole page feels smoother.**
   - One fixed background continues through Hero, About, Experience, Skills, Projects and Contact.
   - Scroll parallax is spring-smoothed.
   - The background uses only three slow flowing curves and a small number of nodes.
   - Heavy moving blur layers, hover scans and repeated backdrop filters were removed.

3. **The site is less robotic.**
   - Removed labels such as `SYSTEM / SCROLL`, `operating context`, `message payload`, `04 signals`, etc.
   - Removed the profile scanner and corner brackets.
   - Section language is now human/editorial: About me, Experience, What I work with, Selected work, Let's talk.
   - The data-system identity remains in the background and hero workflow, where it actually makes sense.

## Replace these files

- `index.html`
- `src/index.css`
- `src/pages/Index.tsx`
- `src/components/ModeToggle.tsx`
- `src/components/Navigation.tsx`
- `src/components/PageDataBackground.tsx` (new if not already present)
- `src/components/HeroDataBackground.tsx` (new if not already present)
- `src/components/HeroSection.tsx`
- `src/components/StatsSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/SkillsSection.tsx`
- `src/components/PortfolioSection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`

Your existing `theme-provider.tsx` and `App.tsx` already provide theme support, so they do not need to change.

## Dependency

If Motion is not installed yet:

```bash
npm install motion
```

## Run

```bash
npm run build
npm run dev
```

Then push:

```bash
git add .
git commit -m "Refine portfolio themes and motion"
git push origin main
```
