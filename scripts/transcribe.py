from faster_whisper import WhisperModel
import argparse
import json

parser = argparse.ArgumentParser()

parser.add_argument("--input", required=True)
parser.add_argument("--model", default="base")

args = parser.parse_args()

model = WhisperModel(args.model)

segments, info = model.transcribe(
    args.input,
    word_timestamps=True
)

result = {
    "language": info.language,
    "segments": []
}

for segment in segments:
    result["segments"].append({
        "start": segment.start,
        "end": segment.end,
        "text": segment.text
    })

print(json.dumps(result))