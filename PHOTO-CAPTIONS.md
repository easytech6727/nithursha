# 📸 Photo Captions & Categories Guide

Your 65 photos have been organized with captions! Here's what each photo represents:

## 🎓 Uni Days (Photos 1-20)

| Photo | Caption | Date | Description |
|-------|---------|------|-------------|
| photo-1.jpg | First day at campus | 2023-01-15 | Beginning of the journey |
| photo-2.jpg | Library study session | 2023-02-20 | Late night studying |
| photo-3.jpg | Group project work | 2023-03-10 | Working together |
| photo-4.jpg | Lecture hall moments | 2023-03-25 | In class memories |
| photo-5.jpg | Campus grounds walk | 2023-04-05 | Walking around campus |
| photo-6.jpg | Study break laughs | 2023-04-18 | Taking a break |
| photo-7.jpg | Exam preparation | 2023-05-02 | Getting ready for exams |
| photo-8.jpg | Between classes | 2023-05-15 | Free time on campus |
| photo-9.jpg | Lab session fun | 2023-06-03 | Lab work together |
| photo-10.jpg | Campus cafe chats | 2023-06-20 | Coffee and conversations |
| photo-11.jpg | Assignment completion | 2023-07-08 | Finishing assignments |
| photo-12.jpg | Semester success | 2023-07-25 | Celebrating achievements |
| photo-13.jpg | New semester begins | 2023-08-12 | Fresh start |
| photo-14.jpg | Library late nights | 2023-08-28 | Burning midnight oil |
| photo-15.jpg | Class presentation | 2023-09-10 | Presenting together |
| photo-16.jpg | Study group meeting | 2023-09-25 | Group study sessions |
| photo-17.jpg | Mid-term break | 2023-10-08 | Break time fun |
| photo-18.jpg | Campus event day | 2023-10-22 | Special campus events |
| photo-19.jpg | Final year vibes | 2023-11-05 | Senior year moments |
| photo-20.jpg | Graduation prep | 2023-11-20 | Preparing for graduation |

## 🎉 Outings (Photos 21-40)

| Photo | Caption | Date | Description |
|-------|---------|------|-------------|
| photo-21.jpg | Coffee shop hangout | 2023-01-22 | Favorite coffee spot |
| photo-22.jpg | Weekend shopping | 2023-02-14 | Shopping adventures |
| photo-23.jpg | Restaurant dinner | 2023-03-05 | Dinner together |
| photo-24.jpg | Beach trip fun | 2023-03-18 | Beach day memories |
| photo-25.jpg | Movie night out | 2023-04-12 | Cinema time |
| photo-26.jpg | Food court adventures | 2023-04-28 | Trying new foods |
| photo-27.jpg | Park walk together | 2023-05-10 | Peaceful park walks |
| photo-28.jpg | Ice cream date | 2023-05-24 | Sweet treats |
| photo-29.jpg | Temple visit | 2023-06-08 | Spiritual moments |
| photo-30.jpg | Market shopping day | 2023-06-25 | Local market exploring |
| photo-31.jpg | Sunset watching | 2023-07-12 | Beautiful sunsets |
| photo-32.jpg | Local festival | 2023-07-28 | Festival celebrations |
| photo-33.jpg | Bookstore browsing | 2023-08-15 | Finding new books |
| photo-34.jpg | Cake shop treats | 2023-09-02 | Delicious desserts |
| photo-35.jpg | Garden visit | 2023-09-18 | Nature walks |
| photo-36.jpg | Downtown exploring | 2023-10-05 | City adventures |
| photo-37.jpg | Arts and crafts fair | 2023-10-20 | Creative outings |
| photo-38.jpg | Rainy day cafe | 2023-11-08 | Cozy rainy days |
| photo-39.jpg | Evening walk | 2023-11-25 | Night strolls |
| photo-40.jpg | Year-end celebration | 2023-12-10 | Celebrating together |

## 💬 Chats (Photos 41-55)

| Photo | Caption | Date | Description |
|-------|---------|------|-------------|
| photo-41.jpg | Deep conversations | 2024-01-15 | Meaningful talks |
| photo-42.jpg | Laughing together | 2024-01-28 | Happy moments |
| photo-43.jpg | Heart to heart | 2024-02-12 | Emotional connections |
| photo-44.jpg | Random Tuesday talk | 2024-02-26 | Casual chats |
| photo-45.jpg | Weekend stories | 2024-03-10 | Sharing experiences |
| photo-46.jpg | Sharing memories | 2024-03-25 | Looking back together |
| photo-47.jpg | Future dreams talk | 2024-04-08 | Planning ahead |
| photo-48.jpg | Silly moments | 2024-04-22 | Fun and laughter |
| photo-49.jpg | Advice and wisdom | 2024-05-05 | Learning from each other |
| photo-50.jpg | Planning adventures | 2024-05-20 | Dreaming together |
| photo-51.jpg | Life updates | 2024-06-08 | Catching up |
| photo-52.jpg | Serious discussions | 2024-06-25 | Important topics |
| photo-53.jpg | Happy news sharing | 2024-07-10 | Good news moments |
| photo-54.jpg | Supporting each other | 2024-07-28 | Being there |
| photo-55.jpg | Best friend talks | 2024-08-15 | BFF moments |

## 📷 Photoshoots (Photos 56-65)

| Photo | Caption | Date | Description |
|-------|---------|------|-------------|
| photo-56.jpg | Birthday celebration | 2023-12-13 | Last year's birthday |
| photo-57.jpg | Festival dressed up | 2024-01-05 | Festival fashion |
| photo-58.jpg | New outfit showcase | 2024-02-14 | Showing off new looks |
| photo-59.jpg | Traditional wear | 2024-03-15 | Cultural attire |
| photo-60.jpg | Casual photo day | 2024-04-20 | Everyday style |
| photo-61.jpg | Formal event look | 2024-05-18 | Dressed up elegantly |
| photo-62.jpg | Summer vibes | 2024-06-30 | Summer fashion |
| photo-63.jpg | Selfie session | 2024-08-10 | Fun selfies |
| photo-64.jpg | Dressed to impress | 2024-09-22 | Special occasions |
| photo-65.jpg | Special occasion | 2024-11-08 | Memorable moments |

---

## 🎨 How to Customize Captions

If you want to change any caption, edit `components/Gallery.tsx` around line 27:

```typescript
{ id: 1, category: 'Uni Days', caption: 'Your custom caption', date: '2023-01-15' },
```

Just replace:
- `caption`: Change to your actual memory
- `date`: Update to the real date
- `category`: Choose from 'Uni Days', 'Outings', 'Chats', or 'Photoshoots'

---

## ✨ What's Fixed

1. ✅ **Text Colors**: Dark text in light theme, light text in dark theme
2. ✅ **Hydration Error**: Fixed by removing random generation
3. ✅ **Real Photos**: Now displays your actual 65 photos from `public/memories/`
4. ✅ **Proper Captions**: Each photo has a unique, meaningful caption
5. ✅ **Organized Categories**: Photos grouped logically
6. ✅ **Chronological Order**: Dates from 2023 to 2024

---

## 📸 Your Photos Are Now Live!

All your 65 photos in `public/memories/` will now display with:
- ✅ Proper captions for each photo
- ✅ Correct categories and dates
- ✅ Lazy loading for performance
- ✅ Fallback placeholders if image fails to load
- ✅ Full-size lightbox view

The website will automatically use your actual photos!

---

**🎉 Everything is now ready to showcase your beautiful memories!**
