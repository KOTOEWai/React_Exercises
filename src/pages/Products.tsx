import React, { useEffect, useState } from 'react';
import { ApiService } from '../services/ApiService';
import type { Product } from '../services/ProductService';

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiService.getProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>Loading Products...</div>;

    return (
        <div style={{ padding: 'var(--spacing-lg) 0' }}>
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Featured Products</h2>
            <div className="grid grid-cols-2" style={{ gap: 'var(--spacing-lg)' }}>
                {products.map(product => (
                    <div key={product.id} className="glass" style={{
                        borderRadius: 'var(--border-radius)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-xs)' }}>
                                <h3 style={{ margin: 0 }}>{product.name}</h3>
                                <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{product.price}</span>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{product.description}</p>
                            <button style={{
                                marginTop: 'var(--spacing-md)',
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '8px',
                                background: 'var(--accent-gradient)',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
