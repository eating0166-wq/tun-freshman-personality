if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js?v=6.1.10", { updateViaCache: "none" });
      await registration.update();
    } catch (_) {}
  });
}
