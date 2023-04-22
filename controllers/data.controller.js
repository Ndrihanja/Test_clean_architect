export const largest = async (req, res, next) => {
  console.log(req.body);
  const { num1, num2, num3 } = req.body;

  try {
    //test what number is the most largest
    if (num1 > num2) {
      if (num1 > num3) {
        return res
          .status(200)
          .json({
            message:
              "The number one is the largest number for this three number!",
          });
      } else {
        return res
          .status(200)
          .json({ message: "The number three is the largest number" });
      }
    } else {
      if (num2 > num3) {
        return res
          .status(200)
          .json({ message: "The number two is the largest number" });
      } else {
        return res
          .status(200)
          .json({ message: "The number two is the greatest number!" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
