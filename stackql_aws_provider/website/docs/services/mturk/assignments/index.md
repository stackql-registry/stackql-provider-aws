--- 
title: assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - assignments
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

Creates, updates, deletes, gets or lists an <code>assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mturk.assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assignment"
    values={[
        { label: 'get_assignment', value: 'get_assignment' },
        { label: 'list_assignments_for_hit', value: 'list_assignments_for_hit' }
    ]}
>
<TabItem value="get_assignment">

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
    <td><CopyableCode code="assignment" /></td>
    <td><code>object</code></td>
    <td>The assignment. The response includes one Assignment element.</td>
</tr>
<tr>
    <td><CopyableCode code="hit" /></td>
    <td><code>object</code></td>
    <td>The HIT associated with this assignment. The response includes one HIT element.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><a href="#get_assignment"><CopyableCode code="get_assignment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The GetAssignment operation retrieves the details of the specified Assignment.</td>
</tr>
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
<tr>
    <td><a href="#approve_assignment"><CopyableCode code="approve_assignment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssignmentId"><code>AssignmentId</code></a></td>
    <td></td>
    <td>The ApproveAssignment operation approves the results of a completed assignment. Approving an assignment initiates two payments from the Requester's Amazon.com account The Worker who submitted the results is paid the reward specified in the HIT. Amazon Mechanical Turk fees are debited. If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted.</td>
</tr>
<tr>
    <td><a href="#reject_assignment"><CopyableCode code="reject_assignment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssignmentId"><code>AssignmentId</code></a>, <a href="#parameter-RequesterFeedback"><code>RequesterFeedback</code></a></td>
    <td></td>
    <td>The RejectAssignment operation rejects the results of a completed assignment. You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. Only the Requester who created the HIT can reject an assignment for the HIT.</td>
</tr>
<tr>
    <td><a href="#send_bonus"><CopyableCode code="send_bonus" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkerId"><code>WorkerId</code></a>, <a href="#parameter-BonusAmount"><code>BonusAmount</code></a>, <a href="#parameter-AssignmentId"><code>AssignmentId</code></a>, <a href="#parameter-Reason"><code>Reason</code></a></td>
    <td></td>
    <td>The SendBonus operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees.</td>
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
    defaultValue="get_assignment"
    values={[
        { label: 'get_assignment', value: 'get_assignment' },
        { label: 'list_assignments_for_hit', value: 'list_assignments_for_hit' }
    ]}
>
<TabItem value="get_assignment">

The GetAssignment operation retrieves the details of the specified Assignment.

```sql
SELECT
assignment,
hit
FROM aws.mturk.assignments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
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
FROM aws.mturk.assignments
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
INSERT INTO aws.mturk.assignments (
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
- name: assignments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the assignments resource.
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


## Lifecycle Methods

<Tabs
    defaultValue="approve_assignment"
    values={[
        { label: 'approve_assignment', value: 'approve_assignment' },
        { label: 'reject_assignment', value: 'reject_assignment' },
        { label: 'send_bonus', value: 'send_bonus' }
    ]}
>
<TabItem value="approve_assignment">

The ApproveAssignment operation approves the results of a completed assignment. Approving an assignment initiates two payments from the Requester's Amazon.com account The Worker who submitted the results is paid the reward specified in the HIT. Amazon Mechanical Turk fees are debited. If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted.

```sql
EXEC aws.mturk.assignments.approve_assignment 
@region='{{ region }}' --required 
@@json=
'{
"AssignmentId": "{{ AssignmentId }}", 
"RequesterFeedback": "{{ RequesterFeedback }}", 
"OverrideRejection": {{ OverrideRejection }}
}'
;
```
</TabItem>
<TabItem value="reject_assignment">

The RejectAssignment operation rejects the results of a completed assignment. You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. Only the Requester who created the HIT can reject an assignment for the HIT.

```sql
EXEC aws.mturk.assignments.reject_assignment 
@region='{{ region }}' --required 
@@json=
'{
"AssignmentId": "{{ AssignmentId }}", 
"RequesterFeedback": "{{ RequesterFeedback }}"
}'
;
```
</TabItem>
<TabItem value="send_bonus">

The SendBonus operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees.

```sql
EXEC aws.mturk.assignments.send_bonus 
@region='{{ region }}' --required 
@@json=
'{
"WorkerId": "{{ WorkerId }}", 
"BonusAmount": "{{ BonusAmount }}", 
"AssignmentId": "{{ AssignmentId }}", 
"Reason": "{{ Reason }}", 
"UniqueRequestToken": "{{ UniqueRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
