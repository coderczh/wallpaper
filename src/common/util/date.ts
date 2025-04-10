const formatTimeDiff = (timestamp: number) => {
  const diff = Math.abs(Date.now() - timestamp) / 1000;
  if (diff < 60) {
    return "1分钟";
  }
  if (diff < 3600) {
    return `${Math.floor(diff / 60)}分钟`;
  }
  if (diff < 86400) {
    return `${Math.floor(diff / 3600)}小时`;
  }
  if (diff < 2592000) {
    return `${Math.floor(diff / 86400)}天`;
  }
  if (diff < 7776000) {
    const months = Math.floor(diff / 2592000);
    return `${months}月`;
  }
  return null;
};

const formatDateTime = (dateTime: string) => {
  const now = new Date(dateTime);
  return (
    `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ` +
    `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`
  );
};

export { formatTimeDiff, formatDateTime };
