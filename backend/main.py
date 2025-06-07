from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}

# Pydantic model for input data - customize as per your AI features later
class PredictionInput(BaseModel):
    feature1: float
    feature2: float
    feature3: int

# Pydantic model for output data
class PredictionOutput(BaseModel):
    prediction: str
    confidence: float

@app.post("/predict", response_model=PredictionOutput)
def predict(data: PredictionInput):
    # Dummy AI logic - replace with your ML model inference later
    prediction = "Positive" if data.feature1 > 0.5 else "Negative"
    confidence = 0.85

    return PredictionOutput(prediction=prediction, confidence=confidence)
