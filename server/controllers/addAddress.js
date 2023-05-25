const addAddress = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['country', 'firstName', 'lastName', 'address', 'landMark', 'city', 'state', 'ZipCode']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        console.log('valid');
        return res.status(400).json({ error: 'invalid address' })
    }

    try {
        const user = await User.findOne({ _id: req.user._id })
        if (!user) {
            return res.status(404).json({ error: 'invalid user' })
        }
        user.address = user.address.concat({ ...req.body })
        await user.save()
        const { address, ...others } = user._doc
        res.status(201).json(address)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = addAddress