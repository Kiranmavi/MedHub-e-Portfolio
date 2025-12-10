import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
const indexf7508d4f3d171773021d3e4684f07af0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'get',
})

indexf7508d4f3d171773021d3e4684f07af0.definition = {
    methods: ["get","head"],
    url: '/api/placements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
indexf7508d4f3d171773021d3e4684f07af0.url = (options?: RouteQueryOptions) => {
    return indexf7508d4f3d171773021d3e4684f07af0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
indexf7508d4f3d171773021d3e4684f07af0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
indexf7508d4f3d171773021d3e4684f07af0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
const indexf7508d4f3d171773021d3e4684f07af0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
indexf7508d4f3d171773021d3e4684f07af0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/api/placements'
*/
indexf7508d4f3d171773021d3e4684f07af0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf7508d4f3d171773021d3e4684f07af0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexf7508d4f3d171773021d3e4684f07af0.form = indexf7508d4f3d171773021d3e4684f07af0Form
/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
const index4baf1048f4ad56f35707b64e9246f5c6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'get',
})

index4baf1048f4ad56f35707b64e9246f5c6.definition = {
    methods: ["get","head"],
    url: '/placements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index4baf1048f4ad56f35707b64e9246f5c6.url = (options?: RouteQueryOptions) => {
    return index4baf1048f4ad56f35707b64e9246f5c6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index4baf1048f4ad56f35707b64e9246f5c6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index4baf1048f4ad56f35707b64e9246f5c6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
const index4baf1048f4ad56f35707b64e9246f5c6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index4baf1048f4ad56f35707b64e9246f5c6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::index
* @see app/Http/Controllers/PlacementController.php:15
* @route '/placements'
*/
index4baf1048f4ad56f35707b64e9246f5c6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4baf1048f4ad56f35707b64e9246f5c6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4baf1048f4ad56f35707b64e9246f5c6.form = index4baf1048f4ad56f35707b64e9246f5c6Form

export const index = {
    '/api/placements': indexf7508d4f3d171773021d3e4684f07af0,
    '/placements': index4baf1048f4ad56f35707b64e9246f5c6,
}

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
const storef7508d4f3d171773021d3e4684f07af0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'post',
})

storef7508d4f3d171773021d3e4684f07af0.definition = {
    methods: ["post"],
    url: '/api/placements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
storef7508d4f3d171773021d3e4684f07af0.url = (options?: RouteQueryOptions) => {
    return storef7508d4f3d171773021d3e4684f07af0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
storef7508d4f3d171773021d3e4684f07af0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
const storef7508d4f3d171773021d3e4684f07af0Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/api/placements'
*/
storef7508d4f3d171773021d3e4684f07af0Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef7508d4f3d171773021d3e4684f07af0.url(options),
    method: 'post',
})

storef7508d4f3d171773021d3e4684f07af0.form = storef7508d4f3d171773021d3e4684f07af0Form
/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
const store4baf1048f4ad56f35707b64e9246f5c6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'post',
})

store4baf1048f4ad56f35707b64e9246f5c6.definition = {
    methods: ["post"],
    url: '/placements',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
store4baf1048f4ad56f35707b64e9246f5c6.url = (options?: RouteQueryOptions) => {
    return store4baf1048f4ad56f35707b64e9246f5c6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
store4baf1048f4ad56f35707b64e9246f5c6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
const store4baf1048f4ad56f35707b64e9246f5c6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlacementController::store
* @see app/Http/Controllers/PlacementController.php:31
* @route '/placements'
*/
store4baf1048f4ad56f35707b64e9246f5c6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4baf1048f4ad56f35707b64e9246f5c6.url(options),
    method: 'post',
})

store4baf1048f4ad56f35707b64e9246f5c6.form = store4baf1048f4ad56f35707b64e9246f5c6Form

export const store = {
    '/api/placements': storef7508d4f3d171773021d3e4684f07af0,
    '/placements': store4baf1048f4ad56f35707b64e9246f5c6,
}

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
const showef53e41d190769ecfa8d927c4995c043 = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'get',
})

showef53e41d190769ecfa8d927c4995c043.definition = {
    methods: ["get","head"],
    url: '/api/placements/{placement}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
showef53e41d190769ecfa8d927c4995c043.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return showef53e41d190769ecfa8d927c4995c043.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
showef53e41d190769ecfa8d927c4995c043.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
showef53e41d190769ecfa8d927c4995c043.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
const showef53e41d190769ecfa8d927c4995c043Form = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
showef53e41d190769ecfa8d927c4995c043Form.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/api/placements/{placement}'
*/
showef53e41d190769ecfa8d927c4995c043Form.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showef53e41d190769ecfa8d927c4995c043.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showef53e41d190769ecfa8d927c4995c043.form = showef53e41d190769ecfa8d927c4995c043Form
/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
const show1c82b56cc75036a6020750aaf26bd7e6 = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'get',
})

