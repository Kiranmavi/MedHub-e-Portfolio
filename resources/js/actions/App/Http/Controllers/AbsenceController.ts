import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/api/absences'
*/
const index5d4209b58ca310f68a34672d9bac4af8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'get',
})

index5d4209b58ca310f68a34672d9bac4af8.definition = {
    methods: ["get","head"],
    url: '/api/absences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/api/absences'
*/
index5d4209b58ca310f68a34672d9bac4af8.url = (options?: RouteQueryOptions) => {
    return index5d4209b58ca310f68a34672d9bac4af8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/api/absences'
*/
index5d4209b58ca310f68a34672d9bac4af8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/api/absences'
*/
index5d4209b58ca310f68a34672d9bac4af8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/api/absences'
*/
const index5d4209b58ca310f68a34672d9bac4af8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/api/absences'
*/
index5d4209b58ca310f68a34672d9bac4af8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/api/absences'
*/
index5d4209b58ca310f68a34672d9bac4af8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5d4209b58ca310f68a34672d9bac4af8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index5d4209b58ca310f68a34672d9bac4af8.form = index5d4209b58ca310f68a34672d9bac4af8Form
/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
const indexe58793e9c5ccbca768c19faa72a0bd6b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'get',
})

indexe58793e9c5ccbca768c19faa72a0bd6b.definition = {
    methods: ["get","head"],
    url: '/absence',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
indexe58793e9c5ccbca768c19faa72a0bd6b.url = (options?: RouteQueryOptions) => {
    return indexe58793e9c5ccbca768c19faa72a0bd6b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
indexe58793e9c5ccbca768c19faa72a0bd6b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
indexe58793e9c5ccbca768c19faa72a0bd6b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
const indexe58793e9c5ccbca768c19faa72a0bd6bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
indexe58793e9c5ccbca768c19faa72a0bd6bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::index
* @see app/Http/Controllers/AbsenceController.php:15
* @route '/absence'
*/
indexe58793e9c5ccbca768c19faa72a0bd6bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe58793e9c5ccbca768c19faa72a0bd6b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexe58793e9c5ccbca768c19faa72a0bd6b.form = indexe58793e9c5ccbca768c19faa72a0bd6bForm

export const index = {
    '/api/absences': index5d4209b58ca310f68a34672d9bac4af8,
    '/absence': indexe58793e9c5ccbca768c19faa72a0bd6b,
}

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/api/absences'
*/
const store5d4209b58ca310f68a34672d9bac4af8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'post',
})

store5d4209b58ca310f68a34672d9bac4af8.definition = {
    methods: ["post"],
    url: '/api/absences',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/api/absences'
*/
store5d4209b58ca310f68a34672d9bac4af8.url = (options?: RouteQueryOptions) => {
    return store5d4209b58ca310f68a34672d9bac4af8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/api/absences'
*/
store5d4209b58ca310f68a34672d9bac4af8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/api/absences'
*/
const store5d4209b58ca310f68a34672d9bac4af8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/api/absences'
*/
store5d4209b58ca310f68a34672d9bac4af8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store5d4209b58ca310f68a34672d9bac4af8.url(options),
    method: 'post',
})

store5d4209b58ca310f68a34672d9bac4af8.form = store5d4209b58ca310f68a34672d9bac4af8Form
/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
const storee58793e9c5ccbca768c19faa72a0bd6b = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'post',
})

storee58793e9c5ccbca768c19faa72a0bd6b.definition = {
    methods: ["post"],
    url: '/absence',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
storee58793e9c5ccbca768c19faa72a0bd6b.url = (options?: RouteQueryOptions) => {
    return storee58793e9c5ccbca768c19faa72a0bd6b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
storee58793e9c5ccbca768c19faa72a0bd6b.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
const storee58793e9c5ccbca768c19faa72a0bd6bForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storee58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AbsenceController::store
* @see app/Http/Controllers/AbsenceController.php:30
* @route '/absence'
*/
storee58793e9c5ccbca768c19faa72a0bd6bForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storee58793e9c5ccbca768c19faa72a0bd6b.url(options),
    method: 'post',
})

