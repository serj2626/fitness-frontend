// export default defineNuxtPlugin((nuxtApp) => {

// })

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/681678d256e822190a1e0153/1iqbsfu4k";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }
});
