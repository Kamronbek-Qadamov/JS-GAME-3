// Kerakli html teglariga ulanish
const first_player_img = document.querySelector(".first__player");
const second_player_img = document.querySelector(".second__player");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

result.textContent = `Siz birinchi o'yinchisiz. Boshlash uchun start bosing👌😁`

// takrorlardan qochish - funksiyaga chiqarish
function getRandomNumbers(limit = 2) {
  return Math.round(Math.random() * limit);
}

// o'yinchilar uchun tasodifiy rasm chiqarish
function setImageAttribute(random_num, img) {
    if(random_num == 0) {
        img.setAttribute('src', 'paper.png');
    } else if( random_num == 1) {
        img.setAttribute('src', 'rock.png');
    } else {
        img.setAttribute('src', 'scissors.png');
    }
}

btn.addEventListener("click", () => {
  // tasodifiy sonlarni generatsiya qilish
  const first_random_number = getRandomNumbers();
  const second_random_number = getRandomNumbers();

  // birinchi o'yinchi uchun rasm chiqarish
    setImageAttribute(first_random_number, first_player_img);
  // Ikkinchi o'yinchi uchun rasm chiqarish
    setImageAttribute(second_random_number, second_player_img);


  // 0 - paper
  // 1 - rock
  // 2- scissors

  if (
    (first_random_number == 0 && second_random_number == 1) ||
    (first_random_number == 1 && second_random_number == 2) ||
    (first_random_number == 2 && second_random_number == 0) 
  ) {
    result.textContent = "Siz yutdingiz!😁";
    result.style.color = 'green'
  } else if (first_random_number == second_random_number) {
    result.textContent = "Durrang!🤝";
    result.style.color = 'blue'
  } else {
    result.textContent = "Siz yutqazdingiz!😒";
    result.style.color = 'red'
  }
});
