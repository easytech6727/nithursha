const fs = require('fs');
const path = require('path');

// Read all photos from public/memories folder
const memoriesPath = path.join(__dirname, 'public', 'memories');

console.log('\n📸 Scanning your photos...\n');

try {
  const files = fs.readdirSync(memoriesPath)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    })
    .sort();

  console.log(`✅ Found ${files.length} photos in public/memories/\n`);

  if (files.length === 0) {
    console.log('❌ No photos found! Please add your photos to public/memories/');
    console.log('\nSupported formats: .jpg, .jpeg, .png, .webp\n');
    process.exit(1);
  }

  console.log('📋 Your photos:\n');
  files.forEach((file, index) => {
    console.log(`${String(index + 1).padStart(2, ' ')}. ${file}`);
  });

  console.log('\n' + '='.repeat(60));
  console.log('\n💡 Recommended naming convention:\n');
  console.log('Rename your photos to: photo-1.jpg, photo-2.jpg, ... photo-65.jpg');
  console.log('\nOn Windows PowerShell, you can batch rename:');
  console.log('cd public\\memories');
  console.log('Get-ChildItem *.jpg | ForEach-Object -Begin {$i=1} {Rename-Item $_ -NewName "photo-$i.jpg"; $i++}');
  
  console.log('\nOn Windows Command Prompt:');
  console.log('cd public\\memories');
  console.log('Use a file manager or rename manually');

  console.log('\n' + '='.repeat(60));

  // Generate updated photo data based on actual files
  console.log('\n📝 Generating photo data for Gallery...\n');

  const photoDataCode = files.slice(0, 65).map((file, index) => {
    const num = index + 1;
    let category = 'Uni Days';
    if (num > 20 && num <= 40) category = 'Outings';
    else if (num > 40 && num <= 55) category = 'Chats';
    else if (num > 55) category = 'Photoshoots';

    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const monthIndex = Math.floor((num - 1) / 6) % 12;
    const year = num <= 40 ? 2023 : 2024;
    const day = String(5 + ((num - 1) % 25)).padStart(2, '0');

    return `    { id: ${num}, category: '${category}', caption: 'Memory ${num}', date: '${year}-${months[monthIndex]}-${day}', filename: '${file}' }`;
  }).join(',\n');

  console.log('Copy this to components/Gallery.tsx (line 27):\n');
  console.log('const photoData = [');
  console.log(photoDataCode);
  console.log('  ];');
  console.log('\nThen update the return statement to use filename instead of constructing the path.\n');

} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\n💡 Make sure you run this from the project root directory:');
  console.log('node list-photos.js\n');
}