storee58793e9c5ccbca768c19faa72a0bd6b.form = storee58793e9c5ccbca768c19faa72a0bd6bForm

export const store = {
    '/api/absences': store5d4209b58ca310f68a34672d9bac4af8,
    '/absence': storee58793e9c5ccbca768c19faa72a0bd6b,
}

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/api/absences/{absence}'
*/
const show497699e14d5a6deffbc53d0e3fc43154 = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'get',
})

show497699e14d5a6deffbc53d0e3fc43154.definition = {
    methods: ["get","head"],
    url: '/api/absences/{absence}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/api/absences/{absence}'
*/
show497699e14d5a6deffbc53d0e3fc43154.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show497699e14d5a6deffbc53d0e3fc43154.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/api/absences/{absence}'
*/
show497699e14d5a6deffbc53d0e3fc43154.get = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/api/absences/{absence}'
*/
show497699e14d5a6deffbc53d0e3fc43154.head = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/api/absences/{absence}'
*/
const show497699e14d5a6deffbc53d0e3fc43154Form = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/api/absences/{absence}'
*/
show497699e14d5a6deffbc53d0e3fc43154Form.get = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/api/absences/{absence}'
*/
show497699e14d5a6deffbc53d0e3fc43154Form.head = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show497699e14d5a6deffbc53d0e3fc43154.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show497699e14d5a6deffbc53d0e3fc43154.form = show497699e14d5a6deffbc53d0e3fc43154Form
/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
const showba8a8cdfa8c187b354661adc86f9ae9a = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'get',
})

showba8a8cdfa8c187b354661adc86f9ae9a.definition = {
    methods: ["get","head"],
    url: '/absence/{absence}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
showba8a8cdfa8c187b354661adc86f9ae9a.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showba8a8cdfa8c187b354661adc86f9ae9a.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
showba8a8cdfa8c187b354661adc86f9ae9a.get = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
showba8a8cdfa8c187b354661adc86f9ae9a.head = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
const showba8a8cdfa8c187b354661adc86f9ae9aForm = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
showba8a8cdfa8c187b354661adc86f9ae9aForm.get = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AbsenceController::show
* @see app/Http/Controllers/AbsenceController.php:50
* @route '/absence/{absence}'
*/
showba8a8cdfa8c187b354661adc86f9ae9aForm.head = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showba8a8cdfa8c187b354661adc86f9ae9a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showba8a8cdfa8c187b354661adc86f9ae9a.form = showba8a8cdfa8c187b354661adc86f9ae9aForm

export const show = {
    '/api/absences/{absence}': show497699e14d5a6deffbc53d0e3fc43154,
    '/absence/{absence}': showba8a8cdfa8c187b354661adc86f9ae9a,
}

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/api/absences/{absence}'
*/
const update497699e14d5a6deffbc53d0e3fc43154 = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'put',
})

