import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
const index697bf01eadbce20b821f98ac04d4ab42 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'get',
})

index697bf01eadbce20b821f98ac04d4ab42.definition = {
    methods: ["get","head"],
    url: '/api/feedback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index697bf01eadbce20b821f98ac04d4ab42.url = (options?: RouteQueryOptions) => {
    return index697bf01eadbce20b821f98ac04d4ab42.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index697bf01eadbce20b821f98ac04d4ab42.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index697bf01eadbce20b821f98ac04d4ab42.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
const index697bf01eadbce20b821f98ac04d4ab42Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index697bf01eadbce20b821f98ac04d4ab42Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index697bf01eadbce20b821f98ac04d4ab42Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index697bf01eadbce20b821f98ac04d4ab42.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index697bf01eadbce20b821f98ac04d4ab42.form = index697bf01eadbce20b821f98ac04d4ab42Form
/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
const index2a2b822ac2c60ebaa71525865e5e1a39 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'get',
})

index2a2b822ac2c60ebaa71525865e5e1a39.definition = {
    methods: ["get","head"],
    url: '/feedback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index2a2b822ac2c60ebaa71525865e5e1a39.url = (options?: RouteQueryOptions) => {
    return index2a2b822ac2c60ebaa71525865e5e1a39.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index2a2b822ac2c60ebaa71525865e5e1a39.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index2a2b822ac2c60ebaa71525865e5e1a39.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
const index2a2b822ac2c60ebaa71525865e5e1a39Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index2a2b822ac2c60ebaa71525865e5e1a39Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index2a2b822ac2c60ebaa71525865e5e1a39Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index2a2b822ac2c60ebaa71525865e5e1a39.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index2a2b822ac2c60ebaa71525865e5e1a39.form = index2a2b822ac2c60ebaa71525865e5e1a39Form

export const index = {
    '/api/feedback': index697bf01eadbce20b821f98ac04d4ab42,
    '/feedback': index2a2b822ac2c60ebaa71525865e5e1a39,
}

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
const store697bf01eadbce20b821f98ac04d4ab42 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'post',
})

store697bf01eadbce20b821f98ac04d4ab42.definition = {
    methods: ["post"],
    url: '/api/feedback',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
store697bf01eadbce20b821f98ac04d4ab42.url = (options?: RouteQueryOptions) => {
    return store697bf01eadbce20b821f98ac04d4ab42.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
store697bf01eadbce20b821f98ac04d4ab42.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
const store697bf01eadbce20b821f98ac04d4ab42Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
store697bf01eadbce20b821f98ac04d4ab42Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store697bf01eadbce20b821f98ac04d4ab42.url(options),
    method: 'post',
})

store697bf01eadbce20b821f98ac04d4ab42.form = store697bf01eadbce20b821f98ac04d4ab42Form
/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
const store2a2b822ac2c60ebaa71525865e5e1a39 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'post',
})

store2a2b822ac2c60ebaa71525865e5e1a39.definition = {
    methods: ["post"],
    url: '/feedback',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
store2a2b822ac2c60ebaa71525865e5e1a39.url = (options?: RouteQueryOptions) => {
    return store2a2b822ac2c60ebaa71525865e5e1a39.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
store2a2b822ac2c60ebaa71525865e5e1a39.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
const store2a2b822ac2c60ebaa71525865e5e1a39Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
store2a2b822ac2c60ebaa71525865e5e1a39Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store2a2b822ac2c60ebaa71525865e5e1a39.url(options),
    method: 'post',
})

store2a2b822ac2c60ebaa71525865e5e1a39.form = store2a2b822ac2c60ebaa71525865e5e1a39Form

export const store = {
    '/api/feedback': store697bf01eadbce20b821f98ac04d4ab42,
    '/feedback': store2a2b822ac2c60ebaa71525865e5e1a39,
}

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
const showb490fb02e884b465b2760e866ecad310 = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'get',
})

showb490fb02e884b465b2760e866ecad310.definition = {
    methods: ["get","head"],
    url: '/api/feedback/{feedback}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
showb490fb02e884b465b2760e866ecad310.url = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { feedback: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { feedback: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            feedback: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        feedback: typeof args.feedback === 'object'
        ? args.feedback.id
        : args.feedback,
    }

    return showb490fb02e884b465b2760e866ecad310.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
showb490fb02e884b465b2760e866ecad310.get = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
showb490fb02e884b465b2760e866ecad310.head = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
const showb490fb02e884b465b2760e866ecad310Form = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
showb490fb02e884b465b2760e866ecad310Form.get = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
showb490fb02e884b465b2760e866ecad310Form.head = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showb490fb02e884b465b2760e866ecad310.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showb490fb02e884b465b2760e866ecad310.form = showb490fb02e884b465b2760e866ecad310Form
/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
const show20f5eac304c12f847f576957c5c9cf0c = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'get',
})

show20f5eac304c12f847f576957c5c9cf0c.definition = {
    methods: ["get","head"],
    url: '/feedback/{feedback}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show20f5eac304c12f847f576957c5c9cf0c.url = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { feedback: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { feedback: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            feedback: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        feedback: typeof args.feedback === 'object'
        ? args.feedback.id
        : args.feedback,
    }

    return show20f5eac304c12f847f576957c5c9cf0c.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show20f5eac304c12f847f576957c5c9cf0c.get = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show20f5eac304c12f847f576957c5c9cf0c.head = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
