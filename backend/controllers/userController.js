import Users from "../models/userModel.js";
export const updateUser = async (req, res, next) => {
    try {
      const { firstName, lastName, location, profileUrl, profession } = req.body;
  
      if (!(firstName || lastName || contact || profession || location)) {
        next("Please provide all required fields");
        return;
      }
  
      const { userId } = req.body.user;
  
      const updateUser = {
        firstName,
        lastName,
        location,
        profileUrl,
        profession,
        _id: userId,
      };
      const user = await Users.findByIdAndUpdate(userId, updateUser, {
        new: true,
      });
  
      await user.populate({ path: "friends", select: "-password" });
      const token = createJWT(user?._id);
  
      user.password = undefined;
  
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: error.message });
    }
  };

  export const changePassword = async (req, res, next) => {
    try {
      const { userId, password } = req.body;
  
      const hashedpassword = await hashString(password);
  
      const user = await Users.findByIdAndUpdate(
        { _id: userId },
        { password: hashedpassword }
      );
  
      if (user) {
        res.status(200).json({
          ok: true,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: error.message });
    }
  };

  // DELETE /api/users/:id
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      await Users.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error deleting user" });
    }
  };
  