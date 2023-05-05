import noImage from "../assets/placeholder.png";

const CroppedImage = (url: string) => {
  if (!url) return noImage;

  const firstPart = url.split("/media/")[0];
  const secondPart = url.split("/media/")[1];
  const newUrl = firstPart + "/media/crop/600/400/" + secondPart;
  return newUrl;
};

export default CroppedImage;
