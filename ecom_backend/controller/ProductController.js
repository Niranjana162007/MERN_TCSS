const productModel = require ("../model/product");

exports.getProduct = async(req , res) => {
    try{
        const products = await productModel.find().sort({ id: 1 });
        res.status(200).json(products);
    }
    catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({error : 'Failed to fetch products', details: error.message})
    }
}

exports.postProduct = async (req, res) => {
    try{
        const {name, description, price, category, rating} = req.body;
        
        if (!name || !price) {
            return res.status(400).json({error: 'Name and price are required'});
        }
        
        const imagePath = req.file ? `/uploads/${req.file.filename}` : '';
        
        const product = new productModel({
            name, 
            description: description || '', 
            price: Number(price), 
            image: imagePath, 
            category: category || 'General', 
            rating: Number(rating) || 4.0
        });
        
        const savedProduct = await product.save();
        res.status(201).json({
            message: 'Product created successfully',
            product: savedProduct
        });
    }
    catch (error) {
        console.error('Post product error:', error);
        res.status(500).json({error : 'Failed to create product', details: error.message})
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const productId = req.params.id;
        const deleted = await productModel.findByIdAndDelete(productId);
        if(!deleted) {
            return res.status(404).json({error : 'Product not found!'})
        }
        res.status(200).json({message : 'Product deleted successfully!'})
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error : 'server error'})
    }
}

exports.updateProduct = async (req, res) => {
    try{
        const id = req.params.id;
        const {name, description, price, image, category, rating} = req.body;
        const updated = await productModel.findByIdAndUpdate(id, {name, description, price, image, category, rating}, {new : true});
        if(!updated) {
            return res.status(404).json({error : 'Product not found!'})
        }
        res.json(updated);
    }
    catch (error) {
        console.error("Error in updating!");
        res.status(500).json({error : 'server error'})
    }
}

exports.deleteAllProducts = async (req, res) => {
    try{
        await productModel.deleteMany({});
        res.status(200).json({message : 'All products deleted successfully!'});
    }
    catch (error) {
        console.error('Delete all products error:', error);
        res.status(500).json({error : 'Failed to delete products'})
    }
}