export const initialEditorValue = `
---
import Tour from '../components/Tour.astro';
let title = 'My Astro Site';
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{title}</title>

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <link rel="stylesheet" href="/style/global.css">
    <link rel="stylesheet" href="/style/home.css">

    <style>
        header {
            display: flex;
            flex-direction: column;
            gap: 1em;
            max-width: min(100%, 68ch);
        }
    </style>
</head>
<body>
    <main>
        <header>
            <div>
                <img width="60" height="80" src="/assets/logo.svg" alt="Astro logo">
                <h1>Welcome to <a href="https://astro.build/">Astro</a></h1>
            </div>
        </header>

        <Tour />

        <!--
           - You can also use imported framework components directly in your markup!
           -
           - Note: by default, these components are NOT interactive on the client.
           - The :visible directive tells Astro to make it interactive.
           -
           - See https://docs.astro.build/core-concepts/component-hydration/
           -->
        <ReactCounter client:visible />
    </main>
</body>
</html>
`;
