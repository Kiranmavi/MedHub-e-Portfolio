import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/placements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/placements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/placements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/placements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
export const show = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/placements/{placement}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
show.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { placement: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { placement: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            placement: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        placement: typeof args.placement === 'object'
        ? args.placement.id
        : args.placement,
    }

    return show.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
show.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
show.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
const showForm = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
showForm.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
showForm.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
export const show = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/placements/{placement}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { placement: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { placement: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            placement: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        placement: typeof args.placement === 'object'
        ? args.placement.id
        : args.placement,
    }

    return show.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
const showForm = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
showForm.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
showForm.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
export const update = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/placements/{placement}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
update.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { placement: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { placement: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            placement: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        placement: typeof args.placement === 'object'
        ? args.placement.id
        : args.placement,
    }

    return update.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
update.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
update.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
const updateForm = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
updateForm.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
updateForm.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
export const update = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/placements/{placement}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
update.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { placement: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { placement: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            placement: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        placement: typeof args.placement === 'object'
        ? args.placement.id
        : args.placement,
    }

    return update.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
update.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
update.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
const updateForm = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
updateForm.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
updateForm.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
export const destroy = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/placements/{placement}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
destroy.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { placement: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { placement: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            placement: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        placement: typeof args.placement === 'object'
        ? args.placement.id
        : args.placement,
    }

    return destroy.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
destroy.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
const destroyForm = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
destroyForm.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
export const destroy = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/placements/{placement}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
destroy.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { placement: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { placement: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            placement: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        placement: typeof args.placement === 'object'
        ? args.placement.id
        : args.placement,
    }

    return destroy.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
destroy.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
const destroyForm = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
destroyForm.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const placements = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default placements