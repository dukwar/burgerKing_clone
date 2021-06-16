const User = require('../models/User')
const config = require('config')
const mailService = require('./mail-service')
const uuid = require('uuid')
const bcrypt = require('bcryptjs')
const UserDto = require('../dtos/user.dto')
const tokenService = require('./token-service')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({email})

        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с таким адресом ${email} уже существует!`)
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        console.log(hashedPassword)
        const activationLink = uuid.v4()
        const user = await User.create({email, password: hashedPassword, activationLink})
        await mailService.sendActivationMail(email, `${config.get('baseUrl')}/api/auth/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, userDto}
    }

    async activate(activationLink) {
        const user = await User.findOne({activationLink})
        if (!user) {
            console.log('Hello')
            throw ApiError.BadRequest('Неккоректная ссылка для активации')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        const user = await User.findOne({email})
        if (!user) {
            throw ApiError.BadRequest('Пользователь не найден!')
        }

        const isPasswordEquals = await bcrypt.compare(password, user.password)
        if (!isPasswordEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, userDto}

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
      if (!refreshToken) {
          throw ApiError.UnauthorizedError()
      }
      const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)

        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }

      const user = await User.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, userDto}
    }

    async getAllUsers() {
        const users = await User.find()
        return users
    }
}


module.exports = new UserService()