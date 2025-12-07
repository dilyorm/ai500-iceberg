# How to Upload Video to Server

Based on your deployment setup, your server path is: `/var/www/ai500.dilyor.dev/`

## Step 1: Remove Video from Git (Already Done ✅)

The video has been removed from Git tracking. You can commit this change:

```powershell
git add .gitignore src/components/Demo.tsx
git commit -m "Remove large video from Git, use server URL instead"
git push
```

## Step 2: Upload Video to Your Server

### Method 1: Using SCP (Recommended - Direct Upload)

From your local machine, run this command in PowerShell:

```powershell
# Upload the video directly to your server
scp "public/Comp 1.mp4" root@ai500.dilyor.dev:/var/www/ai500.dilyor.dev/videos/Comp-1.mp4
```

**Note:** 
- Replace `root` with your actual SSH username if different
- You'll be prompted for your SSH password or key passphrase
- The `videos` folder will be created automatically if it doesn't exist

### Method 2: Using SSH and Manual Upload

1. **Connect to your server via SSH:**
   ```powershell
   ssh root@ai500.dilyor.dev
   ```

2. **Create the videos directory:**
   ```bash
   mkdir -p /var/www/ai500.dilyor.dev/videos
   ```

3. **Exit SSH and upload the file:**
   ```powershell
   # From your local machine
   scp "public/Comp 1.mp4" root@ai500.dilyor.dev:/var/www/ai500.dilyor.dev/videos/Comp-1.mp4
   ```

4. **Set correct permissions:**
   ```bash
   ssh root@ai500.dilyor.dev
   chmod 644 /var/www/ai500.dilyor.dev/videos/Comp-1.mp4
   chown www-data:www-data /var/www/ai500.dilyor.dev/videos/Comp-1.mp4
   ```

### Method 3: Using SFTP Client (FileZilla, WinSCP, etc.)

1. **Connect to your server:**
   - Host: `ai500.dilyor.dev`
   - Username: `root` (or your SSH username)
   - Port: `22`
   - Protocol: SFTP

2. **Navigate to:** `/var/www/ai500.dilyor.dev/`

3. **Create a `videos` folder** if it doesn't exist

4. **Upload `Comp 1.mp4`** and rename it to `Comp-1.mp4` (remove spaces)

5. **Set permissions:**
   - Right-click the file → Properties
   - Set permissions to `644`
   - Owner: `www-data` (or your web server user)

## Step 3: Verify the Upload

1. **Check if file exists:**
   ```bash
   ssh root@ai500.dilyor.dev
   ls -lh /var/www/ai500.dilyor.dev/videos/Comp-1.mp4
   ```

2. **Test the URL in browser:**
   Visit: `https://ai500.dilyor.dev/videos/Comp-1.mp4`
   
   You should be able to download or play the video directly.

3. **Test on your demo page:**
   Visit: `https://ai500.dilyor.dev/demo`
   
   The video should load and play correctly.

## Step 4: Troubleshooting

### If video doesn't load:

1. **Check file permissions:**
   ```bash
   ls -la /var/www/ai500.dilyor.dev/videos/
   ```
   Should show: `-rw-r--r--` (644 permissions)

2. **Check web server can access it:**
   ```bash
   sudo -u www-data cat /var/www/ai500.dilyor.dev/videos/Comp-1.mp4 | head -c 100
   ```

3. **Check Nginx/Apache configuration:**
   Make sure your web server allows serving `.mp4` files. Add to your server config if needed:
   
   **For Nginx:**
   ```nginx
   location ~ \.mp4$ {
       add_header Content-Type video/mp4;
   }
   ```

4. **Check file size:**
   ```bash
   du -h /var/www/ai500.dilyor.dev/videos/Comp-1.mp4
   ```
   Should show: `53.18 MB` (or similar)

## Current Configuration

- **Server Path:** `/var/www/ai500.dilyor.dev/`
- **Video URL:** `https://ai500.dilyor.dev/videos/Comp-1.mp4`
- **Demo Page:** `https://ai500.dilyor.dev/demo`

The Demo component is already configured to use this URL. After uploading, the video will work automatically!

## Notes

- The video file (`Comp 1.mp4`) stays in your local `public/` folder for development
- It's now in `.gitignore` so it won't be committed to Git
- The code has a fallback to the local file for local development
- Production will use the server URL automatically
