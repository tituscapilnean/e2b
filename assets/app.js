// Copy buttons: copy a post's plain text, one blank line between paragraphs.
document.querySelectorAll("button.copy").forEach((btn) => {
  const label = btn.textContent;
  btn.addEventListener("click", async () => {
    const el = document.getElementById(btn.dataset.copy);
    const paras = el.querySelectorAll("p");
    const text = paras.length
      ? [...paras].map((p) => p.innerText.trim()).join("\n\n")
      : el.innerText.trim();
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copied";
    } catch {
      btn.textContent = "Select and copy";
    }
    btn.classList.add("is-done");
    setTimeout(() => { btn.textContent = label; btn.classList.remove("is-done"); }, 1800);
  });
});
