export const initialEditorValue = `---
import Tour from '../components/Tour.astro';
let title = 'My Astro Site';
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>{title}</title>
    <link rel="stylesheet" href="/style/global.css">
    <style>
        header {
            display: flex;
            flex-direction: column;
        }
    </style>
</head>
<body>
    <main>
        <Tour />
        <ReactCounter client:visible />
    </main>
</body>
</html>
`;
