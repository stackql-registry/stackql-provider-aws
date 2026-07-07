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
        { label: 'get_assignment', value: 'get_assignment' }
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
    <td><CopyableCode code="Assignment" /></td>
    <td><code>object</code></td>
    <td>The assignment. The response includes one Assignment element.</td>
</tr>
<tr>
    <td><CopyableCode code="HIT" /></td>
    <td><code>object</code></td>
    <td>The HIT associated with this assignment. The response includes one HIT element.</td>
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
        { label: 'get_assignment', value: 'get_assignment' }
    ]}
>
<TabItem value="get_assignment">

The GetAssignment operation retrieves the details of the specified Assignment.

```sql
SELECT
Assignment,
HIT
FROM aws.mturk.assignments
WHERE region = '{{ region }}' -- required
;
```
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
