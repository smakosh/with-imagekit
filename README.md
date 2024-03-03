⚠️ If you're using Next.js 14 and want to do things with Server Actions, follow [here](https://dev.to/smakosh/how-to-upload-files-to-imagekit-using-nextjs-server-actions-53a)

# Imagekit example

- This example uses Imagekit for uploading images using Next API routes and displays the images using Next image

## What you do need to setup

1- Create an account on [Imagekit](https://imagekit.io) and grab your:

1. Private key
2. Public key
3. Endpoint url
4. Open `next.config.js` and place your path id on `path: "https://ik.imagekit.io/<HERE>/"`

2- Setup your env variables by running

```bash
Run cp .env.local.template .env.local
```
