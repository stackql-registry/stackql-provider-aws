--- 
title: reviewable_hi_ts
hide_title: false
hide_table_of_contents: false
keywords:
  - reviewable_hi_ts
  - mturk
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>reviewable_hi_ts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reviewable_hi_ts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.reviewable_hi_ts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_reviewable_hi_ts"
    values={[
        { label: 'list_reviewable_hi_ts', value: 'list_reviewable_hi_ts' }
    ]}
>
<TabItem value="list_reviewable_hi_ts">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="assignment_duration_in_seconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The length of time, in seconds, that a Worker has to complete the HIT after accepting it.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_approval_delay_in_seconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the HIT was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A general description of the HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the HIT expires.</td>
</tr>
<tr>
    <td><CopyableCode code="hit_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT Group of this HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hit_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hit_layout_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT Layout of this HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hit_review_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate. (NotReviewed, MarkedForReview, ReviewedAppropriate, ReviewedInappropriate)</td>
</tr>
<tr>
    <td><CopyableCode code="hit_status" /></td>
    <td><code>string</code></td>
    <td>The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed. (Assignable, Unassignable, Reviewable, Reviewing, Disposed)</td>
</tr>
<tr>
    <td><CopyableCode code="hit_type_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT type of this HIT (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="keywords" /></td>
    <td><code>string</code></td>
    <td>One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.</td>
</tr>
<tr>
    <td><CopyableCode code="max_assignments" /></td>
    <td><code>integer</code></td>
    <td>The number of times the HIT can be accepted and completed before the HIT becomes unavailable.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_assignments_available" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that are available for Workers to accept.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_assignments_completed" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that have been approved or rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_assignments_pending" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.</td>
</tr>
<tr>
    <td><CopyableCode code="qualification_requirements" /></td>
    <td><code>array</code></td>
    <td>Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the ActionsGuarded field on each QualificationRequirement structure.</td>
</tr>
<tr>
    <td><CopyableCode code="question" /></td>
    <td><code>string</code></td>
    <td>The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.</td>
</tr>
<tr>
    <td><CopyableCode code="requester_annotation" /></td>
    <td><code>string</code></td>
    <td>An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="reward" /></td>
    <td><code>string</code></td>
    <td>A string representing a currency amount. (pattern: &lt;code&gt;^&#91;0-9&#93;+(\.)?&#91;0-9&#93;&#123;0,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the HIT.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#list_reviewable_hi_ts"><CopyableCode code="list_reviewable_hi_ts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListReviewableHITs operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_reviewable_hi_ts"
    values={[
        { label: 'list_reviewable_hi_ts', value: 'list_reviewable_hi_ts' }
    ]}
>
<TabItem value="list_reviewable_hi_ts">

The ListReviewableHITs operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.

```sql
SELECT
assignment_duration_in_seconds,
auto_approval_delay_in_seconds,
creation_time,
description,
expiration,
hit_group_id,
hit_id,
hit_layout_id,
hit_review_status,
hit_status,
hit_type_id,
keywords,
max_assignments,
number_of_assignments_available,
number_of_assignments_completed,
number_of_assignments_pending,
qualification_requirements,
question,
requester_annotation,
reward,
title
FROM aws.mturk.reviewable_hi_ts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
