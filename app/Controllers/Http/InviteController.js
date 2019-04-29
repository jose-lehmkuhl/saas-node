'use strict'

/**
 * Resourceful controller for interacting with invites
 */
class InviteController {
  async store ({ request, response }) {
    console.log(request.team)
  }
}

module.exports = InviteController