update497699e14d5a6deffbc53d0e3fc43154.definition = {
    methods: ["put","patch"],
    url: '/api/absences/{absence}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/api/absences/{absence}'
*/
update497699e14d5a6deffbc53d0e3fc43154.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update497699e14d5a6deffbc53d0e3fc43154.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/api/absences/{absence}'
*/
update497699e14d5a6deffbc53d0e3fc43154.put = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/api/absences/{absence}'
*/
update497699e14d5a6deffbc53d0e3fc43154.patch = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/api/absences/{absence}'
*/
const update497699e14d5a6deffbc53d0e3fc43154Form = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update497699e14d5a6deffbc53d0e3fc43154.url(args, {
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
* @route '/api/absences/{absence}'
*/
update497699e14d5a6deffbc53d0e3fc43154Form.put = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update497699e14d5a6deffbc53d0e3fc43154.url(args, {
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
* @route '/api/absences/{absence}'
*/
update497699e14d5a6deffbc53d0e3fc43154Form.patch = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update497699e14d5a6deffbc53d0e3fc43154.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update497699e14d5a6deffbc53d0e3fc43154.form = update497699e14d5a6deffbc53d0e3fc43154Form
/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
const updateba8a8cdfa8c187b354661adc86f9ae9a = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'put',
})

updateba8a8cdfa8c187b354661adc86f9ae9a.definition = {
    methods: ["put","patch"],
    url: '/absence/{absence}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
updateba8a8cdfa8c187b354661adc86f9ae9a.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateba8a8cdfa8c187b354661adc86f9ae9a.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
updateba8a8cdfa8c187b354661adc86f9ae9a.put = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
updateba8a8cdfa8c187b354661adc86f9ae9a.patch = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AbsenceController::update
* @see app/Http/Controllers/AbsenceController.php:77
* @route '/absence/{absence}'
*/
const updateba8a8cdfa8c187b354661adc86f9ae9aForm = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateba8a8cdfa8c187b354661adc86f9ae9a.url(args, {
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
updateba8a8cdfa8c187b354661adc86f9ae9aForm.put = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateba8a8cdfa8c187b354661adc86f9ae9a.url(args, {
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
updateba8a8cdfa8c187b354661adc86f9ae9aForm.patch = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateba8a8cdfa8c187b354661adc86f9ae9a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateba8a8cdfa8c187b354661adc86f9ae9a.form = updateba8a8cdfa8c187b354661adc86f9ae9aForm

export const update = {
    '/api/absences/{absence}': update497699e14d5a6deffbc53d0e3fc43154,
    '/absence/{absence}': updateba8a8cdfa8c187b354661adc86f9ae9a,
}

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/api/absences/{absence}'
*/
const destroy497699e14d5a6deffbc53d0e3fc43154 = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'delete',
})

destroy497699e14d5a6deffbc53d0e3fc43154.definition = {
    methods: ["delete"],
    url: '/api/absences/{absence}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/api/absences/{absence}'
*/
destroy497699e14d5a6deffbc53d0e3fc43154.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy497699e14d5a6deffbc53d0e3fc43154.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/api/absences/{absence}'
*/
destroy497699e14d5a6deffbc53d0e3fc43154.delete = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy497699e14d5a6deffbc53d0e3fc43154.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/api/absences/{absence}'
*/
const destroy497699e14d5a6deffbc53d0e3fc43154Form = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy497699e14d5a6deffbc53d0e3fc43154.url(args, {
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
* @route '/api/absences/{absence}'
*/
destroy497699e14d5a6deffbc53d0e3fc43154Form.delete = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy497699e14d5a6deffbc53d0e3fc43154.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy497699e14d5a6deffbc53d0e3fc43154.form = destroy497699e14d5a6deffbc53d0e3fc43154Form
/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
const destroyba8a8cdfa8c187b354661adc86f9ae9a = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'delete',
})

destroyba8a8cdfa8c187b354661adc86f9ae9a.definition = {
    methods: ["delete"],
    url: '/absence/{absence}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
destroyba8a8cdfa8c187b354661adc86f9ae9a.url = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroyba8a8cdfa8c187b354661adc86f9ae9a.definition.url
            .replace('{absence}', parsedArgs.absence.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
destroyba8a8cdfa8c187b354661adc86f9ae9a.delete = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyba8a8cdfa8c187b354661adc86f9ae9a.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AbsenceController::destroy
* @see app/Http/Controllers/AbsenceController.php:96
* @route '/absence/{absence}'
*/
const destroyba8a8cdfa8c187b354661adc86f9ae9aForm = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyba8a8cdfa8c187b354661adc86f9ae9a.url(args, {
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
destroyba8a8cdfa8c187b354661adc86f9ae9aForm.delete = (args: { absence: number | { id: number } } | [absence: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyba8a8cdfa8c187b354661adc86f9ae9a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyba8a8cdfa8c187b354661adc86f9ae9a.form = destroyba8a8cdfa8c187b354661adc86f9ae9aForm

export const destroy = {
    '/api/absences/{absence}': destroy497699e14d5a6deffbc53d0e3fc43154,
    '/absence/{absence}': destroyba8a8cdfa8c187b354661adc86f9ae9a,
}

const AbsenceController = { index, store, show, update, destroy }

export default AbsenceController