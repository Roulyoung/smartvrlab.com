(() => {
  const year = new Date().getFullYear();
  const inHelp = window.location.pathname.includes('/help/');
  const base = inHelp ? '..' : '.';

  // Map blog article filenames to their pagination page number
  const blogPageMap = {
    '3dof-vs-6dof-in-vr.html': 4,
    '5-ways-vr-can-boost-workplace-productivity-2.html': 1,
    '5-ways-vr-can-boost-workplace-productivity.html': 2,
    'benefits-of-e-learning-and-vr.html': 3,
    'difference-between-360-video-and-3d-vr.html': 4,
    'does-vr-work-for-businesses.html': 2,
    'epidermal-vr-gives-technology-a-human-touch.html': 3,
    'facebook-faces-a-lawsuit-filed-by-ftc-for-illegal-monopolization.html': 6,
    'hand-tracking-in-vr.html': 3,
    'how-safe-is-virtual-reality-the-side-effects-of-vr.html': 1,
    'how-to-avoid-failure-with-vr.html': 3,
    'how-to-reduce-physical-risks-in-vr.html': 3,
    'invest-in-virtual-reality-with-smart-vr-lab.html': 6,
    'lms-integration-with-virtual-reality.html': 5,
    'mind-control-coming-to-vr.html': 4,
    'oculus-quest-2-killer.html': 4,
    'oculus-quest-3-rumours-and-likely-release-date.html': 5,
    'oculus-vs-pico-vr-for-business.html': 6,
    'roi-for-vr.html': 2,
    'succesvolle-investeringen-in-amsterdamse-virtual-reality-startup-maken-vr-toegankelijker-als-e-learning-tool.html': 5,
    'the-15-best-oculus-quest-2-accessories.html': 5,
    'video-management-in-oculus.html': 2,
    'virtual-reality-and-vulnerability-to-stress.html': 4,
    'vr-makes-empathy-easier.html': 3,
    'vr-stores-oculus-vs-pico-store.html': 5,
    'vr-training-use-cases.html': 4,
    'what-are-the-differences-between-vr-vs-ar-vs-xr.html': 1,
    'what-biometric-data-tracking-can-do.html': 2,
    'what-do-i-need-for-virtual-reality-a-vr-guide-for-2022.html': 1,
    'what-industries-is-vr-used-in-the-smart-vr-lab-top-ten-list.html': 1,
    'what-is-a-virtual-reality-content-management-system.html': 6,
    'what-is-vr-training-the-2022-guide-to-vr-training.html': 1,
    'what-you-need-to-know-before-getting-vr.html': 2,
    'why-and-when-can-we-use-virtual-reality-training.html': 6,
    'wirelessly-sideload-oculus-go-and-quest.html': 6,
  };

  const footerHTML = `
<footer class="bg-base-200 text-base-content border-t border-base-300" role="contentinfo">
  <div class="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-10">
    <div class="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
      <div class="space-y-4">
        <a class="text-2xl font-display font-bold text-primary" href="${base}/index.html">Smart VR Lab</a>
        <p class="text-sm text-base-content/70 max-w-md">VR CMS to create, manage, and distribute immersive training and interactive video at scale.</p>
        <div class="flex flex-wrap gap-3 text-sm">
          <a class="btn btn-sm btn-outline border-base-300" href="${base}/pricing.html">View pricing</a>
          <a class="btn btn-sm btn-primary" href="${base}/index.html#cta">Plan a call</a>
        </div>
      </div>
      <div class="space-y-3">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-base-content/60">Product</p>
        <div class="flex flex-col gap-2 text-sm">
          <a class="link link-hover" href="${base}/index.html#solutions">Platform</a>
          <a class="link link-hover" href="${base}/index.html#features">Features</a>
          <a class="link link-hover" href="${base}/interactive-video.html">Interactive Video</a>
          <a class="link link-hover" href="${base}/services.html">Services</a>
        </div>
      </div>
      <div class="space-y-3">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-base-content/60">Resources</p>
        <div class="flex flex-col gap-2 text-sm">
          <a class="link link-hover" href="${base}/virtual-reality-blog.html">Blog</a>
          <a class="link link-hover" href="${base}/helpdesk.html">Helpdesk</a>
          <a class="link link-hover" href="${base}/what-are-the-differences-between-vr-vs-ar-vs-xr.html">VR vs AR vs XR</a>
          <a class="link link-hover" href="${base}/5-ways-vr-can-boost-workplace-productivity-2.html">VR productivity tips</a>
        </div>
      </div>
      <div class="space-y-3">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-base-content/60">Company</p>
        <div class="flex flex-col gap-2 text-sm">
          <a class="link link-hover" href="${base}/index.html#about">About</a>
          <a class="link link-hover" href="mailto:info@smartvrlab.nl">info@smartvrlab.nl</a>
          <a class="link link-hover" href="${base}/privacy.html">Privacy Policy</a>
          <a class="link link-hover" href="${base}/terms.html">Terms & Conditions</a>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-t border-base-300/70 pt-6">
      <div class="text-sm text-base-content/70">© ${year} Smart VR Lab. All rights reserved.</div>
      <div class="flex flex-wrap gap-4 text-sm">
        <a class="link link-hover" href="https://www.linkedin.com/company/smart-vr-lab" target="_blank" rel="noopener">LinkedIn</a>
        <a class="link link-hover" href="https://www.youtube.com/@smartvrlab" target="_blank" rel="noopener">YouTube</a>
        <a class="link link-hover" href="mailto:info@smartvrlab.nl">Contact</a>
      </div>
    </div>
  </div>
</footer>
`;

  const mountPoint = document.getElementById('site-footer');
  if (mountPoint) {
    mountPoint.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  // Inject correct blog pagination links on article pages
  const filename = window.location.pathname.split('/').filter(Boolean).pop() || '';
  const isBlogListing = filename.startsWith('virtual-reality-blog');
  const pageNumber = blogPageMap[filename];

  if (!isBlogListing && pageNumber) {
    const pageHref = (num) => num === 1 ? `${base}/virtual-reality-blog.html` : `${base}/virtual-reality-blog-${num}.html`;

    // Update existing "Back to blog" links to point to the correct page
    document.querySelectorAll('a[href$="virtual-reality-blog.html"]').forEach((a) => {
      a.setAttribute('href', pageHref(pageNumber));
    });

    // Related grids (with pagination) are pre-rendered on each article page.
  }
})();
