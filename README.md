# Technical Details

API Key:
Change `.env-example` file to `.env` and assign `API_Key` to your OpenAI API key.

Run backend: 
```
node index.js
```

Run frontend:
```
npm run start
```

<hr />

# Project Summary

## Introduction
Cooking can often be a daunting task, especially for beginners. With the multitude of ingredients, specific techniques, and the time management it requires, the journey from recipe to dish can often feel overwhelming. Enter Gourm.ai, an AI-powered cooking assistant designed to simplify and enhance the art of cooking. Developed during the CalHacks x UC Berkeley AI Hackathon, Gourm.ai is aimed at both beginner and expert chefs, ensuring an easy, enjoyable, and seamless culinary experience.

## Inspiration
Our team is comprised of food enthusiasts who love to cook, but often struggled with various aspects of it. We found that while there are several recipes available online, following them can sometimes be tricky due to the need for multitasking, lack of real-time assistance, and problems of recipe adaptation to personal dietary needs. Realizing that our struggles were shared by many, we decided to leverage the power of AI to create Gourm.ai, an intuitive and adaptive assistant that can help you cook and learn simultaneously.

## What it does
Gourm.ai offers three primary features:

1) **Recipe Recommendations:** Based on user preferences, dietary restrictions, and ingredients available at hand, Gourm.ai recommends the perfect recipes that fit all the requirements. It uses machine learning to continually refine its suggestions according to user feedback.
3) **Step-by-Step Guidance:** Gourm.ai provides real-time, step-by-step instructions to guide you through the cooking process. It allows hands-free interaction, so you can focus on cooking without having to worry about static instructions.
2) **Adaptive Learning:** Gourm.ai learns your preferences over time, including your favorite cuisines, cooking techniques, and dietary preferences. This allows it to offer increasingly personalized assistance.

## How we built it
Gourm.ai leverages natural language processing (NLP) and machine learning (ML) . We used the GPT-4 model for NLP tasks, enabling Gourm.ai to understand and respond to user's queries. For the recommendation system, we used a combination of collaborative and content-based filtering methods. We utilized Node for the backend tasks. The frontend was designed using React, providing a clean and user-friendly interface.

## Challenges we ran into
One of the significant challenges we faced was accurately parsing and understanding the wide variety of ways cooking instructions can be written. Another challenge was limiting the ChatGPT “hallucinations” and making sure the data it was generating is accurate and factual.

## Accomplishments
We're proud of creating a comprehensive AI system that effectively bridges the gap between a novice and an expert cook. The real-time guidance system is something we're particularly excited about as it allows for a hands-free cooking experience and allows for a recipe that changes based on the user’s cooking experience.

## What we learned
This project has been a valuable lesson in understanding the complexities and subtleties of human language, especially within a specific domain like cooking. We also gained significant experience in integrating different AI components (NLP, ML) into a unified and functional product.

## What's next for Gourm.ai
We plan to expand Gourm.ai capabilities to include video tutorials, compatibility with IoT devices for real-time cooking assistance, and a social platform for users to share their culinary creations and experiences. We also envision integrating a smart shopping feature that can recommend and order ingredients based on the selected recipe. We also plan on integrating a speech feature to further improve the hands-free capabilities and will use Hume AI to add an extra layer of empathy with this feature.

With Gourm.ai, we believe we have taken a significant leap towards making cooking more accessible, enjoyable, and less of a chore.
