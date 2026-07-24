if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js?v=6.1.4", { updateViaCache: "none" });
      await registration.update();
    } catch (_) {}
  });
}
