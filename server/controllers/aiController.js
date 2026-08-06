const Groq = require("groq-sdk");
const Menu = require("../models/Menu");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const recommendFood = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Please ask a question.",
      });
    }

    const menu = await Menu.find({ isAvailable: true });

    if (menu.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Menu is empty.",
      });
    }

    const menuText = menu
      .map(
        (item) => `
Dish: ${item.name}
Category: ${item.category}
Price: ₹${item.price}
Description: ${item.description}
`
      )
      .join("\n");

    const prompt = `
You are the AI Assistant of "Shree Mauli Pure Veg Restaurant".

Restaurant Menu:

${menuText}

Customer Question:

${question}

Instructions:

• Recommend ONLY dishes from the menu.
• Mention prices.
• Recommend meal combinations.
• Respect customer's budget.
• Recommend spicy, Jain, kids, family meals if requested.
• If dish isn't available, politely recommend similar dishes.
• Keep response below 150 words.
• Answer like a friendly restaurant waiter.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert restaurant assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    res.json({
      success: true,
      answer: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  recommendFood,
};