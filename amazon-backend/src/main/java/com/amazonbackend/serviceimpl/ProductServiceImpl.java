package com.amazonbackend.serviceimpl;

import com.amazonbackend.dao.ProductDao;
import com.amazonbackend.dto.ProductDto;
import com.amazonbackend.model.Product;
import com.amazonbackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductDao productDao;

    @Override
    public ProductDto addNewProduct(ProductDto productDto) {
        Product product = new Product();
        product.setProductName(productDto.getProductName());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setQuantityAvailable(productDto.getQuantityAvailable());
        productDao.save(product);
        productDto.setProductId(product.getProductId());
        return productDto;
    }
}
