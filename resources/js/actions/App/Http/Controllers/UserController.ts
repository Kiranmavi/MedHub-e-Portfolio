import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/api/users'
*/
const index51602741bb19a7e9b158852b9bfa08a4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

index51602741bb19a7e9b158852b9bfa08a4.definition = {
    methods: ["get","head"],
    url: '/api/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4.url = (options?: RouteQueryOptions) => {
    return index51602741bb19a7e9b158852b9bfa08a4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/api/users'
*/
const index51602741bb19a7e9b158852b9bfa08a4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/api/users'
*/
index51602741bb19a7e9b158852b9bfa08a4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index51602741bb19a7e9b158852b9bfa08a4.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index51602741bb19a7e9b158852b9bfa08a4.form = index51602741bb19a7e9b158852b9bfa08a4Form
/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/user'
*/
const index4f74708015d25e186d2d80ed42af2d9a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

index4f74708015d25e186d2d80ed42af2d9a.definition = {
    methods: ["get","head"],
    url: '/user',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.url = (options?: RouteQueryOptions) => {
    return index4f74708015d25e186d2d80ed42af2d9a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/user'
*/
const index4f74708015d25e186d2d80ed42af2d9aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::index
* @see app/Http/Controllers/UserController.php:19
* @route '/user'
*/
index4f74708015d25e186d2d80ed42af2d9aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4f74708015d25e186d2d80ed42af2d9a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4f74708015d25e186d2d80ed42af2d9a.form = index4f74708015d25e186d2d80ed42af2d9aForm

export const index = {
    '/api/users': index51602741bb19a7e9b158852b9bfa08a4,
    '/user': index4f74708015d25e186d2d80ed42af2d9a,
}

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/api/users'
*/
const store51602741bb19a7e9b158852b9bfa08a4 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'post',
})

store51602741bb19a7e9b158852b9bfa08a4.definition = {
    methods: ["post"],
    url: '/api/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/api/users'
*/
store51602741bb19a7e9b158852b9bfa08a4.url = (options?: RouteQueryOptions) => {
    return store51602741bb19a7e9b158852b9bfa08a4.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/api/users'
*/
store51602741bb19a7e9b158852b9bfa08a4.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/api/users'
*/
const store51602741bb19a7e9b158852b9bfa08a4Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/api/users'
*/
store51602741bb19a7e9b158852b9bfa08a4Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store51602741bb19a7e9b158852b9bfa08a4.url(options),
    method: 'post',
})

store51602741bb19a7e9b158852b9bfa08a4.form = store51602741bb19a7e9b158852b9bfa08a4Form
/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/user'
*/
const store4f74708015d25e186d2d80ed42af2d9a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'post',
})

store4f74708015d25e186d2d80ed42af2d9a.definition = {
    methods: ["post"],
    url: '/user',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/user'
*/
store4f74708015d25e186d2d80ed42af2d9a.url = (options?: RouteQueryOptions) => {
    return store4f74708015d25e186d2d80ed42af2d9a.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/user'
*/
store4f74708015d25e186d2d80ed42af2d9a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/user'
*/
const store4f74708015d25e186d2d80ed42af2d9aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::store
* @see app/Http/Controllers/UserController.php:27
* @route '/user'
*/
store4f74708015d25e186d2d80ed42af2d9aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4f74708015d25e186d2d80ed42af2d9a.url(options),
    method: 'post',
})

store4f74708015d25e186d2d80ed42af2d9a.form = store4f74708015d25e186d2d80ed42af2d9aForm

export const store = {
    '/api/users': store51602741bb19a7e9b158852b9bfa08a4,
    '/user': store4f74708015d25e186d2d80ed42af2d9a,
}

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/api/users/{user}'
*/
const show95c988f99103b85d110f99141c96fbb5 = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'get',
})

show95c988f99103b85d110f99141c96fbb5.definition = {
    methods: ["get","head"],
    url: '/api/users/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/api/users/{user}'
*/
show95c988f99103b85d110f99141c96fbb5.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return show95c988f99103b85d110f99141c96fbb5.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/api/users/{user}'
*/
show95c988f99103b85d110f99141c96fbb5.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/api/users/{user}'
*/
show95c988f99103b85d110f99141c96fbb5.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/api/users/{user}'
*/
const show95c988f99103b85d110f99141c96fbb5Form = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/api/users/{user}'
*/
show95c988f99103b85d110f99141c96fbb5Form.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/api/users/{user}'
*/
show95c988f99103b85d110f99141c96fbb5Form.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show95c988f99103b85d110f99141c96fbb5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show95c988f99103b85d110f99141c96fbb5.form = show95c988f99103b85d110f99141c96fbb5Form
/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/user/{user}'
*/
const show23dda6772f6db46a8f6f6832de949d00 = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'get',
})

