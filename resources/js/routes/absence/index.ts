import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/absence',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
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
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/absence',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
export const show = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/absence/{absence}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
show.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { absence: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { absence: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            absence: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        absence: typeof args.absence === 'object'
        ? args.absence.id
        : args.absence,
    }

    return show.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
show.get = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
show.head = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
const showForm = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
showForm.get = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
showForm.head = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
export const update = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/absence/{absence}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
update.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { absence: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { absence: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            absence: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        absence: typeof args.absence === 'object'
        ? args.absence.id
        : args.absence,
    }

    return update.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
update.put = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
update.patch = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
const updateForm = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
updateForm.put = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
updateForm.patch = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
export const destroy = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/absence/{absence}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
destroy.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { absence: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { absence: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            absence: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        absence: typeof args.absence === 'object'
        ? args.absence.id
        : args.absence,
    }

    return destroy.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
destroy.delete = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
const destroyForm = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
destroyForm.delete = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const absence = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default absence