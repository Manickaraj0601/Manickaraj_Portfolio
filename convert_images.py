import os
from PIL import Image

def convert_to_webp(source_path, target_path, max_width=None):
    try:
        img = Image.open(source_path)
        if max_width and img.width > max_width:
            ratio = max_width / float(img.width)
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Save as WebP
        img.save(target_path, "WEBP", quality=80)
        orig_size = os.path.getsize(source_path)
        new_size = os.path.getsize(target_path)
        print(f"Converted: {os.path.basename(source_path)} ({orig_size/1024:.1f} KB) -> {os.path.basename(target_path)} ({new_size/1024:.1f} KB)")
    except Exception as e:
        print(f"Failed to convert {source_path}: {e}")

def main():
    base_dir = "d:/2026/jun/CloselyPortfolio"
    public_images = os.path.join(base_dir, "public/images")
    src_assets = os.path.join(base_dir, "src/assets")
    
    print("Converting public/images...")
    if os.path.exists(public_images):
        for f in os.listdir(public_images):
            if f.lower().endswith(".png"):
                source = os.path.join(public_images, f)
                target = os.path.join(public_images, f[:-4] + ".webp")
                convert_to_webp(source, target, max_width=1200)
                
    print("\nConverting src/assets...")
    if os.path.exists(src_assets):
        for f in os.listdir(src_assets):
            if f.lower().endswith(".png"):
                source = os.path.join(src_assets, f)
                target = os.path.join(src_assets, f[:-4] + ".webp")
                convert_to_webp(source, target, max_width=800)

if __name__ == "__main__":
    main()
