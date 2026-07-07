--- 
title: iam_policy_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - iam_policy_assignments
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>iam_policy_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="iam_policy_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.iam_policy_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_iam_policy_assignment"
    values={[
        { label: 'describe_iam_policy_assignment', value: 'describe_iam_policy_assignment' },
        { label: 'list_iam_policy_assignments', value: 'list_iam_policy_assignments' }
    ]}
>
<TabItem value="describe_iam_policy_assignment">

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
    <td><CopyableCode code="IAMPolicyAssignment" /></td>
    <td><code>object</code></td>
    <td>Information describing the IAM policy assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_iam_policy_assignments">

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
    <td><CopyableCode code="AssignmentName" /></td>
    <td><code>string</code></td>
    <td>Assignment name. (pattern: &lt;code&gt;(?=^.&#123;2,256&#125;$)(?!.*\s)&#91;0-9a-zA-Z-_.:=+@&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AssignmentStatus" /></td>
    <td><code>string</code></td>
    <td>Assignment status. (ENABLED, DRAFT, DISABLED)</td>
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
    <td><a href="#describe_iam_policy_assignment"><CopyableCode code="describe_iam_policy_assignment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-assignment_name"><code>assignment_name</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an existing IAM policy assignment, as specified by the assignment name.</td>
</tr>
<tr>
    <td><a href="#list_iam_policy_assignments"><CopyableCode code="list_iam_policy_assignments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assignment-status"><code>assignment-status</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the IAM policy assignments in the current Amazon Quick Sight account.</td>
</tr>
<tr>
    <td><a href="#create_iam_policy_assignment"><CopyableCode code="create_iam_policy_assignment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssignmentName"><code>AssignmentName</code></a>, <a href="#parameter-AssignmentStatus"><code>AssignmentStatus</code></a></td>
    <td></td>
    <td>Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy assignment is attached to the specified groups or users of Amazon Quick Sight. Assignment names are unique per Amazon Web Services account. To avoid overwriting rules in other namespaces, use assignment names that are unique.</td>
</tr>
<tr>
    <td><a href="#update_iam_policy_assignment"><CopyableCode code="update_iam_policy_assignment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-assignment_name"><code>assignment_name</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request. This overwrites all of the users included in Identities.</td>
</tr>
<tr>
    <td><a href="#delete_iam_policy_assignment"><CopyableCode code="delete_iam_policy_assignment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-assignment_name"><code>assignment_name</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing IAM policy assignment.</td>
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
<tr id="parameter-assignment_name">
    <td><CopyableCode code="assignment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the assignment.</td>
</tr>
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID where you want to delete the IAM policy assignment.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace that contains the assignment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assignment-status">
    <td><CopyableCode code="assignment-status" /></td>
    <td><code>string</code></td>
    <td>The status of the assignments.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_iam_policy_assignment"
    values={[
        { label: 'describe_iam_policy_assignment', value: 'describe_iam_policy_assignment' },
        { label: 'list_iam_policy_assignments', value: 'list_iam_policy_assignments' }
    ]}
>
<TabItem value="describe_iam_policy_assignment">

Describes an existing IAM policy assignment, as specified by the assignment name.

```sql
SELECT
IAMPolicyAssignment,
RequestId,
Status
FROM aws.quicksight.iam_policy_assignments
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND assignment_name = '{{ assignment_name }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_iam_policy_assignments">

Lists the IAM policy assignments in the current Amazon Quick Sight account.

```sql
SELECT
AssignmentName,
AssignmentStatus
FROM aws.quicksight.iam_policy_assignments
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND `assignment-status` = '{{ assignment-status }}'
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_iam_policy_assignment"
    values={[
        { label: 'create_iam_policy_assignment', value: 'create_iam_policy_assignment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_iam_policy_assignment">

Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy assignment is attached to the specified groups or users of Amazon Quick Sight. Assignment names are unique per Amazon Web Services account. To avoid overwriting rules in other namespaces, use assignment names that are unique.

```sql
INSERT INTO aws.quicksight.iam_policy_assignments (
AssignmentName,
AssignmentStatus,
PolicyArn,
Identities,
aws_account_id,
namespace,
region
)
SELECT 
'{{ AssignmentName }}' /* required */,
'{{ AssignmentStatus }}' /* required */,
'{{ PolicyArn }}',
'{{ Identities }}',
'{{ aws_account_id }}',
'{{ namespace }}',
'{{ region }}'
RETURNING
AssignmentId,
AssignmentName,
AssignmentStatus,
Identities,
PolicyArn,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: iam_policy_assignments
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the iam_policy_assignments resource.
    - name: namespace
      value: "{{ namespace }}"
      description: Required parameter for the iam_policy_assignments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the iam_policy_assignments resource.
    - name: AssignmentName
      value: "{{ AssignmentName }}"
    - name: AssignmentStatus
      value: "{{ AssignmentStatus }}"
      valid_values: ['ENABLED', 'DRAFT', 'DISABLED']
    - name: PolicyArn
      value: "{{ PolicyArn }}"
    - name: Identities
      value: "{{ Identities }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_iam_policy_assignment"
    values={[
        { label: 'update_iam_policy_assignment', value: 'update_iam_policy_assignment' }
    ]}
>
<TabItem value="update_iam_policy_assignment">

Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request. This overwrites all of the users included in Identities.

```sql
UPDATE aws.quicksight.iam_policy_assignments
SET 
AssignmentStatus = '{{ AssignmentStatus }}',
PolicyArn = '{{ PolicyArn }}',
Identities = '{{ Identities }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND assignment_name = '{{ assignment_name }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
RETURNING
AssignmentId,
AssignmentName,
AssignmentStatus,
Identities,
PolicyArn,
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_iam_policy_assignment"
    values={[
        { label: 'delete_iam_policy_assignment', value: 'delete_iam_policy_assignment' }
    ]}
>
<TabItem value="delete_iam_policy_assignment">

Deletes an existing IAM policy assignment.

```sql
DELETE FROM aws.quicksight.iam_policy_assignments
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND assignment_name = '{{ assignment_name }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
