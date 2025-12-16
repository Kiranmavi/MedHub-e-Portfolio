# Feedback Notification Solution for Students

## Overview
This document explains how to notify students in the dashboard when a supervisor provides feedback on their placements.

## Solution Approaches

### **Approach 1: Badge/Count Indicator (Recommended - Simple & Effective)**

#### Implementation Steps:

1. **Add `is_read` field to feedback table**
   - Create migration to add `is_read` boolean column (default: false)
   - This tracks if student has seen the feedback

2. **Update Dashboard Route (routes/web.php)**
   ```php
   Route::get('dashboard', function () {
       // ... existing code ...
       
       // Count unread feedback for students
       $unreadFeedbackCount = 0;
       if ($role === 'student' && $user) {
           $student = \App\Models\Student::where('user_id', $user->id)->first();
           if ($student) {
               $unreadFeedbackCount = \App\Models\Feedback::where('student_id', $student->id)
                   ->where('is_read', false)
                   ->count();
           }
       }
       
       $data['unreadFeedbackCount'] = $unreadFeedbackCount;
       // ... rest of code ...
   });
   ```

3. **Display Badge in Dashboard (Dashboard.vue)**
   - Add notification badge/icon in header or sidebar
   - Show count of unread feedback
   - Link to feedback section or modal

4. **Mark as Read**
   - When student clicks to view feedback, update `is_read = true`
   - Create API endpoint: `PATCH /api/feedback/{feedback}/mark-as-read`

---

### **Approach 2: Alert Banner/Toast Notification**

#### Implementation Steps:

1. **Add Alert Component in Dashboard**
   - Show alert banner at top of dashboard when new feedback exists
   - Display: "You have X new feedback from supervisors"
   - Include "View Feedback" button

2. **Backend Changes**
   - Return recent feedback in dashboard data
   - Include timestamp to show "New" badge for recent feedback (e.g., last 24 hours)

3. **Frontend Display**
   ```vue
   <div v-if="newFeedbackCount > 0" class="alert-banner">
       You have {{ newFeedbackCount }} new feedback!
       <Button @click="viewFeedback">View Now</Button>
   </div>
   ```

---

### **Approach 3: Feedback Section in Dashboard**

#### Implementation Steps:

1. **Add Feedback Card to Dashboard**
   - Create new section showing recent feedback
   - Display last 3-5 feedback entries
   - Show "New" badge for unread feedback
   - Link to full feedback page

2. **Backend: Include Feedback in Dashboard Data**
   ```php
   if ($role === 'student' && $student) {
       $data['recentFeedback'] = \App\Models\Feedback::where('student_id', $student->id)
           ->with(['supervisor'])
           ->orderBy('date_received', 'desc')
           ->limit(5)
           ->get();
   }
   ```

3. **Frontend: Display Feedback List**
   - Show feedback cards with supervisor name, date, rating
   - Highlight unread feedback
   - Click to view full details

---

### **Approach 4: Real-time Notification (Advanced)**

#### Implementation Steps:

1. **Use Laravel Broadcasting + WebSockets**
   - Install Laravel Echo + Pusher/Soketi
   - Broadcast event when feedback is created
   - Listen for events in frontend

2. **Create FeedbackCreated Event**
   ```php
   class FeedbackCreated implements ShouldBroadcast {
       public function broadcastOn() {
           return new PrivateChannel('student.' . $this->feedback->student_id);
       }
   }
   ```

3. **Frontend: Listen for Events**
   ```javascript
   Echo.private(`student.${studentId}`)
       .listen('FeedbackCreated', (e) => {
           // Show notification
           showNotification('New feedback received!');
       });
   ```

---

## Recommended Implementation (Hybrid Approach)

### **Step 1: Database Migration**
```php
// Create migration: add_is_read_to_feedback_table
Schema::table('feedback', function (Blueprint $table) {
    $table->boolean('is_read')->default(false)->after('osce_score');
    $table->timestamp('read_at')->nullable()->after('is_read');
});
```

