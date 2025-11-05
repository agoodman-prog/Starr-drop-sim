const dropTypes = [
  { type: "Rare", chance: 50 },
  { type: "Super Rare", chance: 28 },
  { type: "Epic", chance: 15 },
  { type: "Mythic", chance: 5 },
  { type: "Legendary", chance: 2 }
];

const rewards = {
  "Rare": ["Coins", "Power Points", "Token Doubler"],
  "Super Rare": ["Gems", "Skin Fragment", "Brawler Upgrade"],
  "Epic": ["Mega Box", "Star Points", "Special Skin"],
  "Mythic": ["Mythic Brawler", "Mythic Skin", "Mythic Gear"],
  "Legendary": ["Legendary Brawler", "Legendary Skin", "Legendary Gear"]
};

document.getElementById("openDrop").addEventListener("click", () => {
  const starrDrop = document.getElementById("starrDrop");
  const result = document.getElementById("result");

  // Animate the drop
  starrDrop.style.animation = "none";
  void starrDrop.offsetWidth; // Trigger reflow
  starrDrop.style.animation = "pulse 2s infinite";

  // Simulate opening delay
  setTimeout(() => {
    const roll = Math.random() * 100;
    let selectedType;

    let cumulative = 0;
    for (let drop of dropTypes) {
      cumulative += drop.chance;
      if (roll <= cumulative) {
        selectedType = drop.type;
        break;
      }
    }

    const rewardList = rewards[selectedType];
    const reward = rewardList[Math.floor(Math.random() * rewardList.length)];

    result.innerText = `🎉 ${selectedType} Drop: You got ${reward}!`;
    result.style.opacity = 1;
  }, 1500);
});
