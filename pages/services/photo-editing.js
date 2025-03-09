import React from "react";
import { NextSeo } from 'next-seo';

export default function PhotoEditingServicesPage() {
  const techniques = [
    {
      title: "Adding Patterns",
      description: "Learn how to add seamless patterns to your images to enhance the background or create a unique texture.",
      imageBefore: "../images/Adding Patterns.jpg",
      imageAfter: "../images/Adding Patterns After.jpg",
      category: "creative"
    },
    {
      title: "Perfect Shadow",
      description: "Create realistic and soft shadows for objects to make them look naturally integrated into the scene.",
      imageBefore: "../images/Perfect Shadow.jpg",
      imageAfter: "../images/Perfect Shadow After.jpg",
      category: "product"
    },
    {
      title: "Double Exposure",
      description: "Combine two images to create a surreal double exposure effect by blending them creatively.",
      imageBefore: "../images/doubleExposure.jpg",
      imageAfter: "../images/doubleExposure.jpg",
      category: "creative"
    },
    {
      title: "Cut hair",
      description: "Learn to seamlessly cut hair in images for perfect edits.",
      imageBefore: "../images/Cut Hair.jpg",
      imageAfter: "../images/CutHairAfter.jpg",
    },
    {
      title: "Match colors",
      description: "Harmonize colors in an image for a consistent look.",
      imageBefore: "../images/matchColors.jpg",
      imageAfter: "../images/MatchColorsAfter.jpg",
    },
    {
      title: "Place anything in perspective",
      description: "Adjust objects to fit naturally into a perspective view.",
      imageBefore: "../images/placePerspective.jpg",
      imageAfter: "../images/PlacePerspectiveAfter.jpg",
    },
    {
      title: "Place image in text",
      description: "Create unique text effects by embedding images within text.",
      imageBefore: "../images/imageText.jpg",
      imageAfter: "../images/PlaceImageTextAfter.jpg",
    },
    {
      title: "Remove anything in a photo",
      description: "Effortlessly erase unwanted objects from an image.",
      imageBefore: "../images/removeAnythingBefore.jpg",
      imageAfter: "../images/removeAnythingAfter.jpg",
    },
    {
      title: "Do simple composite",
      description: "Combine elements from multiple images for unique results.",
      imageBefore: "../images/beforeSimpleComposite.jpg",
      imageAfter: "../images/afterSimpleComposite.jpg",
    },
    {
      title: "Stretch images",
      description: "Extend parts of an image while maintaining proportions.",
      imageBefore: "../images/AfterStretch.jpg",
      imageAfter: "../images/BeforeStretch.jpg",
    },
    {
      title: "Add shining to an image",
      description: "Make objects in the image shine with advanced lighting.",
      imageBefore: "../images/shine.jpg",
      imageAfter: "../images/AddShineAfter.jpg",
    },
    {
      title: "Add snow effect",
      description: "Create a magical snowy atmosphere in your images.",
      imageBefore: "../images/snow.jpg",
      imageAfter: "../images/SnowEffectAfter.jpg",
    },
    {
      title: "Transform body",
      description: "Alter body proportions while maintaining natural appearance.",
      imageBefore: "../images/transformBody.jpg",
      imageAfter: "../images/TransformBodyAfter.jpg",
    },
    {
      title: "Brighten a photo",
      description: "Enhance lighting for a vibrant and clear image.",
      imageBefore: "../images/brightenBefore.jpg",
      imageAfter: "../images/brightenAfter.jpg",
    },
    {
      title: "Add coloring",
      description: "Enhance or modify colors to add vibrancy to your images.",
      imageBefore: "../images/coloring.jpg",
      imageAfter: "../images/AddColoringAfter.jpg",
    },
    {
      title: "Color nail polish",
      description: "Apply or change nail polish colors for a refined look.",
      imageBefore: "../images/nailPolish.jpg",
      imageAfter: "../images/ColorNailPolishAfter.jpg",
    },
    {
      title: "Add mood, atmosphere, drama",
      description: "Add mood and drama through advanced lighting techniques.",
      imageBefore: "../images/mood.jpg",
      imageAfter: "../images/AddMoodAfter.jpg",
    },
    {
      title: "Add a scar",
      description: "Realistically add scars to images for dramatic effect.",
      imageBefore: "../images/scar.jpg",
      imageAfter: "../images/AddScarAfter.jpg",
    },
    {
      title: "Add sunset",
      description: "Enhance images with a beautiful sunset glow.",
      imageBefore: "../images/sunset.jpg",
      imageAfter: "../images/AddSunsetAfter.jpg",
    },
    {
      title: "Fantasy sunset",
      description: "Create a vibrant, otherworldly sunset effect.",
      imageBefore: "../images/fantasySunset.jpg",
      imageAfter: "../images/FantasySunsetAfter.jpg",
    },
    {
      title: "Add eyebrows",
      description: "Draw or enhance eyebrows for a polished look.",
      imageBefore: "../images/eyebrows.jpg",
      imageAfter: "../images/AddEyebrowsAfter.jpg",
    },
    {
      title: "Create a futuristic eye",
      description: "Design sci-fi inspired eyes with glowing effects.",
      imageBefore: "../images/futuristicEye.jpg",
      imageAfter: "../images/FuturisticEyeAfter.jpg",
    },
    {
      title: "Get rid of tan",
      description: "Even out skin tones and remove unwanted tan lines.",
      imageBefore: "../images/tanRemove.jpg",
      imageAfter: "../images/GetRidOfTanAfter.jpg",
    },
    {
      title: "Do hair coloring",
      description: "Change hair colors creatively and realistically.",
      imageBefore: "../images/hairColoring.jpg",
      imageAfter: "../images/HairColoringAfter.jpg",
    },
    {
      title: "Color hair with layers",
      description: "Apply layered coloring for dynamic hair styles.",
      imageBefore: "../images/hairColoringLayers.jpg",
      imageAfter: "../images/LayeredHairColorAfter.jpg",
    },
    {
      title: "Add facial hair",
      description: "Add realistic beards or mustaches to portraits.",
      imageBefore: "../images/addingFacialHair.jpg",
      imageAfter: "../images/AddFacialHairAfter.jpg",
    },
    {
      title: "Change color of the eye",
      description: "Alter iris colors for captivating eye effects.",
      imageBefore: "../images/changeColorEye.jpg",
      imageAfter: "../images/ChangeEyeColorAfter.jpg",
    },
    {
      title: "Remove acne",
      description: "Clean up skin imperfections with precision.",
      imageBefore: "../images/RemoveAcne.JPG",
      imageAfter: "../images/RemoveAcneAfter.jpg",
    },
    {
      title: "Remove boyfriend from an image",
      description: "Effortlessly erase a person from a photo.",
      imageBefore: "../images/RemoveBF.JPG",
      imageAfter: "../images/RemoveBoyfriendAfter.jpg",
    },
    {
      title: "Whiten teeth",
      description: "Brighten smiles by whitening teeth.",
      imageBefore: "../images/whitenTeeth.jpg",
      imageAfter: "../images/WhitenTeethAfter.jpg",
    },
    {
      title: "Match skin tone",
      description: "Achieve consistent skin tones across an image.",
      imageBefore: "../images/matchingSkinTone.jpg",
      imageAfter: "../images/MatchSkinToneAfter.jpg",
    },
    {
      title: "Remove logo in clothing",
      description: "Erase logos from clothing seamlessly.",
      imageBefore: "../images/removeLogoClothing.jpg",
      imageAfter: "../images/RemoveLogoAfter.jpg",
    },
    {
      title: "Remove pimples",
      description: "Eliminate pimples for clear, smooth skin.",
      imageBefore: "../images/removePimples.jpg",
      imageAfter: "../images/RemovePimplesAfter.jpg",
    },
    {
      title: "Remove tattoo",
      description: "Remove tattoos naturally from skin in images.",
      imageBefore: "../images/removeTatoo.jpg",
      imageAfter: "../images/RemoveTattooAfter.jpg",
    },
    {
      title: "Remove wrinkles",
      description: "Smooth out wrinkles for youthful appearances.",
      imageBefore: "../images/RemoveWrinkles.jpg",
      imageAfter: "../images/RemoveWrinklesAfter.jpg",
    },
    {
      title: "Make six pack",
      description: "Enhance body images with six-pack effects.",
      imageBefore: "../images/sixPack.jpg",
      imageAfter: "../images/MakeSixPackAfter.jpg",
    },
    {
      title: "Stylize the hair",
      description: "Apply stylish designs and effects to hair.",
      imageBefore: "../images/stylingHair.jpg",
      imageAfter: "../images/StyleHairAfter.jpg",
    },
    {
      title: "Image into illustration",
      description: "Convert photographs into artistic illustrations.",
      imageBefore: "../images/turnIllustration.jpg",
      imageAfter: "../images/ImageToIllustrationAfter.jpg",
    },
    {
      title: "Use pen tool",
      description: "Master the pen tool for advanced edits and designs.",
      imageBefore: "../images/penTool.jpg",
      imageAfter: "../images/PenToolAfter.jpg",
    }
  ];

  return (
    <>
      <NextSeo
        title="Photo Editing Services | Kriz Graphics"
        description="Enhance your photos with our professional photo editing and retouching services. From color correction to advanced image manipulation, we bring out the best in your visuals."
        openGraph={{
          title: 'Photo Editing Services | Kriz Graphics',
          description: 'Enhance your photos with our professional photo editing and retouching services. From color correction to advanced image manipulation, we bring out the best in your visuals.',
          url: 'https://www.krizgraphics.com/services/photo-editing',
          type: 'article',
          images: [
            {
              url: 'https://www.krizgraphics.com/images/photo-editing.jpg',
              width: 1200,
              height: 630,
              alt: 'Photo Editing Services',
            },
          ],
        }}
      />
      <div className="bg-gray-50 py-24 px-2 sm:px-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-red-900 mb-8">Photo Editing Services</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Enhance your photos with our professional photo editing and retouching services. From color correction to advanced image manipulation, we bring out the best in your visuals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {techniques.map((technique, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{technique.title}</h2>
                <p className="text-gray-600 mb-4">{technique.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <img src={technique.imageBefore} alt={`${technique.title} Before`} className="w-full rounded-lg" />
                    {/*<img src={technique.imageAfter} alt={`${technique.title} After`} className="w-1/2 rounded-lg" />*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