### **Step 2: Update FeedbackController**
```php
// In store() method, after creating feedback:
$feedback = Feedback::create($data);

// Optionally: Send notification email (if needed)
// Mail::to($student->user->email)->send(new FeedbackNotification($feedback));

return response()->json($feedback, 201);
```

### **Step 3: Update Dashboard Route**
```php
Route::get('dashboard', function () {
    // ... existing code ...
    
    // Get unread feedback count for students
    $unreadFeedbackCount = 0;
    $recentFeedback = collect([]);
    
    if ($role === 'student' && $user) {
        $student = \App\Models\Student::where('user_id', $user->id)->first();
        if ($student) {
            $unreadFeedbackCount = \App\Models\Feedback::where('student_id', $student->id)
                ->where('is_read', false)
                ->count();
                
            $recentFeedback = \App\Models\Feedback::where('student_id', $student->id)
                ->with(['supervisor'])
                ->orderBy('date_received', 'desc')
                ->limit(3)
                ->get();
        }
    }
    
    $data['unreadFeedbackCount'] = $unreadFeedbackCount;
    $data['recentFeedback'] = $recentFeedback;
    
    return Inertia::render('Dashboard', $data);
});
```

### **Step 4: Add Notification Badge to Dashboard**
```vue
<!-- In Dashboard.vue, add after breadcrumbs -->
<div v-if="props.unreadFeedbackCount > 0" class="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <Bell class="h-5 w-5 text-blue-600" />
            <span class="text-sm font-medium text-blue-900">
                You have {{ props.unreadFeedbackCount }} new feedback!
            </span>
        </div>
        <Button @click="viewFeedback" size="sm" class="bg-blue-600 text-white">
            View Feedback
        </Button>
    </div>
</div>
```

### **Step 5: Create Feedback View Page/Modal**
- Create Feedback.vue page or modal
- List all feedback with unread indicators
- Mark as read when viewed

### **Step 6: Create Mark as Read Endpoint**
```php
// In FeedbackController.php
public function markAsRead(Feedback $feedback)
{
    $feedback->update([
        'is_read' => true,
        'read_at' => now(),
    ]);
    
    return response()->json(['message' => 'Feedback marked as read']);
}

// In routes/api.php
Route::patch('/feedback/{feedback}/mark-as-read', [FeedbackController::class, 'markAsRead']);
```

---

## Visual Indicators Options

1. **Notification Bell Icon** with red badge showing count
2. **Alert Banner** at top of dashboard
3. **Feedback Card** in sidebar or main content area
4. **Toast Notification** (appears temporarily when feedback is added)
5. **Email Notification** (optional - send email when feedback is created)

---

## User Flow

1. **Supervisor creates feedback** → Feedback saved with `is_read = false`
2. **Student logs into dashboard** → Sees notification badge/count
3. **Student clicks notification** → Redirected to feedback page
4. **Student views feedback** → `is_read` set to `true`, notification disappears
5. **New feedback arrives** → Notification appears again

---

## Additional Features (Optional)

1. **Email Notifications**: Send email when feedback is created
2. **Push Notifications**: Browser push notifications (requires service worker)
3. **Feedback Summary**: Show feedback statistics (average rating, total feedback)
4. **Filter Options**: Filter by date, category, rating
5. **Export Feedback**: Allow students to export their feedback as PDF

---

## Implementation Priority

1. **Phase 1 (Quick Win)**: Badge indicator + unread count
2. **Phase 2**: Feedback section in dashboard
3. **Phase 3**: Email notifications
4. **Phase 4**: Real-time notifications (if needed)

---

## Testing Checklist

- [ ] Unread count displays correctly
- [ ] Notification appears when new feedback is created
- [ ] Mark as read functionality works
- [ ] Notification disappears after viewing
- [ ] Multiple feedback items handled correctly
- [ ] No notification for own feedback (if applicable)

