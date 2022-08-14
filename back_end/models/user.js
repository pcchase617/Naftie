const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      allowNull: false,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "postMessage",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
)

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

var User = model("User", userSchema)

export default User
