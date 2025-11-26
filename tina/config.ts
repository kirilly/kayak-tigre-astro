import { defineConfig } from "tinacms";

const locales = ["en", "es", "ru"];

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // Site Settings (Global)
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "global",
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true,
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Info",
            fields: [
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "whatsapp", label: "WhatsApp" },
              { type: "string", name: "instagram", label: "Instagram URL" },
            ],
          },
          {
            type: "object",
            name: "heroSlides",
            label: "Hero Carousel Slides",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Slide" }),
            },
            fields: [
              { type: "image", name: "image", label: "Background Image", required: true },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "buttonLink", label: "Button Link" },
            ],
          },
        ],
      },

      // Services/Tours Collection
      {
        name: "service",
        label: "Services / Tours",
        path: "content/services",
        format: "mdx",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return values?.slug?.toLowerCase().replace(/ /g, "-") || "";
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "locale",
            label: "Language",
            required: true,
            options: locales.map((l) => ({ value: l, label: l.toUpperCase() })),
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "description",
            label: "Short Description",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "object",
            name: "gallery",
            label: "Image Gallery",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Image", required: true },
              { type: "string", name: "alt", label: "Alt Text" },
            ],
          },
          {
            type: "string",
            name: "duration",
            label: "Duration (e.g., '8 hours', 'Full day')",
          },
          {
            type: "object",
            name: "price",
            label: "Pricing",
            fields: [
              { type: "number", name: "adult", label: "Adult Price" },
              { type: "number", name: "child", label: "Child Price" },
              { type: "string", name: "currency", label: "Currency", options: ["USD", "ARS", "EUR"] },
            ],
          },
          {
            type: "number",
            name: "minAge",
            label: "Minimum Age",
          },
          {
            type: "number",
            name: "maxGroupSize",
            label: "Max Group Size",
          },
          {
            type: "string",
            name: "schedule",
            label: "Schedule (e.g., '10:00 - 19:00')",
          },
          {
            type: "string",
            name: "location",
            label: "Meeting Location",
          },
          {
            type: "string",
            name: "included",
            label: "What's Included",
            list: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Full Description",
            isBody: true,
          },
        ],
      },

      // Blog Posts Collection
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "locale",
            label: "Language",
            required: true,
            options: locales.map((l) => ({ value: l, label: l.toUpperCase() })),
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },

      // Pages Collection
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "locale",
            label: "Language",
            required: true,
            options: locales.map((l) => ({ value: l, label: l.toUpperCase() })),
          },
          {
            type: "string",
            name: "slug",
            label: "Page Slug",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            ui: { component: "textarea" },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
