import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/feedback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/api/feedback'
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
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/feedback',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::index
* @see app/Http/Controllers/FeedbackController.php:16
* @route '/feedback'
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
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/feedback',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/api/feedback'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/feedback',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FeedbackController::store
* @see app/Http/Controllers/FeedbackController.php:32
* @route '/feedback'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
export const show = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/feedback/{feedback}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
show.url = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
show.get = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
show.head = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
const showForm = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
showForm.get = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/api/feedback/{feedback}'
*/
showForm.head = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
export const show = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/feedback/{feedback}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show.url = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show.get = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
show.head = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
const showForm = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
showForm.get = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\FeedbackController::show
* @see app/Http/Controllers/FeedbackController.php:53
* @route '/feedback/{feedback}'
*/
showForm.head = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
export const update = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/feedback/{feedback}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
update.url = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
update.put = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
update.patch = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/api/feedback/{feedback}'
*/
const updateForm = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.put = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.patch = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
export const update = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/feedback/{feedback}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update.url = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update.put = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
update.patch = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FeedbackController::update
* @see app/Http/Controllers/FeedbackController.php:69
* @route '/feedback/{feedback}'
*/
const updateForm = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.put = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.patch = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
export const destroy = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/feedback/{feedback}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
destroy.url = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
destroy.delete = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/api/feedback/{feedback}'
*/
const destroyForm = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
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
destroyForm.delete = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
export const destroy = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/feedback/{feedback}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
destroy.url = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{feedback}', parsedArgs.feedback.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
destroy.delete = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\FeedbackController::destroy
* @see app/Http/Controllers/FeedbackController.php:88
* @route '/feedback/{feedback}'
*/
const destroyForm = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
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
destroyForm.delete = (args: { feedback: string | number | { id: string | number } } | [feedback: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const feedback = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default feedback