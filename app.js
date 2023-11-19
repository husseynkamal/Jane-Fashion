const preventLinks = () => {
  const links = document.querySelectorAll(".social-links li a");
  links.forEach((link) =>
    link.addEventListener("click", (e) => e.preventDefault())
  );
};

const addLikes = () => {
  const likeBtns = document.querySelectorAll(".like");

  const unlikeIcon = `<i class="fas fa-thumbs-up"></i> Like`;
  const likeIcon = `<i class="fas fa-check"></i> Liked`;

  likeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.innerHTML.trim() === unlikeIcon)
        e.currentTarget.innerHTML = likeIcon;
      else e.currentTarget.innerHTML = unlikeIcon;
    });
  });
};

const showComments = () => {
  const commentBtns = document.querySelectorAll(".show-comment");
  const numberOfComments = document.querySelectorAll(".show-comment span");
  const comments = document.querySelectorAll(".reply");

  commentBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const btnsContainer = e.currentTarget.parentElement;
      btnsContainer.nextElementSibling.classList.toggle("show");
    });
  });

  const commentsLength = [];
  comments.forEach((reply) => commentsLength.push(reply.childElementCount));

  function* generateCommentsLength() {
    yield* commentsLength;
  }
  const length = generateCommentsLength();

  numberOfComments.forEach((span) => (span.textContent = length.next().value));
};

const scroll = () => {
  const overlay = document.querySelector(".overlay");
  const scrollBtn = document.querySelector(".scroll");
  const bodyHeight = document.body.clientHeight;

  document.addEventListener("scroll", () => {
    const scrollPostion = (scrollY * 100) / bodyHeight;
    overlay.style.height = `${scrollPostion}%`;
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showComments();
  addLikes();
  preventLinks();
  scroll();
});
