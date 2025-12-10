import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/api/students'
*/
const index57c3c4c0328bad3e33120dc1f25051c2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'get',
})

index57c3c4c0328bad3e33120dc1f25051c2.definition = {
    methods: ["get","head"],
    url: '/api/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/api/students'
*/
index57c3c4c0328bad3e33120dc1f25051c2.url = (options?: RouteQueryOptions) => {
    return index57c3c4c0328bad3e33120dc1f25051c2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/api/students'
*/
index57c3c4c0328bad3e33120dc1f25051c2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/api/students'
*/
index57c3c4c0328bad3e33120dc1f25051c2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/api/students'
*/
const index57c3c4c0328bad3e33120dc1f25051c2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/api/students'
*/
index57c3c4c0328bad3e33120dc1f25051c2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/api/students'
*/
index57c3c4c0328bad3e33120dc1f25051c2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index57c3c4c0328bad3e33120dc1f25051c2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index57c3c4c0328bad3e33120dc1f25051c2.form = index57c3c4c0328bad3e33120dc1f25051c2Form
/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
const index750319cbfe81e0c4644d439731acf91e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'get',
})

index750319cbfe81e0c4644d439731acf91e.definition = {
    methods: ["get","head"],
    url: '/student',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index750319cbfe81e0c4644d439731acf91e.url = (options?: RouteQueryOptions) => {
    return index750319cbfe81e0c4644d439731acf91e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index750319cbfe81e0c4644d439731acf91e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index750319cbfe81e0c4644d439731acf91e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
const index750319cbfe81e0c4644d439731acf91eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index750319cbfe81e0c4644d439731acf91eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::index
* @see app/Http/Controllers/StudentController.php:13
* @route '/student'
*/
index750319cbfe81e0c4644d439731acf91eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index750319cbfe81e0c4644d439731acf91e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index750319cbfe81e0c4644d439731acf91e.form = index750319cbfe81e0c4644d439731acf91eForm

export const index = {
    '/api/students': index57c3c4c0328bad3e33120dc1f25051c2,
    '/student': index750319cbfe81e0c4644d439731acf91e,
}

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/api/students'
*/
const store57c3c4c0328bad3e33120dc1f25051c2 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'post',
})

store57c3c4c0328bad3e33120dc1f25051c2.definition = {
    methods: ["post"],
    url: '/api/students',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/api/students'
*/
store57c3c4c0328bad3e33120dc1f25051c2.url = (options?: RouteQueryOptions) => {
    return store57c3c4c0328bad3e33120dc1f25051c2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/api/students'
*/
store57c3c4c0328bad3e33120dc1f25051c2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/api/students'
*/
const store57c3c4c0328bad3e33120dc1f25051c2Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/api/students'
*/
store57c3c4c0328bad3e33120dc1f25051c2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store57c3c4c0328bad3e33120dc1f25051c2.url(options),
    method: 'post',
})

store57c3c4c0328bad3e33120dc1f25051c2.form = store57c3c4c0328bad3e33120dc1f25051c2Form
/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
const store750319cbfe81e0c4644d439731acf91e = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'post',
})

store750319cbfe81e0c4644d439731acf91e.definition = {
    methods: ["post"],
    url: '/student',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
store750319cbfe81e0c4644d439731acf91e.url = (options?: RouteQueryOptions) => {
    return store750319cbfe81e0c4644d439731acf91e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
store750319cbfe81e0c4644d439731acf91e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
const store750319cbfe81e0c4644d439731acf91eForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\StudentController::store
* @see app/Http/Controllers/StudentController.php:29
* @route '/student'
*/
store750319cbfe81e0c4644d439731acf91eForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store750319cbfe81e0c4644d439731acf91e.url(options),
    method: 'post',
})

store750319cbfe81e0c4644d439731acf91e.form = store750319cbfe81e0c4644d439731acf91eForm

export const store = {
    '/api/students': store57c3c4c0328bad3e33120dc1f25051c2,
    '/student': store750319cbfe81e0c4644d439731acf91e,
}

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/api/students/{student}'
*/
const show555b53a91b35a83faac341faf2299f0b = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'get',
})

show555b53a91b35a83faac341faf2299f0b.definition = {
    methods: ["get","head"],
    url: '/api/students/{student}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/api/students/{student}'
*/
show555b53a91b35a83faac341faf2299f0b.url = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show555b53a91b35a83faac341faf2299f0b.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/api/students/{student}'
*/
show555b53a91b35a83faac341faf2299f0b.get = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/api/students/{student}'
*/
show555b53a91b35a83faac341faf2299f0b.head = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/api/students/{student}'
*/
const show555b53a91b35a83faac341faf2299f0bForm = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/api/students/{student}'
*/
show555b53a91b35a83faac341faf2299f0bForm.get = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/api/students/{student}'
*/
show555b53a91b35a83faac341faf2299f0bForm.head = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show555b53a91b35a83faac341faf2299f0b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show555b53a91b35a83faac341faf2299f0b.form = show555b53a91b35a83faac341faf2299f0bForm
/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
const show21b324e73beef677150d0a816261f607 = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show21b324e73beef677150d0a816261f607.url(args, options),
    method: 'get',
})

