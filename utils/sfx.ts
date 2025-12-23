// utils/sfx.ts
export const playSound = (url: string, volume: number = 0.5) => {
  // Tạo đối tượng audio mới mỗi lần gọi để tránh bị chồng chéo nếu bấm nhanh
  const audio = new Audio(url);
  audio.volume = volume;
  
  // Trình duyệt yêu cầu tương tác người dùng trước khi phát âm thanh
  const promise = audio.play();
  
  if (promise !== undefined) {
    promise.catch(error => {
      console.warn("Âm thanh bị chặn bởi trình duyệt. Hãy click vào trang web trước!", error);
    });
  }
};

export const sfx = {
  // Đảm bảo tên file trong thư mục public/sounds/ phải khớp chính xác
  clocktick: () => playSound('/sounds/clock-tick.mp3', 0.4),
  start: () => playSound('/sounds/start.mp3', 0.8),
  correct: () => playSound('/sounds/correct-ding.mp3', 0.3),
  win: () => playSound('/sounds/victory.mp3', 0.6),
  // Thêm tiếng click nhẹ cho các nút menu
  click: () => playSound('/sounds/click.mp3', 0.3),
};