show23dda6772f6db46a8f6f6832de949d00.definition = {
    methods: ["get","head"],
    url: '/user/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/user/{user}'
*/
show23dda6772f6db46a8f6f6832de949d00.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return show23dda6772f6db46a8f6f6832de949d00.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/user/{user}'
*/
show23dda6772f6db46a8f6f6832de949d00.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/user/{user}'
*/
show23dda6772f6db46a8f6f6832de949d00.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/user/{user}'
*/
const show23dda6772f6db46a8f6f6832de949d00Form = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/user/{user}'
*/
show23dda6772f6db46a8f6f6832de949d00Form.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\UserController::show
* @see app/Http/Controllers/UserController.php:46
* @route '/user/{user}'
*/
show23dda6772f6db46a8f6f6832de949d00Form.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show23dda6772f6db46a8f6f6832de949d00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show23dda6772f6db46a8f6f6832de949d00.form = show23dda6772f6db46a8f6f6832de949d00Form

export const show = {
    '/api/users/{user}': show95c988f99103b85d110f99141c96fbb5,
    '/user/{user}': show23dda6772f6db46a8f6f6832de949d00,
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/api/users/{user}'
*/
const update95c988f99103b85d110f99141c96fbb5 = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'put',
})

update95c988f99103b85d110f99141c96fbb5.definition = {
    methods: ["put","patch"],
    url: '/api/users/{user}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/api/users/{user}'
*/
update95c988f99103b85d110f99141c96fbb5.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return update95c988f99103b85d110f99141c96fbb5.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/api/users/{user}'
*/
update95c988f99103b85d110f99141c96fbb5.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/api/users/{user}'
*/
update95c988f99103b85d110f99141c96fbb5.patch = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/api/users/{user}'
*/
const update95c988f99103b85d110f99141c96fbb5Form = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update95c988f99103b85d110f99141c96fbb5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/api/users/{user}'
*/
update95c988f99103b85d110f99141c96fbb5Form.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update95c988f99103b85d110f99141c96fbb5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/api/users/{user}'
*/
update95c988f99103b85d110f99141c96fbb5Form.patch = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update95c988f99103b85d110f99141c96fbb5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update95c988f99103b85d110f99141c96fbb5.form = update95c988f99103b85d110f99141c96fbb5Form
/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/user/{user}'
*/
const update23dda6772f6db46a8f6f6832de949d00 = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'put',
})

update23dda6772f6db46a8f6f6832de949d00.definition = {
    methods: ["put","patch"],
    url: '/user/{user}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/user/{user}'
*/
update23dda6772f6db46a8f6f6832de949d00.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return update23dda6772f6db46a8f6f6832de949d00.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/user/{user}'
*/
update23dda6772f6db46a8f6f6832de949d00.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/user/{user}'
*/
update23dda6772f6db46a8f6f6832de949d00.patch = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/user/{user}'
*/
const update23dda6772f6db46a8f6f6832de949d00Form = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update23dda6772f6db46a8f6f6832de949d00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/user/{user}'
*/
update23dda6772f6db46a8f6f6832de949d00Form.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update23dda6772f6db46a8f6f6832de949d00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::update
* @see app/Http/Controllers/UserController.php:54
* @route '/user/{user}'
*/
update23dda6772f6db46a8f6f6832de949d00Form.patch = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update23dda6772f6db46a8f6f6832de949d00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update23dda6772f6db46a8f6f6832de949d00.form = update23dda6772f6db46a8f6f6832de949d00Form

export const update = {
    '/api/users/{user}': update95c988f99103b85d110f99141c96fbb5,
    '/user/{user}': update23dda6772f6db46a8f6f6832de949d00,
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/api/users/{user}'
*/
const destroy95c988f99103b85d110f99141c96fbb5 = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'delete',
})

destroy95c988f99103b85d110f99141c96fbb5.definition = {
    methods: ["delete"],
    url: '/api/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/api/users/{user}'
*/
destroy95c988f99103b85d110f99141c96fbb5.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return destroy95c988f99103b85d110f99141c96fbb5.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/api/users/{user}'
*/
destroy95c988f99103b85d110f99141c96fbb5.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy95c988f99103b85d110f99141c96fbb5.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/api/users/{user}'
*/
const destroy95c988f99103b85d110f99141c96fbb5Form = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy95c988f99103b85d110f99141c96fbb5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/api/users/{user}'
*/
destroy95c988f99103b85d110f99141c96fbb5Form.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy95c988f99103b85d110f99141c96fbb5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy95c988f99103b85d110f99141c96fbb5.form = destroy95c988f99103b85d110f99141c96fbb5Form
/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/user/{user}'
*/
const destroy23dda6772f6db46a8f6f6832de949d00 = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'delete',
})

destroy23dda6772f6db46a8f6f6832de949d00.definition = {
    methods: ["delete"],
    url: '/user/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/user/{user}'
*/
destroy23dda6772f6db46a8f6f6832de949d00.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return destroy23dda6772f6db46a8f6f6832de949d00.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/user/{user}'
*/
destroy23dda6772f6db46a8f6f6832de949d00.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy23dda6772f6db46a8f6f6832de949d00.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/user/{user}'
*/
const destroy23dda6772f6db46a8f6f6832de949d00Form = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy23dda6772f6db46a8f6f6832de949d00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserController::destroy
* @see app/Http/Controllers/UserController.php:75
* @route '/user/{user}'
*/
destroy23dda6772f6db46a8f6f6832de949d00Form.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy23dda6772f6db46a8f6f6832de949d00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy23dda6772f6db46a8f6f6832de949d00.form = destroy23dda6772f6db46a8f6f6832de949d00Form

export const destroy = {
    '/api/users/{user}': destroy95c988f99103b85d110f99141c96fbb5,
    '/user/{user}': destroy23dda6772f6db46a8f6f6832de949d00,
}

const UserController = { index, store, show, update, destroy }

export default UserController