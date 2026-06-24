# Isn't It Alanis?

The Music of Alanis Morissette — a Long Island, NY live tribute band fronted by Sarah Glen.

Public site: [rafetangorra-tech.github.io/isntitalanis](https://rafetangorra-tech.github.io/isntitalanis)
Target domain (not yet purchased): `isntitalanistribute.com`

## Stack
- Astro 5 + Tailwind 4 (via `@tailwindcss/vite`)
- TypeScript strict
- Static output deployed via GitHub Actions to GitHub Pages

## Develop
```sh
npm install
npm run dev      # http://localhost:4321/isntitalanis/
npm run build    # static build into ./dist
```

## Deploy
- Pushes to `main` build and deploy via `.github/workflows/deploy.yml`.
- `astro.config.mjs` switches based on env:
  - default (no env vars) → `rafetangorra-tech.github.io/isntitalanis`
  - `USE_BASE_PATH=false` + `PUBLIC_SITE_URL=https://isntitalanistribute.com` → custom domain (when wired)

## Asset workflow
- Originals live in `assets/` (untouched).
- Web-ready copies live in `public/img/` (downsized via `sips`).
- To swap a member photo:
  ```sh
  sips -s format jpeg -s formatOptions 85 --resampleWidth 1200 \
    assets/photos/members/NAME.jpg --out public/img/members/NAME.jpg
  ```

## Pages
- `/` — hero, about, differentiators, videos, set list teaser, booking CTA
- `/band` — six member cards
- `/songs` — current set list (13 songs)
- `/booking` — email + socials + what-you-get

## Contact
- Booking: `isnt.it.alanis.tribute@gmail.com`
- Instagram: [@isnt_it_alanis](https://www.instagram.com/isnt_it_alanis)
