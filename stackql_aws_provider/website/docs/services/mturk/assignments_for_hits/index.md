--- 
title: assignments_for_hits
hide_title: false
hide_table_of_contents: false
keywords:
  - assignments_for_hits
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

Creates, updates, deletes, gets or lists an <code>assignments_for_hits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assignments_for_hits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.assignments_for_hits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assignments_for_hit"
    values={[
        { label: 'list_assignments_for_hit', value: 'list_assignments_for_hit' }
    ]}
>
<TabItem value="list_assignments_for_hit">

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
    <td><CopyableCode code="accept_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Worker accepted the assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="answer" /></td>
    <td><code>string</code></td>
    <td>The Worker's answers submitted for the HIT contained in a QuestionFormAnswers document, if the Worker provides an answer. If the Worker does not provide any answers, Answer may contain a QuestionFormAnswers document, or Answer may be empty.</td>
</tr>
<tr>
    <td><CopyableCode code="approval_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the Worker has submitted results and the Requester has approved the results, ApprovalTime is the date and time the Requester approved the results. This value is omitted from the assignment if the Requester has not yet approved the results.</td>
</tr>
<tr>
    <td><CopyableCode code="assignment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the assignment. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assignment_status" /></td>
    <td><code>string</code></td>
    <td>The status of the assignment. (Submitted, Approved, Rejected)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_approval_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>If results have been submitted, AutoApprovalTime is the date and time the results of the assignment results are considered Approved automatically if they have not already been explicitly approved or rejected by the Requester. This value is derived from the auto-approval delay specified by the Requester in the HIT. This value is omitted from the assignment if the Worker has not yet submitted results.</td>
</tr>
<tr>
    <td><CopyableCode code="deadline" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the deadline for the assignment. This value is derived from the deadline specification for the HIT and the date and time the Worker accepted the HIT.</td>
</tr>
<tr>
    <td><CopyableCode code="hit_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the HIT. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rejection_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the Worker has submitted results and the Requester has rejected the results, RejectionTime is the date and time the Requester rejected the results.</td>
</tr>
<tr>
    <td><CopyableCode code="requester_feedback" /></td>
    <td><code>string</code></td>
    <td>The feedback string included with the call to the ApproveAssignment operation or the RejectAssignment operation, if the Requester approved or rejected the assignment and specified feedback.</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the Worker has submitted results, SubmitTime is the date and time the assignment was submitted. This value is omitted from the assignment if the Worker has not yet submitted results.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Worker who accepted the HIT. (pattern: &lt;code&gt;^A&#91;A-Z0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_assignments_for_hit"><CopyableCode code="list_assignments_for_hit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The ListAssignmentsForHIT operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. Only the Requester who created the HIT can retrieve the assignments for that HIT. Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination.</td>
</tr>
<tr>
    <td><a href="#create_additional_assignments_for_hit"><CopyableCode code="create_additional_assignments_for_hit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HITId"><code>HITId</code></a>, <a href="#parameter-NumberOfAdditionalAssignments"><code>NumberOfAdditionalAssignments</code></a></td>
    <td></td>
    <td>The CreateAdditionalAssignmentsForHIT operation increases the maximum number of assignments of an existing HIT. To extend the maximum number of assignments, specify the number of additional assignments. HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease exception. HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an AWS.MechanicalTurk.HITTooOldForExtension exception.</td>
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
    defaultValue="list_assignments_for_hit"
    values={[
        { label: 'list_assignments_for_hit', value: 'list_assignments_for_hit' }
    ]}
>
<TabItem value="list_assignments_for_hit">

The ListAssignmentsForHIT operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. Only the Requester who created the HIT can retrieve the assignments for that HIT. Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination.

```sql
SELECT
accept_time,
answer,
approval_time,
assignment_id,
assignment_status,
auto_approval_time,
deadline,
hit_id,
rejection_time,
requester_feedback,
submit_time,
worker_id
FROM aws.mturk.assignments_for_hits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_additional_assignments_for_hit"
    values={[
        { label: 'create_additional_assignments_for_hit', value: 'create_additional_assignments_for_hit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_additional_assignments_for_hit">

The CreateAdditionalAssignmentsForHIT operation increases the maximum number of assignments of an existing HIT. To extend the maximum number of assignments, specify the number of additional assignments. HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease exception. HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an AWS.MechanicalTurk.HITTooOldForExtension exception.

```sql
INSERT INTO aws.mturk.assignments_for_hits (
HITId,
NumberOfAdditionalAssignments,
UniqueRequestToken,
region
)
SELECT 
'{{ HITId }}' /* required */,
{{ NumberOfAdditionalAssignments }} /* required */,
'{{ UniqueRequestToken }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assignments_for_hits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assignments_for_hits resource.
    - name: HITId
      value: "{{ HITId }}"
      description: |
        The ID of the HIT to extend.
    - name: NumberOfAdditionalAssignments
      value: {{ NumberOfAdditionalAssignments }}
      description: |
        The number of additional assignments to request for this HIT.
    - name: UniqueRequestToken
      value: "{{ UniqueRequestToken }}"
      description: |
        A unique identifier for this request, which allows you to retry the call on error without extending the HIT multiple times. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the extend HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return an error with a message containing the request ID.
`}</CodeBlock>

</TabItem>
</Tabs>
