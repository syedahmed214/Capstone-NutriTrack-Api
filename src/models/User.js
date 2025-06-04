import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },

  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [30, 'First name cannot exceed 30 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [30, 'Last name cannot exceed 30 characters']
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  bio: {
    type: String,
    trim: true,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
profileImage: {
  type: String,
  default: null
},
  position: {
    type: String,
    trim: true,
    maxlength: [100, 'Position cannot exceed 100 characters']
  },

  address: {
    country: {
      type: String,
      trim: true,
      maxlength: [50, 'Country name cannot exceed 50 characters']
    },
    city: {
      type: String,
      trim: true,
      maxlength: [50, 'City name cannot exceed 50 characters']
    },
    state: {
      type: String,
      trim: true,
      maxlength: [50, 'State name cannot exceed 50 characters']
    },
    postalCode: {
      type: String,
      trim: true,
      maxlength: [20, 'Postal code cannot exceed 20 characters']
    },
    taxId: {
      type: String,
      trim: true,
      maxlength: [50, 'Tax ID cannot exceed 50 characters']
    }
  },

  role: {
    type: String,
    enum: ['user', 'admin', 'manager'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});


userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});


userSchema.virtual('formattedAddress').get(function() {
  const addr = this.address;
  if (!addr.city && !addr.state && !addr.country) return null;
  
  const parts = [];
  if (addr.city) parts.push(addr.city);
  if (addr.state) parts.push(addr.state);
  if (addr.country) parts.push(addr.country);
  
  return parts.join(', ');
});

userSchema.set('toJSON', { virtuals: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save({ validateBeforeSave: false });
};

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.toJSON = function() {
  const user = this.toObject({ virtuals: true });
  delete user.password;
  delete user.__v;
  return user;
};

export default mongoose.model('User', userSchema);