show1c82b56cc75036a6020750aaf26bd7e6.definition = {
    methods: ["get","head"],
    url: '/placements/{placement}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show1c82b56cc75036a6020750aaf26bd7e6.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show1c82b56cc75036a6020750aaf26bd7e6.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show1c82b56cc75036a6020750aaf26bd7e6.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show1c82b56cc75036a6020750aaf26bd7e6.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
const show1c82b56cc75036a6020750aaf26bd7e6Form = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show1c82b56cc75036a6020750aaf26bd7e6Form.get = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlacementController::show
* @see app/Http/Controllers/PlacementController.php:52
* @route '/placements/{placement}'
*/
show1c82b56cc75036a6020750aaf26bd7e6Form.head = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show1c82b56cc75036a6020750aaf26bd7e6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show1c82b56cc75036a6020750aaf26bd7e6.form = show1c82b56cc75036a6020750aaf26bd7e6Form

export const show = {
    '/api/placements/{placement}': showef53e41d190769ecfa8d927c4995c043,
    '/placements/{placement}': show1c82b56cc75036a6020750aaf26bd7e6,
}

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
const updateef53e41d190769ecfa8d927c4995c043 = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'put',
})

updateef53e41d190769ecfa8d927c4995c043.definition = {
    methods: ["put","patch"],
    url: '/api/placements/{placement}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
updateef53e41d190769ecfa8d927c4995c043.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateef53e41d190769ecfa8d927c4995c043.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
updateef53e41d190769ecfa8d927c4995c043.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
updateef53e41d190769ecfa8d927c4995c043.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/api/placements/{placement}'
*/
const updateef53e41d190769ecfa8d927c4995c043Form = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateef53e41d190769ecfa8d927c4995c043.url(args, {
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
updateef53e41d190769ecfa8d927c4995c043Form.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateef53e41d190769ecfa8d927c4995c043.url(args, {
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
updateef53e41d190769ecfa8d927c4995c043Form.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateef53e41d190769ecfa8d927c4995c043.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateef53e41d190769ecfa8d927c4995c043.form = updateef53e41d190769ecfa8d927c4995c043Form
/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
const update1c82b56cc75036a6020750aaf26bd7e6 = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'put',
})

update1c82b56cc75036a6020750aaf26bd7e6.definition = {
    methods: ["put","patch"],
    url: '/placements/{placement}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
update1c82b56cc75036a6020750aaf26bd7e6.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update1c82b56cc75036a6020750aaf26bd7e6.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
update1c82b56cc75036a6020750aaf26bd7e6.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
update1c82b56cc75036a6020750aaf26bd7e6.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PlacementController::update
* @see app/Http/Controllers/PlacementController.php:68
* @route '/placements/{placement}'
*/
const update1c82b56cc75036a6020750aaf26bd7e6Form = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1c82b56cc75036a6020750aaf26bd7e6.url(args, {
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
update1c82b56cc75036a6020750aaf26bd7e6Form.put = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1c82b56cc75036a6020750aaf26bd7e6.url(args, {
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
update1c82b56cc75036a6020750aaf26bd7e6Form.patch = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1c82b56cc75036a6020750aaf26bd7e6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update1c82b56cc75036a6020750aaf26bd7e6.form = update1c82b56cc75036a6020750aaf26bd7e6Form

export const update = {
    '/api/placements/{placement}': updateef53e41d190769ecfa8d927c4995c043,
    '/placements/{placement}': update1c82b56cc75036a6020750aaf26bd7e6,
}

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
const destroyef53e41d190769ecfa8d927c4995c043 = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'delete',
})

destroyef53e41d190769ecfa8d927c4995c043.definition = {
    methods: ["delete"],
    url: '/api/placements/{placement}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
destroyef53e41d190769ecfa8d927c4995c043.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroyef53e41d190769ecfa8d927c4995c043.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
destroyef53e41d190769ecfa8d927c4995c043.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyef53e41d190769ecfa8d927c4995c043.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/api/placements/{placement}'
*/
const destroyef53e41d190769ecfa8d927c4995c043Form = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyef53e41d190769ecfa8d927c4995c043.url(args, {
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
destroyef53e41d190769ecfa8d927c4995c043Form.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyef53e41d190769ecfa8d927c4995c043.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyef53e41d190769ecfa8d927c4995c043.form = destroyef53e41d190769ecfa8d927c4995c043Form
/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
const destroy1c82b56cc75036a6020750aaf26bd7e6 = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'delete',
})

destroy1c82b56cc75036a6020750aaf26bd7e6.definition = {
    methods: ["delete"],
    url: '/placements/{placement}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
destroy1c82b56cc75036a6020750aaf26bd7e6.url = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy1c82b56cc75036a6020750aaf26bd7e6.definition.url
            .replace('{placement}', parsedArgs.placement.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
destroy1c82b56cc75036a6020750aaf26bd7e6.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy1c82b56cc75036a6020750aaf26bd7e6.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PlacementController::destroy
* @see app/Http/Controllers/PlacementController.php:89
* @route '/placements/{placement}'
*/
const destroy1c82b56cc75036a6020750aaf26bd7e6Form = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy1c82b56cc75036a6020750aaf26bd7e6.url(args, {
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
destroy1c82b56cc75036a6020750aaf26bd7e6Form.delete = (args: { placement: string | number | { id: string | number } } | [placement: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy1c82b56cc75036a6020750aaf26bd7e6.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy1c82b56cc75036a6020750aaf26bd7e6.form = destroy1c82b56cc75036a6020750aaf26bd7e6Form

export const destroy = {
    '/api/placements/{placement}': destroyef53e41d190769ecfa8d927c4995c043,
    '/placements/{placement}': destroy1c82b56cc75036a6020750aaf26bd7e6,
}

const PlacementController = { index, store, show, update, destroy }

export default PlacementController