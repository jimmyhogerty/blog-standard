import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi } from "openai";

export default withApiAuthRequired(async function handler(req, res) {
  const { topic, keywords } = req.body;
  try {
    const config = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(config);

    const postContentResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: "You are a blog post generator",
        },
        {
          role: "user",
          content: `Write a long and detailed SEO-friendly blog post ${topic}, that targets the following comma-separated keywords: ${keywords}.
          The content should be formatted in SEO-friendly HTML.
          The response must also include appropriate HTML title,
          limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, li, ol, ul, i.`,
        },
      ],
    });

    const postContent =
      postContentResponse.data.choices[0]?.message?.content
        .split("\n")
        .join("") || "";

    const titleResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: "You are a blog post generator",
        },
        {
          role: "user",
          content: `Write a long and detailed SEO-friendly blog post ${topic}, that targets the following comma-separated keywords: ${keywords}.
          The content should be formatted in SEO-friendly HTML.
          The response must also include appropriate HTML title,
          limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, li, ol, ul, i.`,
        },
        {
          role: "assistant",
          content: postContent,
        },
        {
          role: "user",
          content:
            "Generate appropriate title tag text for the above blog post",
        },
      ],
    });

    const metaDescriptionResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: "You are a blog post generator",
        },
        {
          role: "user",
          content: `Write a long and detailed SEO-friendly blog post ${topic}, that targets the following comma-separated keywords: ${keywords}.
          The content should be formatted in SEO-friendly HTML.
          The response must also include appropriate HTML title,
          limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, li, ol, ul, i.`,
        },
        {
          role: "assistant",
          content: postContent,
        },
        {
          role: "user",
          content:
            "Generate SEO-friendly meta description content for the above blog post",
        },
      ],
    });

    const title = titleResponse.data.choices[0]?.message?.content || "";
    console.log("title: ", title);
    const metaDescription =
      metaDescriptionResponse.data.choices[0]?.message?.content || "";

    res.status(200).json({
      post: {
        postContent,
        title,
        metaDescription,
      },
    });
  } catch (e) {
    console.log(e);
  }
});
