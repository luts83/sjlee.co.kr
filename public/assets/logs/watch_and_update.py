# watch_and_update.py

import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

WATCH_FOLDER = "./images"  # logs 폴더 안에서 실행한다면 이걸로 OK
SCRIPT = "extract_log_metadata.py"  # 같은 디렉토리에 있는 스크립트라고 가정


class WatchHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        if event.event_type in ["created", "modified", "moved"]:
            print(f"\n📸 변경 감지됨: {event.src_path}")
            print("🔄 extract_log_metadata.py 실행 중...")
            subprocess.run(["python", SCRIPT])
            print("✅ 메타데이터 자동 업데이트 완료!\n")


if __name__ == "__main__":
    observer = Observer()
    observer.schedule(WatchHandler(), path=WATCH_FOLDER, recursive=True)
    observer.start()
    print(f"👀 '{WATCH_FOLDER}' 폴더 변경 감지 중... Ctrl+C로 종료")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        print("🛑 감시 종료됨")

    observer.join()
