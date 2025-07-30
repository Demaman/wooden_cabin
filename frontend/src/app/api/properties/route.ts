import { NextResponse } from 'next/server';

// Define backend API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function GET() {
  try {
    // For demo purposes, return mock data instead of calling the backend
    // Later you'll replace this with a real API call to your FastAPI backend
    const properties = [
      {
        id: 1,
        name: "Mountain View Cabin",
        description: "Cozy cabin with stunning mountain views, perfect for hikers and nature lovers. This secluded retreat offers peace and tranquility with all the comforts of home.",
        price_per_night: 120,
        location: "Forest Hills",
        bedrooms: 2,
        bathrooms: 1,
        image_url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 2,
        name: "Lakeside Retreat",
        description: "Peaceful cabin by the lake, perfect for relaxation and fishing enthusiasts. Wake up to the sound of water and birds with spectacular sunrise views.",
        price_per_night: 150,
        location: "Lake District",
        bedrooms: 3,
        bathrooms: 2,
        image_url: "https://images.unsplash.com/photo-1568659585069-facb248756e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 3,
        name: "Forest Lodge",
        description: "Secluded lodge surrounded by forest trails, ideal for runners training for the Mons Ultra Trail. Modern amenities with a rustic charm.",
        price_per_night: 95,
        location: "Pine Forest",
        bedrooms: 1,
        bathrooms: 1,
        image_url: "https://images.unsplash.com/photo-1551361999-b9af2213141b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 4,
        name: "Riverside Cabin",
        description: "Charming cabin next to a flowing river with a private deck. Perfect for couples looking for a romantic getaway in nature.",
        price_per_night: 135,
        location: "River Valley",
        bedrooms: 1,
        bathrooms: 1,
        image_url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 5,
        name: "Trail Runner's Haven",
        description: "Located right on the Mons Ultra Trail route, this cabin is the perfect base for training or race day. Featuring recovery facilities and trail maps.",
        price_per_night: 180,
        location: "Trail Head",
        bedrooms: 2,
        bathrooms: 2,
        image_url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      },
      {
        id: 6,
        name: "Hilltop Panorama",
        description: "Luxury cabin on the hilltop with panoramic views of the valley. Spacious deck, hot tub, and premium amenities for a comfortable stay.",
        price_per_night: 210,
        location: "Mountain Peak",
        bedrooms: 3,
        bathrooms: 2,
        image_url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
      }
    ];

    // Return the mock data
    return NextResponse.json(properties);
    
    // When you have your FastAPI backend ready, replace the above with:
    // const response = await fetch(`${API_URL}/api/properties`);
    // if (!response.ok) {
    //   throw new Error(`Backend returned ${response.status}`);
    // }
    // const data = await response.json();
    // return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json(
      { message: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}