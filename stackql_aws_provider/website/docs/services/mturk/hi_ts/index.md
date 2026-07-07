--- 
title: hi_ts
hide_title: false
hide_table_of_contents: false
keywords:
  - hi_ts
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

Creates, updates, deletes, gets or lists a <code>hi_ts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hi_ts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.hi_ts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_hi_ts"
    values={[
        { label: 'list_hi_ts', value: 'list_hi_ts' }
    ]}
>
<TabItem value="list_hi_ts">

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
    <td><CopyableCode code="AssignmentDurationInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The length of time, in seconds, that a Worker has to complete the HIT after accepting it.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoApprovalDelayInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the HIT was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A general description of the HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="Expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the HIT expires.</td>
</tr>
<tr>
    <td><CopyableCode code="HITGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT Group of this HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HITId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HITLayoutId" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT Layout of this HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HITReviewStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate. (NotReviewed, MarkedForReview, ReviewedAppropriate, ReviewedInappropriate)</td>
</tr>
<tr>
    <td><CopyableCode code="HITStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed. (Assignable, Unassignable, Reviewable, Reviewing, Disposed)</td>
</tr>
<tr>
    <td><CopyableCode code="HITTypeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT type of this HIT (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Keywords" /></td>
    <td><code>string</code></td>
    <td>One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxAssignments" /></td>
    <td><code>integer</code></td>
    <td>The number of times the HIT can be accepted and completed before the HIT becomes unavailable.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssignmentsAvailable" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that are available for Workers to accept.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssignmentsCompleted" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that have been approved or rejected.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfAssignmentsPending" /></td>
    <td><code>integer</code></td>
    <td>The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.</td>
</tr>
<tr>
    <td><CopyableCode code="QualificationRequirements" /></td>
    <td><code>array</code></td>
    <td>Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the ActionsGuarded field on each QualificationRequirement structure.</td>
</tr>
<tr>
    <td><CopyableCode code="Question" /></td>
    <td><code>string</code></td>
    <td>The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.</td>
</tr>
<tr>
    <td><CopyableCode code="RequesterAnnotation" /></td>
    <td><code>string</code></td>
    <td>An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="Reward" /></td>
    <td><code>string</code></td>
    <td>A string representing a currency amount. (pattern: &lt;code&gt;^&#91;0-9&#93;+(\.)?&#91;0-9&#93;&#123;0,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Title" /></td>
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
    <td><a href="#list_hi_ts"><CopyableCode code="list_hi_ts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListHITs operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted.</td>
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
    defaultValue="list_hi_ts"
    values={[
        { label: 'list_hi_ts', value: 'list_hi_ts' }
    ]}
>
<TabItem value="list_hi_ts">

The ListHITs operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted.

```sql
SELECT
AssignmentDurationInSeconds,
AutoApprovalDelayInSeconds,
CreationTime,
Description,
Expiration,
HITGroupId,
HITId,
HITLayoutId,
HITReviewStatus,
HITStatus,
HITTypeId,
Keywords,
MaxAssignments,
NumberOfAssignmentsAvailable,
NumberOfAssignmentsCompleted,
NumberOfAssignmentsPending,
QualificationRequirements,
Question,
RequesterAnnotation,
Reward,
Title
FROM aws.mturk.hi_ts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
