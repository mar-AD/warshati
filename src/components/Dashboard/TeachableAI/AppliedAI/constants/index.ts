export const app_info = {
  title: "Teachable AI Platform",
  description:
    "Teachable AI is a platform that allows you to create and train your own AI models, Train a computer to recognize your own images, sounds, & poses.",
  auth: "Pubsilon",
};

// Make sure not to miss the order of the nav_link.
export const nav_link = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about",
    url: "#",
  },
  {
    name: "train",
    url: "/train",
  },
  {
    name: "contact",
    url: "#",
  },
  {
    name: "faq",
    url: "#",
  },
];

export const footer_link = [
  {
    name: "about",
    url: "#",
  },
  {
    name: "privacy",
    url: "#",
  },
  {
    name: "licensing",
    url: "#",
  },
  {
    name: "terms",
    url: "#",
  },
  {
    name: "contact",
    url: "#",
  },
];

export const project_data = [
  {
    title: "finger_labeling.title",
    description: "finger_labeling.description",
    image: "/assets/images/hand/hand_cover.jpg",
    image_alt: "Hand Recognition | Finger Labeling",
    url: "/train/hand-recognition",
    implemented: true,
  },
  {
    title: "image_classification.title",
    description: "image_classification.description",
    image: "/assets/images/classification/cover.jpg",
    image_alt: "Image Classification",
    url: "/train/classification",
    implemented: true,
  },
  {
    title: "shape_classification.title",
    description: "shape_classification.description",
    image: "/assets/images/shape_classification/cover.png",
    image_alt: "Shape Classification",
    url: "/train/shape-classification",
    implemented: true,
  },
  {
    title: "ai_chatbot.title",
    description: "ai_chatbot.description",
    image: "/assets/images/ai_chatbot/cover.png",
    image_alt: "AI Chatbot",
    url: "/train/ai-chatbot",
    implemented: true,
  },
  {
    title: "object_detection.title",
    description: "object_detection.description",
    image: "/object_detection_cover.png",
    image_alt: "Object Detection",
    url: "/train/object-detection",
    implemented: false,
  },
];

export const batch_sizes = [
  {
    key: 16,
    label: "16",
  },
  {
    key: 32,
    label: "32",
  },
  {
    key: 64,
    label: "64",
  },
  {
    key: 128,
    label: "128",
  },
  {
    key: 256,
    label: "256",
  },
  {
    key: 512,
    label: "512",
  },
];

