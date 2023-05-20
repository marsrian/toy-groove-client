

const AboutUs = () => {
    return (
        <div className="mt-12">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 italic">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img className="rounded-lg" src="https://i.ibb.co/2dsJBKc/About.jpg" alt="" />
                <div className="space-y-3 px-4 text-lg">
                    <p>Welcome to Toy Groove, your ultimate toy destination. We are dedicated to bringing joy and happiness to children with our wide selection of exciting and high-quality toys.</p>
                    <p>At Toy Groove, we believe in the power of play and its importance in a child is development. Thats why we carefully curate our collection to offer toys that inspire creativity, imagination, and learning.</p>
                    <p>With Toy Groove, you can shop with confidence, knowing that you are choosing from the best selection of toys available. Our friendly and knowledgeable team is always here to assist you in finding the perfect toy to spark joy and create memorable experiences for the children in your life.</p>
                    <p>Thank you for choosing Toy Groove as your trusted partner in play. We look forward to helping you find the perfect toys that will bring smiles, laughter, and endless delight to your little ones.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;