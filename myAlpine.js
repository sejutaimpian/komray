document.addEventListener("alpine:init", () => {
  Alpine.data("tabs", () => ({
    activeTab: 1,
    activeClass:
      "bg-blue-800 border-2 border-white ring-2 ring-blue-800 text-white",
    inActiveClass: "bg-transparent border-2 border-gray-500 text-gray-500 hover:bg-white hover:text-black",
    setActive(tab) {
      this.activeTab = tab;
      location = "#tab-konten";
    },
  }));
});
