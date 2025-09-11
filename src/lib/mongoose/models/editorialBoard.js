import mongoose from 'mongoose';

const editorialBoardSchema = new mongoose.Schema(
  {
    content: { type: String, required: true, trim: true },
    slug: { type: String, required: true, default: 'BIJED-editorial-board' },
    ref: { type: String, required: true },
    status: {
      type: String,
      required: true,
      default: 'published',
      enum: ['draft', 'review', 'published'],
    },
    mode: {
      type: String,
      required: true,
      default: 'final',
      enum: ['final', 'draft'],
    },
    addedBy: { type: String, required: true, default: 'admin' },
    updatedBy: { type: String, required: true, default: 'N/A' },
    approvedBy: { type: String, required: true, default: 'N/A' },
  },
  { timestamps: true }
);

export const EditorialBoard =
  mongoose.models?.EditorialBoard ||
  mongoose.model('EditorialBoard', editorialBoardSchema);
