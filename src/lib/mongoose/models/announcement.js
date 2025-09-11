import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true, maxLength: 100 },
    dueDate: { type: Date, required: true },
    content: { type: String, required: true, trim: true },
    ref: { type: String, required: true },
    slug: { type: String, required: true },
    status: {
      type: String,
      required: true,
      default: 'draft',
      enum: ['draft', 'review', 'published'],
    },

    mode: {
      type: String,
      required: true,
      default: 'draft',
      enum: ['draft', 'final'],
    },
    initiatedBy: { type: String, required: true },
    approvedBy: { type: String, required: true, default: 'N/A' },
  },
  { timestamps: true }
);

export const Announcement =
  mongoose.models?.Announcement ||
  mongoose.model('Announcement', announcementSchema);
