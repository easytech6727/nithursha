# How to Add Your Own Background Music

## Quick Steps:

### Option 1: Use Your Own Audio File (Recommended)

1. **Get your audio file** (MP3, WAV, or OGG format)
   - Birthday songs, romantic music, or instrumental tracks work great
   - Keep file size under 5MB for faster loading

2. **Add file to public folder:**
   ```
   nithursha-birthday/
   └── public/
       └── birthday-music.mp3  ← Put your file here
   ```

3. **Update the audio path in `app/page.tsx`** (around line 40):
   
   **Change this line:**
   ```javascript
   audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
   ```
   
   **To this:**
   ```javascript
   audio = new Audio('/birthday-music.mp3');
   ```

4. **Refresh your browser** and click the music button! 🎵

---

### Option 2: Use a URL (Current Setup)

The music button currently uses a sample online audio file. It works but:
- Requires internet connection
- May have loading delays
- Sample music is generic

To use a different online audio:
1. Find a royalty-free music URL (MP3 format)
2. Replace the URL in `app/page.tsx` line 40

---

### Recommended Free Music Sources:

- **Incompetech** - https://incompetech.com/music/royalty-free/
- **Free Music Archive** - https://freemusicarchive.org/
- **YouTube Audio Library** - Download from YouTube Studio
- **Bensound** - https://www.bensound.com/

---

### Troubleshooting:

**Music button not working?**
- Check browser console (F12) for errors
- Some browsers block autoplay - user must click the button first
- Make sure file path is correct
- File must be in `public/` folder

**Music too loud/quiet?**
- Adjust volume in `app/page.tsx` line 42:
  ```javascript
  audio.volume = 0.3;  // 0.0 to 1.0 (30% volume)
  ```

**Want to disable music completely?**
- Simply remove the music button from Navbar or leave it as-is
- Users can choose not to click it

---

### Current Setup:

✅ Dark mode is now default
✅ Music button toggles background music on/off
✅ Music loops continuously when playing
✅ Volume set to 30% (gentle background music)
✅ Currently using online sample music (replace with your own!)

---

**Next:** Add your favorite birthday/romantic song to make it more personal! 🎂🎶
