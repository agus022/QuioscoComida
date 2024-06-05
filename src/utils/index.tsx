export function formatCurrency(cant: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(cant)
}
export function getImagePath(imagePath: string) {
  const cloudinaryBaseUrl = "https://res.cloudinary.com";
  if (imagePath.startsWith(cloudinaryBaseUrl)) {
    return imagePath;
  } else {
    return `/products/${imagePath}.jpg`;
  }
}