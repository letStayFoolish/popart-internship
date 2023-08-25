const useScrollY = () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('blur-on-scroll')
    } else {
      header.classList.remove('blur-on-scroll')
    }
  })
}

const useScreenX = () => {
  const boxSocialIcons = document.querySelector('.hero__social');

  boxSocialIcons.addEventListener("mouse", () => {
    boxSocialIcons.classList.add('show-on-mouseover')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const socialIcons = document.querySelector('.hero__social')

  const showSocialIcons = () => {
    socialIcons.classList.add('show-on-mouseover')
    socialIcons.classList.remove('hide-on-scroll')
  }
  const hideSocialIcons = () => {
    socialIcons.classList.remove('show-on-mouseover')
    socialIcons.classList.add('hide-on-scroll')
  }

  document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX

    const viewportWidth = window.innerWidth || window.documentElement.clientWidth

    const treshold = 100;

    if (mouseX > viewportWidth - treshold) {
      showSocialIcons()
    } else {
      hideSocialIcons()
    }
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const navMenu = document.getElementById('nav-menu');
  const header = document.getElementById('header');

  burgerIcon.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    header.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', useScrollY)
