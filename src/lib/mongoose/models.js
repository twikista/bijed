import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    authors: [
      {
        name: { type: String, required: true },
        affliation: { type: String, required: true },
        orchidId: String,
        //   email: {
        //     type: String,
        //     required: true,
        //     validate: {
        //       validator: (value) => {
        //         return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        //           value
        //         )
        //       },
        //       message: (props) => `${props.value} is not a valid email`,
        //     },
        //   },
      },
    ],
    volume: { type: Number, required: true, trim: true },
    issue: { type: Number, required: true, trim: true, enum: [1, 2] },
    publishDate: { type: Date },
    startPage: { type: Number, required: true },
    endPage: { type: Number, required: true },
    abstract: { type: String, required: true },
    pdfUrl: { type: String, required: true, unique: true },
    keywords: [{ type: String, required: true }],
    slug: { type: String, required: true },
    ref: { type: String, required: true, unique: true },
    published: { type: Boolean, required: true, default: false },
    // addedBy:{ type: String, required: true},
    // approvedBy:{ type: String, required: true},
  },
  { timestamps: true }
)

//Issue schema
const issueSchema = new mongoose.Schema(
  {
    issueTitle: { type: String, required: true },
    issueNumber: { type: Number, required: true, trim: true, enum: [1, 2] },
    issueYear: {
      type: Date,
      required: true,
    },
    volume: { type: Number, required: true },
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }], //likely remove
    ref: { type: String, required: true },
    published: { type: Boolean, required: true, default: false },
    publishDate: { type: Date },
    // addedBy:{ type: String, required: true},
    // approvedBy:{ type: String, required: true},

    // image: { type: String, default: null },
  },
  { timestamps: true }
)

const announcementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true, maxLength: 100 },
    dueDate: { type: Date, required: true },
    content: { type: String, required: true, trim: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
)

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, rquired: true },
    lastName: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // role: {
    //   type: String,enum:['business manager', 'managing editor', 'admin'],
    //   required: true,
    // },
    isAdmin: { type: Boolean, default: false },
    isActivated: { type: Boolean, default: false },
  },
  { timestamps: true }
)

//volume schema
// const volumeSchema = mongoose.Schema({
//   volumeNumber: { type: String, required: true },
//   year: String,
//   issues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Issue' }],
// })

//Models

export const Article =
  mongoose.models?.Article || mongoose.model('Article', articleSchema)
export const Issue =
  mongoose.models?.Issue || mongoose.model('Issue', issueSchema)

export const Announcement =
  mongoose.models?.Announcement ||
  mongoose.model('Announcement', announcementSchema)
// export const Volume =
//   mongoose.models.Volume || mongoose.model('Volume', volumeSchema)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)

///(^[a-z]+)(@uniben\.edu|@bijed\.com\.ng)|(^[a-z]+\.[a-z]+)@uniben\.edu$/gm
