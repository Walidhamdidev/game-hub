// https://media.rawg.io/media/ [0]
//
// games/456/456dea5e1c7e3cd07060c14e96612001.jpg [1]

const CroppedImage = (url: string) => {
  if (!url) return "";
  const firstPart = url.split("/media/")[0];
  const secondPart = url.split("/media/")[1];
  const newUrl = firstPart + "/media/crop/600/400/" + secondPart;
  return newUrl;
};

export default CroppedImage;