show21b324e73beef677150d0a816261f607.definition = {
    methods: ["get","head"],
    url: '/student/{student}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show21b324e73beef677150d0a816261f607.url = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show21b324e73beef677150d0a816261f607.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show21b324e73beef677150d0a816261f607.get = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show21b324e73beef677150d0a816261f607.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show21b324e73beef677150d0a816261f607.head = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show21b324e73beef677150d0a816261f607.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
const show21b324e73beef677150d0a816261f607Form = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show21b324e73beef677150d0a816261f607.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show21b324e73beef677150d0a816261f607Form.get = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show21b324e73beef677150d0a816261f607.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\StudentController::show
* @see app/Http/Controllers/StudentController.php:44
* @route '/student/{student}'
*/
show21b324e73beef677150d0a816261f607Form.head = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show21b324e73beef677150d0a816261f607.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show21b324e73beef677150d0a816261f607.form = show21b324e73beef677150d0a816261f607Form

export const show = {
    '/api/students/{student}': show555b53a91b35a83faac341faf2299f0b,
    '/student/{student}': show21b324e73beef677150d0a816261f607,
}

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/api/students/{student}'
*/
const update555b53a91b35a83faac341faf2299f0b = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'put',
})

update555b53a91b35a83faac341faf2299f0b.definition = {
    methods: ["put","patch"],
    url: '/api/students/{student}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/api/students/{student}'
*/
update555b53a91b35a83faac341faf2299f0b.url = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update555b53a91b35a83faac341faf2299f0b.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/api/students/{student}'
*/
update555b53a91b35a83faac341faf2299f0b.put = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/api/students/{student}'
*/
update555b53a91b35a83faac341faf2299f0b.patch = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/api/students/{student}'
*/
const update555b53a91b35a83faac341faf2299f0bForm = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update555b53a91b35a83faac341faf2299f0b.url(args, {
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
* @route '/api/students/{student}'
*/
update555b53a91b35a83faac341faf2299f0bForm.put = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update555b53a91b35a83faac341faf2299f0b.url(args, {
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
* @route '/api/students/{student}'
*/
update555b53a91b35a83faac341faf2299f0bForm.patch = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update555b53a91b35a83faac341faf2299f0b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update555b53a91b35a83faac341faf2299f0b.form = update555b53a91b35a83faac341faf2299f0bForm
/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
const update21b324e73beef677150d0a816261f607 = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update21b324e73beef677150d0a816261f607.url(args, options),
    method: 'put',
})

update21b324e73beef677150d0a816261f607.definition = {
    methods: ["put","patch"],
    url: '/student/{student}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
update21b324e73beef677150d0a816261f607.url = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update21b324e73beef677150d0a816261f607.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
update21b324e73beef677150d0a816261f607.put = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update21b324e73beef677150d0a816261f607.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
update21b324e73beef677150d0a816261f607.patch = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update21b324e73beef677150d0a816261f607.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\StudentController::update
* @see app/Http/Controllers/StudentController.php:60
* @route '/student/{student}'
*/
const update21b324e73beef677150d0a816261f607Form = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update21b324e73beef677150d0a816261f607.url(args, {
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
update21b324e73beef677150d0a816261f607Form.put = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update21b324e73beef677150d0a816261f607.url(args, {
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
update21b324e73beef677150d0a816261f607Form.patch = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update21b324e73beef677150d0a816261f607.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update21b324e73beef677150d0a816261f607.form = update21b324e73beef677150d0a816261f607Form

export const update = {
    '/api/students/{student}': update555b53a91b35a83faac341faf2299f0b,
    '/student/{student}': update21b324e73beef677150d0a816261f607,
}

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/api/students/{student}'
*/
const destroy555b53a91b35a83faac341faf2299f0b = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'delete',
})

destroy555b53a91b35a83faac341faf2299f0b.definition = {
    methods: ["delete"],
    url: '/api/students/{student}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/api/students/{student}'
*/
destroy555b53a91b35a83faac341faf2299f0b.url = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy555b53a91b35a83faac341faf2299f0b.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/api/students/{student}'
*/
destroy555b53a91b35a83faac341faf2299f0b.delete = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy555b53a91b35a83faac341faf2299f0b.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/api/students/{student}'
*/
const destroy555b53a91b35a83faac341faf2299f0bForm = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy555b53a91b35a83faac341faf2299f0b.url(args, {
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
* @route '/api/students/{student}'
*/
destroy555b53a91b35a83faac341faf2299f0bForm.delete = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy555b53a91b35a83faac341faf2299f0b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy555b53a91b35a83faac341faf2299f0b.form = destroy555b53a91b35a83faac341faf2299f0bForm
/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
const destroy21b324e73beef677150d0a816261f607 = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy21b324e73beef677150d0a816261f607.url(args, options),
    method: 'delete',
})

destroy21b324e73beef677150d0a816261f607.definition = {
    methods: ["delete"],
    url: '/student/{student}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
destroy21b324e73beef677150d0a816261f607.url = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy21b324e73beef677150d0a816261f607.definition.url
            .replace('{student}', parsedArgs.student.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
destroy21b324e73beef677150d0a816261f607.delete = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy21b324e73beef677150d0a816261f607.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\StudentController::destroy
* @see app/Http/Controllers/StudentController.php:74
* @route '/student/{student}'
*/
const destroy21b324e73beef677150d0a816261f607Form = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy21b324e73beef677150d0a816261f607.url(args, {
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
destroy21b324e73beef677150d0a816261f607Form.delete = (args: { student: string | number | { id: string | number } } | [student: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy21b324e73beef677150d0a816261f607.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy21b324e73beef677150d0a816261f607.form = destroy21b324e73beef677150d0a816261f607Form

export const destroy = {
    '/api/students/{student}': destroy555b53a91b35a83faac341faf2299f0b,
    '/student/{student}': destroy21b324e73beef677150d0a816261f607,
}

const StudentController = { index, store, show, update, destroy }

export default StudentController