from PIL import Image
import numpy as np

def trim(im):
    # Convert to RGBA
    img = im.convert('RGBA')
    data = np.array(img)
    
    # Background color is usually the top-left pixel (or very close to white)
    bg_color = data[0, 0, :3]
    
    # Distance from background color
    dist = np.sqrt(np.sum((data[:, :, :3] - bg_color)**2, axis=2))
    
    # Mask non-background pixels
    # Threshold for what's "not background"
    mask = dist > 20
    
    coords = np.argwhere(mask)
    if len(coords) > 0:
        y0, x0 = coords.min(axis=0)
        y1, x1 = coords.max(axis=0)
        
        # Add a tiny bit of padding
        padding = 5
        x0 = max(0, x0 - padding)
        y0 = max(0, y0 - padding)
        x1 = min(img.width, x1 + padding)
        y1 = min(img.height, y1 + padding)
        
        return img.crop((x0, y0, x1, y1))
    return img

img = Image.open('public/logo.png')
cropped = trim(img)
cropped.save('public/logo.png')
print("Logo cropped successfully.")
