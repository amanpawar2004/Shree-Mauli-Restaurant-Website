
const Groq = require("groq-sdk");
const Menu = require("../models/Menu");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const recommendFood = async (req, res) => {
  try {
    const { question } = req.body;

    // Validate question
    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please ask a question.",
      });
    }

    // Get available menu items
    const menu = await Menu.find({ isAvailable: true });

    if (menu.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Menu is currently empty.",
      });
    }

    // Convert menu into AI-readable text
    const menuText = menu
      .map(
        (item) => `
Dish: ${item.name}
Category: ${item.category}
Price: ₹${item.price}
Description: ${item.description || "No description available"}
`
      )
      .join("\n");

    // Professional AI prompt
    const prompt = `
You are the professional AI Food Assistant of "Shree Mauli Pure Veg Restaurant".

Your job is to help customers choose food from the restaurant menu.

========================
RESTAURANT MENU
========================

${menuText}

========================
CUSTOMER QUESTION
========================

${question}

========================
IMPORTANT RULES
========================

1. Recommend ONLY dishes that exist in the restaurant menu above.
2. NEVER invent dishes, prices, ingredients, categories, or availability.
3. Always mention the exact price from the menu.
4. Respect the customer's budget.
5. If the customer asks for spicy food, recommend suitable dishes from the menu.
6. If the customer asks for Jain food, recommend suitable Jain options ONLY if they are available in the menu.
7. If the customer asks for kids, family, lunch, dinner, or couples, create suitable combinations ONLY from available menu items.
8. If the requested dish is unavailable, politely recommend the closest available alternatives.
9. Keep responses concise and useful.
10. Avoid long paragraphs.
11. Use headings, numbered lists, and bullet points.
12. Use emojis only when they improve readability.
13. Always provide a short final recommendation.
14. Do not mention that you are an AI language model.
15. Answer like a professional, friendly restaurant waiter.
16. Never recommend anything outside the provided menu.

========================
RESPONSE STYLE
========================

For multiple recommendations, use this structure:

🍽️ **Top Recommendations**

**1. Dish Name — ₹Price**
- Category: Category
- Why: Short reason

**2. Dish Name — ₹Price**
- Category: Category
- Why: Short reason

🍴 **Suggested Combo**

- Dish — ₹Price
- Dish — ₹Price
- Dish — ₹Price
- **Total: ₹XXX**

⭐ **Our Recommendation**
👉 Short personalized recommendation.

For a budget question:
- Stay within the customer's budget.
- Show the total price.
- Prefer 2–3 suitable options if available.

For a single-dish question:
- Give a direct answer.
- Mention price and a short description.

For unavailable requests:
- Clearly say the requested item is not currently available.
- Suggest 1–2 similar available dishes.

For casual greetings:
- Respond warmly and invite the customer to ask about the menu.

Keep the response under 180 words.
`;

    // Ask Groq AI
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content:
            "You are the professional food assistant for Shree Mauli Pure Veg Restaurant. Always use only the provided menu data.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    });

    const answer = completion?.choices?.[0]?.message?.content;

    if (!answer) {
      return res.status(500).json({
        success: false,
        message: "AI did not return a response.",
      });
    }

    // Send response
    res.status(200).json({
      success: true,
      answer: answer.trim(),
    });
  } catch (error) {
    console.error("❌ AI Assistant Error:", error);

    res.status(500).json({
      success: false,
      message:
        error?.message || "AI Assistant is currently unavailable.",
    });
  }
};

module.exports = {
  recommendFood,
};
