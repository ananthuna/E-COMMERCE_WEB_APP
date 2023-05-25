const User = require('../models/User')

const updateAddress = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['country', 'firstName', 'lastName', 'address', 'landMark', 'city', 'state', 'ZipCode', '_id']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        console.log('not valid update');
        return res.status(400).json({ error: 'invalid address' })
    }

    try {
        const user = await User.findOne({ _id: req.user._id })
        if (!user) {
            return res.status(404).json({ error: 'invalid user' })
        }
        user.address.map((add, i) => {
            if (add._id == req.body._id) {
                user.address[i] = req.body
            }
        })
        // user.address = user.address.concat({ ...req.body })
        await user.save()
        const { address, ...others } = user._doc
        return res.status(201).json(address)
    } catch (error) {
        console.log('update add error');
        res.status(400).json(error.message)
    }
}
module.exports = updateAddress