import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/student',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
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
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/student',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
export const show = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/student/{student}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show.url = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        student: typeof args.student === 'object'
        ? args.student.id
        : args.student,
    }

    return show.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show.get = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show.head = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
const showForm = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
showForm.get = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
showForm.head = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
export const update = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/student/{student}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
update.url = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        student: typeof args.student === 'object'
        ? args.student.id
        : args.student,
    }

    return update.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
update.put = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
update.patch = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
const updateForm = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
updateForm.put = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
updateForm.patch = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
export const destroy = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/student/{student}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
destroy.url = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { student: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { student: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            student: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        student: typeof args.student === 'object'
        ? args.student.id
        : args.student,
    }

    return destroy.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
destroy.delete = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
const destroyForm = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
destroyForm.delete = (args: { student: number | { id: number } } | [student: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const student = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default student