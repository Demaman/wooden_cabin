from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Wood Cabin Rentals",
    description="API for rental accommodations platform",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to Wood Cabin Rentals API"}

@app.get("/api/properties")
async def get_properties():
    # This will be replaced with database access later
    return [
        {
            "id": 1,
            "name": "Mountain View Cabin",
            "description": "Cozy cabin with stunning mountain views",
            "price_per_night": 120,
            "location": "Forest Hills",
            "bedrooms": 2,
            "bathrooms": 1,
            "image_url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
        },
        {
            "id": 2,
            "name": "Lakeside Retreat",
            "description": "Peaceful cabin by the lake, perfect for relaxation",
            "price_per_night": 150,
            "location": "Lake District",
            "bedrooms": 3,
            "bathrooms": 2,
            "image_url": "https://images.unsplash.com/photo-1568659585069-facb248756e9"
        },
        {
            "id": 3,
            "name": "Forest Lodge",
            "description": "Secluded lodge surrounded by forest trails",
            "price_per_night": 95,
            "location": "Pine Forest",
            "bedrooms": 1,
            "bathrooms": 1,
            "image_url": "https://images.unsplash.com/photo-1551361999-b9af2213141b"
        }
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)