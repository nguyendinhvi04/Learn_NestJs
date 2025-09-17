import { DataTypes } from 'sequelize';
import sequelize from '../lib/config';

const Product = sequelize.define(
    'Car', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,

    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        field: 'image',
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        defaultValue: 1,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
    },
},
    {
        tableName: 'cars',
        timestamps: false,
    }
)
export default Product;