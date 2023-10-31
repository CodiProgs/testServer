import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) {}

    @Query(() => String)
    hello() {
        return this.userService.hello();
    }

    @Query(() => String)
    async getUser(
        @Args('id') id: number,
    ){
        return 'Hello World';
    }
}
