const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllNews = async (call,callback) => {
    const news = await prisma.news.findMany({});
    callback(null, { news });
}

exports.createNews = async (call,callback) => {
    const { title, body } = call.request;
    const news = await prisma.news.create({
      data: {
        title,
        body,
      },
    });
    callback(null, news);
}