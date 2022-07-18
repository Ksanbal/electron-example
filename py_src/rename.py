import argparse
import os

def main():
    # [x] argument 받기
    # -> image path, filename, select Style
    parser = argparse.ArgumentParser(description="python shell 실행 테스트")
    parser.add_argument("filename", help="파일명")
    parser.add_argument("style", help="선택한 스타일")
    args = parser.parse_args()
    
    filename: str = args.filename
    style: str = args.style
    
    # [x] filename_style.png로 재저장 후 path, filename 반환
    old_name = os.path.join(".media", filename)
    new_name = os.path.join(".media", f"{filename.split('.')[0]}_{style}.png")
    os.rename(old_name, new_name)
    print(new_name)

if __name__ == "__main__":
    main()