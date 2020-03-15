document.addEventListener('DOMContentLoaded', () => {
  const faq = document.querySelectorAll('.faq')

  faq.forEach((f) => {
    const header = f.querySelector('.card-header')
    const headerIcon = f.querySelector('.card-header .icon i')

    header.addEventListener('click', () => {
      f.classList.toggle('active')
      headerIcon.classList.toggle('fa-chevron-down')
      headerIcon.classList.toggle('fa-chevron-up')
    })
  })
})
