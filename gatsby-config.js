module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Мунарбек Резюме",
        description: "Мунарбек Карымшаков резюме",
        author: "Мунарбек",
        siteLanguage: "кг",
        image: "src/data/images/logo/logo.png",
        titleTemplate: "Munar",
        socials: [
            {
                id: 1,
                title: "facebook",
                path: "https://www.facebook.com/profile.php?id=100048448174646",
                icon: "Facebook",
            },
            {
                id: 2,
                title: "instagram",
                path: "https://www.instagram.com/nurislam_symbatov/",
                icon: "Instagram",
            },
            {
                id: 3,
                title: "Github",
                path: "https://github.com/munarrr",
                icon: "GitHub",
            },
        ],
        contact: {
            телефон: "+996 551 40 80 64",
            email: "karymshakovmunar@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
