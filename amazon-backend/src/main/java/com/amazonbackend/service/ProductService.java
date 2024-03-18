package com.amazonbackend.service;

import com.amazonbackend.dto.ProductDto;
import com.amazonbackend.model.Product;

import java.util.*;

public interface ProductService {

    ProductDto addNewProduct(ProductDto productDto);

    List<Product> getProductsByName(String productName, Integer offset, Integer pageSize);

    List<Product> getAllProducts();

    List<Product> removeProduct(String productName);
}
