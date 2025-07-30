import { NextRequest, NextResponse } from 'next/server';

// Mock properties data (you'll replace this with a backend call later)
const properties = [
  {
    id: 1,
    name: "Mountain View Cabin",
    description: "Cozy cabin with stunning mountain views, perfect for hikers and nature lovers. This secluded retreat offers peace and tranquility with all the comforts of home. Wake up to the chirping of birds and fresh mountain air. The cabin features a fully equipped kitchen, a comfortable living area with a fireplace, and a spacious deck where you can enjoy your morning coffee while taking in the breathtaking views. Nearby hiking trails offer opportunities for adventure during the day.",
    price_per_night: 120,
    location: "Forest Hills",
    bedrooms: 2,
    bathrooms: 1,
    image_url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    amenities: ["Wifi", "Fireplace", "Kitchen", "Heating", "Parking"],
    max_guests: 4
  },
  {
    id: 2,
    name: "Lakeside Retreat",
    description: "Peaceful cabin by the lake, perfect for relaxation and fishing enthusiasts. Wake up to the sound of water and birds with spectacular sunrise views. This spacious retreat features three comfortable bedrooms, a fully equipped modern kitchen, and a cozy living area with large windows overlooking the lake. Step outside onto the private dock for fishing or launch the complimentary kayaks for a day on the water. In the evening, gather around the outdoor fire pit for stargazing and s'mores.",
    price_per_night: 150,
    location: "Lake District",
    bedrooms: 3,
    bathrooms: 2,
    image_url: "https://images.unsplash.com/photo-1568659585069-facb248756e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    amenities: ["Wifi", "Lakefront", "Kayaks", "Fire pit", "BBQ grill"],
    max_guests: 6
  },
  {
    id: 3,
    name: "Forest Lodge",
    description: "Secluded lodge surrounded by forest trails, ideal for runners training for the Mons Ultra Trail. Modern amenities with a rustic charm. This compact but efficient space features high-quality furnishings, a kitchenette with essential appliances, and a comfortable queen bed. The bathroom includes a rainfall shower perfect for washing away trail dust. A small covered porch with seating allows you to enjoy the forest views regardless of weather conditions. Maps of local running routes are provided.",
    price_per_night: 95,
    location: "Pine Forest",
    bedrooms: 1,
    bathrooms: 1,
    image_url: "https://images.unsplash.com/photo-1551361999-b9af2213141b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    amenities: ["Trail maps", "Running gear storage", "Wifi", "Kitchenette"],
    max_guests: 2
  },
  {
    id: 4,
    name: "Riverside Cabin",
    description: "Charming cabin next to a flowing river with a private deck. Perfect for couples looking for a romantic getaway in nature. This intimate cabin features a comfortable king-sized bed, a spa-like bathroom with a soaking tub, and a small but well-equipped kitchen. Large windows and glass doors lead to a private deck suspended over the riverbank, where you can enjoy the soothing sounds of flowing water. At night, the starry sky and the gentle river sounds create a magical atmosphere.",
    price_per_night: 135,
    location: "River Valley",
    bedrooms: 1,
    bathrooms: 1,
    image_url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    amenities: ["King bed", "Soaking tub", "River views", "Wifi", "Coffee maker"],
    max_guests: 2
  },
  {
    id: 5,
    name: "Trail Runner's Haven",
    description: "Located right on the Mons Ultra Trail route, this cabin is the perfect base for training or race day. Featuring recovery facilities and trail maps. This purpose-built cabin includes two bedrooms with comfortable recovery-focused mattresses, a dedicated gear storage and drying area, and a recovery corner with foam rollers and massage tools. The fully equipped kitchen allows you to prepare performance meals, while the living area features comfortable seating for post-run relaxation. A covered outdoor shower helps you clean up before entering.",
    price_per_night: 180,
    location: "Trail Head",
    bedrooms: 2,
    bathrooms: 2,
    image_url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    amenities: ["Recovery tools", "Gear storage", "Trail access", "Outdoor shower", "High-speed wifi"],
    max_guests: 4
  },
  {
    id: 6,
    name: "Hilltop Panorama",
    description: "Luxury cabin on the hilltop with panoramic views of the valley. Spacious deck, hot tub, and premium amenities for a comfortable stay. This high-end cabin features three elegantly appointed bedrooms, a gourmet kitchen with premium appliances, and a grand living area with floor-to-ceiling windows showcasing the breathtaking views. The expansive deck includes a hot tub, outdoor dining area, and lounge seating. Inside, you'll find premium linens, smart home features, and thoughtful touches throughout that make this a truly luxurious retreat.",
    price_per_night: 210,
    location: "Mountain Peak",
    bedrooms: 3,
    bathrooms: 2,
    image_url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    amenities: ["Hot tub", "Panoramic views", "Gourmet kitchen", "Smart home", "Premium linens"],
    max_guests: 6
  }
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Find the property with the matching ID
    const property = properties.find(prop => prop.id === id);
    
    if (!property) {
      return NextResponse.json(
        { message: 'Property not found' },
        { status: 404 }
      );
    }
    
    // Return the property data
    return NextResponse.json(property);
    
    // When you have your FastAPI backend ready, replace the above with:
    // const response = await fetch(`${API_URL}/api/properties/${id}`);
    // if (!response.ok) {
    //   if (response.status === 404) {
    //     return NextResponse.json(
    //       { message: 'Property not found' },
    //       { status: 404 }
    //     );
    //   }
    //   throw new Error(`Backend returned ${response.status}`);
    // }
    // const data = await response.json();
    // return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching property:', error);
    return NextResponse.json(
      { message: 'Failed to fetch property' },
      { status: 500 }
    );
  }
}