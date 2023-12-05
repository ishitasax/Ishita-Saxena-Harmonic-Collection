document.addEventListener('DOMContentLoaded', function() {
  const loveLetterText = `
      Dear New York,
      
      It feels like yesterday when I first stepped onto your bustling streets, heart pounding with excitement and dreams. A year and a half later, I find myself penning down these words, grateful beyond words to call you my home.
      
      New York, you were always my dream city, a distant star I wished upon. And now, here I am, immersed in your symphony of lights, your tapestry of stories interwoven through every street and alley.
      
      Your streets, oh, they are like poetry written in asphalt. Each step I take feels like a dance, a rhythm that syncs with the beating heart of the city. The skyscrapers that touch the clouds, the neon lights that paint the night—these are the scenes I used to sketch in my daydreams back in India.
      
      The people, dear New York, they are the characters in the grand narrative of this city. From the hot dog vendor on the corner to the artist in the subway, everyone contributes to the masterpiece that is your charm. Strangers, yet companions in this urban journey, and with each interaction, a new chapter unfolds.
      
      The charm of your neighborhoods is enchanting, from the trendy vibe of Brooklyn to the classic allure of the Upper West Side. Each pocket of your map holds a piece of my heart, a memory etched into the very fabric of my being.
      
      The hustle and bustle, the lively chaos of your streets, are the background music to my college journey. It's in the hurried footsteps on Fifth Avenue, the laughter in Central Park, and the quiet conversations in quaint coffee shops—it's the soundtrack of a dream realized.
      
      New York, you are everything I ever dreamed of and more. The city lights that twinkle like stars in the night sky, the promise of something extraordinary around every corner—it's like living in a love story written in the stars.
      
      I'm grateful, beyond measure, for the challenges and triumphs you've presented. Each obstacle, a lesson; each victory, a celebration. This journey is a testament to resilience, a testament to the magic that happens when dreams meet reality on your city streets.
      
      In your arms, I've found a home that beats to the rhythm of my aspirations. It's New York or nowhere, a declaration of love written in the city lights. Thank you for being the canvas on which I paint my dreams, the melody to my college adventure, and the love story I never want to end.
      
      Forever Yours,
      Ishita
  `;

  let index = 0;
  const loveLetterElement = document.getElementById('loveLetter');
  loveLetterElement.innerHTML = ''; // Clear any initial content

  function typeWriter() {
      if (index < loveLetterText.length) {
          loveLetterElement.innerHTML += loveLetterText.charAt(index);
          index++;
          setTimeout(typeWriter, 30);
      }
  }

  typeWriter();
});

// function speakLoveLetter() {
//   const loveLetterText = `
//       Dear New York,
      
//       It feels like yesterday when I first stepped onto your bustling streets, heart pounding with excitement and dreams. A year and a half later, I find myself penning down these words, grateful beyond words to call you my home.
      
//       New York, you were always my dream city, a distant star I wished upon. And now, here I am, immersed in your symphony of lights, your tapestry of stories interwoven through every street and alley.
      
//       Your streets, oh, they are like poetry written in asphalt. Each step I take feels like a dance, a rhythm that syncs with the beating heart of the city. The skyscrapers that touch the clouds, the neon lights that paint the night—these are the scenes I used to sketch in my daydreams back in India.
      
//       The people, dear New York, they are the characters in the grand narrative of this city. From the hot dog vendor on the corner to the artist in the subway, everyone contributes to the masterpiece that is your charm. Strangers, yet companions in this urban journey, and with each interaction, a new chapter unfolds.
      
//       The charm of your neighborhoods is enchanting, from the trendy vibe of Brooklyn to the classic allure of the Upper West Side. Each pocket of your map holds a piece of my heart, a memory etched into the very fabric of my being.
      
//       The hustle and bustle, the lively chaos of your streets, are the background music to my college journey. It's in the hurried footsteps on Fifth Avenue, the laughter in Central Park, and the quiet conversations in quaint coffee shops—it's the soundtrack of a dream realized.
      
//       New York, you are everything I ever dreamed of and more. The city lights that twinkle like stars in the night sky, the promise of something extraordinary around every corner—it's like living in a love story written in the stars.
      
//       I'm grateful, beyond measure, for the challenges and triumphs you've presented. Each obstacle, a lesson; each victory, a celebration. This journey is a testament to resilience, a testament to the magic that happens when dreams meet reality on your city streets.
      
//       In your arms, I've found a home that beats to the rhythm of my aspirations. It's New York or nowhere, a declaration of love written in the city lights. Thank you for being the canvas on which I paint my dreams, the melody to my college adventure, and the love story I never want to end.
      
//       Forever Yours,
//       Ishita
//   `;

//   // Create a new SpeechSynthesisUtterance object
//   const utterance = new SpeechSynthesisUtterance(loveLetterText);

//   // Speak the text
//   window.speechSynthesis.speak(utterance);
// }