const show20f5eac304c12f847f576957c5c9cf0cForm = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show20f5eac304c12f847f576957c5c9cf0cForm.get = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show20f5eac304c12f847f576957c5c9cf0cForm.head = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show20f5eac304c12f847f576957c5c9cf0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show20f5eac304c12f847f576957c5c9cf0c.form = show20f5eac304c12f847f576957c5c9cf0cForm

export const show = {
    '/api/feedback/{feedback}': showb490fb02e884b465b2760e866ecad310,
    '/feedback/{feedback}': show20f5eac304c12f847f576957c5c9cf0c,
}

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
const updateb490fb02e884b465b2760e866ecad310 = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'put',
})

updateb490fb02e884b465b2760e866ecad310.definition = {
    methods: ["put","patch"],
    url: '/api/feedback/{feedback}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
updateb490fb02e884b465b2760e866ecad310.url = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { feedback: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { feedback: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            feedback: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        feedback: typeof args.feedback === 'object'
        ? args.feedback.id
        : args.feedback,
    }

    return updateb490fb02e884b465b2760e866ecad310.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
updateb490fb02e884b465b2760e866ecad310.put = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
updateb490fb02e884b465b2760e866ecad310.patch = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
const updateb490fb02e884b465b2760e866ecad310Form = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb490fb02e884b465b2760e866ecad310.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
updateb490fb02e884b465b2760e866ecad310Form.put = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb490fb02e884b465b2760e866ecad310.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
updateb490fb02e884b465b2760e866ecad310Form.patch = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateb490fb02e884b465b2760e866ecad310.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateb490fb02e884b465b2760e866ecad310.form = updateb490fb02e884b465b2760e866ecad310Form
/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
const update20f5eac304c12f847f576957c5c9cf0c = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'put',
})

update20f5eac304c12f847f576957c5c9cf0c.definition = {
    methods: ["put","patch"],
    url: '/feedback/{feedback}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update20f5eac304c12f847f576957c5c9cf0c.url = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { feedback: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { feedback: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            feedback: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        feedback: typeof args.feedback === 'object'
        ? args.feedback.id
        : args.feedback,
    }

    return update20f5eac304c12f847f576957c5c9cf0c.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update20f5eac304c12f847f576957c5c9cf0c.put = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update20f5eac304c12f847f576957c5c9cf0c.patch = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
const update20f5eac304c12f847f576957c5c9cf0cForm = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update20f5eac304c12f847f576957c5c9cf0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update20f5eac304c12f847f576957c5c9cf0cForm.put = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update20f5eac304c12f847f576957c5c9cf0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update20f5eac304c12f847f576957c5c9cf0cForm.patch = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update20f5eac304c12f847f576957c5c9cf0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update20f5eac304c12f847f576957c5c9cf0c.form = update20f5eac304c12f847f576957c5c9cf0cForm

export const update = {
    '/api/feedback/{feedback}': updateb490fb02e884b465b2760e866ecad310,
    '/feedback/{feedback}': update20f5eac304c12f847f576957c5c9cf0c,
}

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
const destroyb490fb02e884b465b2760e866ecad310 = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'delete',
})

destroyb490fb02e884b465b2760e866ecad310.definition = {
    methods: ["delete"],
    url: '/api/feedback/{feedback}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
destroyb490fb02e884b465b2760e866ecad310.url = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { feedback: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { feedback: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            feedback: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        feedback: typeof args.feedback === 'object'
        ? args.feedback.id
        : args.feedback,
    }

    return destroyb490fb02e884b465b2760e866ecad310.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
destroyb490fb02e884b465b2760e866ecad310.delete = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyb490fb02e884b465b2760e866ecad310.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
const destroyb490fb02e884b465b2760e866ecad310Form = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb490fb02e884b465b2760e866ecad310.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
destroyb490fb02e884b465b2760e866ecad310Form.delete = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyb490fb02e884b465b2760e866ecad310.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyb490fb02e884b465b2760e866ecad310.form = destroyb490fb02e884b465b2760e866ecad310Form
/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
const destroy20f5eac304c12f847f576957c5c9cf0c = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'delete',
})

destroy20f5eac304c12f847f576957c5c9cf0c.definition = {
    methods: ["delete"],
    url: '/feedback/{feedback}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
destroy20f5eac304c12f847f576957c5c9cf0c.url = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { feedback: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { feedback: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            feedback: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        feedback: typeof args.feedback === 'object'
        ? args.feedback.id
        : args.feedback,
    }

    return destroy20f5eac304c12f847f576957c5c9cf0c.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
destroy20f5eac304c12f847f576957c5c9cf0c.delete = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy20f5eac304c12f847f576957c5c9cf0c.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
const destroy20f5eac304c12f847f576957c5c9cf0cForm = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy20f5eac304c12f847f576957c5c9cf0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
destroy20f5eac304c12f847f576957c5c9cf0cForm.delete = (args: { feedback: number | { id: number } } | [feedback: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy20f5eac304c12f847f576957c5c9cf0c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy20f5eac304c12f847f576957c5c9cf0c.form = destroy20f5eac304c12f847f576957c5c9cf0cForm

export const destroy = {
    '/api/feedback/{feedback}': destroyb490fb02e884b465b2760e866ecad310,
    '/feedback/{feedback}': destroy20f5eac304c12f847f576957c5c9cf0c,
}

const FeedbackController = { index, store, show, update, destroy }

export default FeedbackController