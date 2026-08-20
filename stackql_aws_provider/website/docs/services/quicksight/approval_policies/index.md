--- 
title: approval_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - approval_policies
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

Creates, updates, deletes, gets or lists an <code>approval_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="approval_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.approval_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_approval_policy"
    values={[
        { label: 'describe_approval_policy', value: 'describe_approval_policy' },
        { label: 'list_approval_policies', value: 'list_approval_policies' }
    ]}
>
<TabItem value="describe_approval_policy">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The list of governed actions that trigger the approval workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="applicable_to" /></td>
    <td><code>object</code></td>
    <td>The scoping configuration that determines which principals an approval policy applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="approval_groups" /></td>
    <td><code>array</code></td>
    <td>The list of group ARNs whose members can approve requests.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_types" /></td>
    <td><code>array</code></td>
    <td>The list of asset types that the approval policy applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the approval policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the approval policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the approval policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the approval policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the approval policy. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the approval policy was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_approval_policies">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The list of governed actions that trigger the approval workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="applicable_to" /></td>
    <td><code>object</code></td>
    <td>The scoping configuration that determines which principals an approval policy applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="approval_groups" /></td>
    <td><code>array</code></td>
    <td>The list of group ARNs whose members can approve requests.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_types" /></td>
    <td><code>array</code></td>
    <td>The list of asset types that the approval policy applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the approval policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the approval policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the approval policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the approval policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the approval policy. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the approval policy was last updated.</td>
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
    <td><a href="#describe_approval_policy"><CopyableCode code="describe_approval_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an approval policy in Quick Sight.</td>
</tr>
<tr>
    <td><a href="#list_approval_policies"><CopyableCode code="list_approval_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all approval policies in the specified Quick Sight account. The results are paginated. If the response includes a NextToken value, pass it in a subsequent call to retrieve the next set of results.</td>
</tr>
<tr>
    <td><a href="#create_approval_policy"><CopyableCode code="create_approval_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyId"><code>PolicyId</code></a>, <a href="#parameter-AssetTypes"><code>AssetTypes</code></a>, <a href="#parameter-ApplicableTo"><code>ApplicableTo</code></a>, <a href="#parameter-ApprovalGroups"><code>ApprovalGroups</code></a></td>
    <td></td>
    <td>Creates an approval policy in Quick Sight.</td>
</tr>
<tr>
    <td><a href="#update_approval_policy"><CopyableCode code="update_approval_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an approval policy in Quick Sight.</td>
</tr>
<tr>
    <td><a href="#delete_approval_policy"><CopyableCode code="delete_approval_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an approval policy in Quick Sight.</td>
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
<tr id="parameter-policy_id">
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the approval policy to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. If you don't specify a value, the service returns a default number of results. Use the NextToken value in the response to retrieve additional results.</td>
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
    defaultValue="describe_approval_policy"
    values={[
        { label: 'describe_approval_policy', value: 'describe_approval_policy' },
        { label: 'list_approval_policies', value: 'list_approval_policies' }
    ]}
>
<TabItem value="describe_approval_policy">

Describes an approval policy in Quick Sight.

```sql
SELECT
actions,
applicable_to,
approval_groups,
asset_types,
created_at,
description,
name,
policy_arn,
policy_id,
updated_at
FROM aws.quicksight.approval_policies
WHERE policy_id = '{{ policy_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_approval_policies">

Lists all approval policies in the specified Quick Sight account. The results are paginated. If the response includes a NextToken value, pass it in a subsequent call to retrieve the next set of results.

```sql
SELECT
actions,
applicable_to,
approval_groups,
asset_types,
created_at,
description,
name,
policy_arn,
policy_id,
updated_at
FROM aws.quicksight.approval_policies
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_approval_policy"
    values={[
        { label: 'create_approval_policy', value: 'create_approval_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_approval_policy">

Creates an approval policy in Quick Sight.

```sql
INSERT INTO aws.quicksight.approval_policies (
PolicyId,
Name,
Description,
Actions,
AssetTypes,
ApplicableTo,
ApprovalGroups,
region
)
SELECT 
'{{ PolicyId }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ Actions }}',
'{{ AssetTypes }}' /* required */,
'{{ ApplicableTo }}' /* required */,
'{{ ApprovalGroups }}' /* required */,
'{{ region }}'
RETURNING
policy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: approval_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the approval_policies resource.
    - name: PolicyId
      value: "{{ PolicyId }}"
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Actions
      value:
        - "{{ Actions }}"
    - name: AssetTypes
      value:
        - "{{ AssetTypes }}"
    - name: ApplicableTo
      description: |
        The scoping configuration that determines which principals an approval policy applies to.
      value:
        Type: "{{ Type }}"
        GroupArns:
          - "{{ GroupArns }}"
    - name: ApprovalGroups
      value:
        - "{{ ApprovalGroups }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_approval_policy"
    values={[
        { label: 'update_approval_policy', value: 'update_approval_policy' }
    ]}
>
<TabItem value="update_approval_policy">

Updates an approval policy in Quick Sight.

```sql
UPDATE aws.quicksight.approval_policies
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Actions = '{{ Actions }}',
AssetTypes = '{{ AssetTypes }}',
ApplicableTo = '{{ ApplicableTo }}',
ApprovalGroups = '{{ ApprovalGroups }}'
WHERE 
policy_id = '{{ policy_id }}' --required
AND region = '{{ region }}' --required
RETURNING
policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_approval_policy"
    values={[
        { label: 'delete_approval_policy', value: 'delete_approval_policy' }
    ]}
>
<TabItem value="delete_approval_policy">

Deletes an approval policy in Quick Sight.

```sql
DELETE FROM aws.quicksight.approval_policies
WHERE policy_id = '{{ policy_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
