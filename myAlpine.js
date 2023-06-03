document.addEventListener("alpine:init", () => {
  Alpine.data("tabs", () => ({
    activeTab: 3,
    activeClass:
      "bg-blue-800 border-2 border-white ring-2 ring-blue-800 text-white",
    inActiveClass: "bg-transparent border-2 border-gray-500 text-gray-500",
    setActive(tab) {
      this.activeTab = tab;
      location = "#tab-konten";
    },
  }));
});
