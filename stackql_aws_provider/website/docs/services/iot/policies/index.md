--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - iot
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultVersionId" /></td>
    <td><code>string</code></td>
    <td>The default policy version ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="generationId" /></td>
    <td><code>string</code></td>
    <td>The generation ID of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The policy ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="policyDocument" /></td>
    <td><code>string</code></td>
    <td>The JSON document that describes the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyName" /></td>
    <td><code>string</code></td>
    <td>The policy name. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policies">

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
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The policy ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="policyName" /></td>
    <td><code>string</code></td>
    <td>The policy name. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified policy with the policy document of the default version. Requires permission to access the GetPolicy action.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a></td>
    <td>Lists your policies. Requires permission to access the ListPolicies action.</td>
</tr>
<tr>
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyDocument"><code>policyDocument</code></a></td>
    <td></td>
    <td>Creates an IoT policy. The created policy is the default version for the policy. This operation creates a policy version with a version identifier of 1 and sets 1 as the policy's default version. Requires permission to access the CreatePolicy action.</td>
</tr>
<tr>
    <td><a href="#attach_policy"><CopyableCode code="attach_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td></td>
    <td>Attaches the specified policy to the specified principal (certificate or other credential). Requires permission to access the AttachPolicy action.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified policy. A policy cannot be deleted if it has non-default versions or it is attached to any certificate. To delete a policy, use the DeletePolicyVersion action to delete all non-default versions of the policy; use the DetachPolicy action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy. When a policy is deleted using DeletePolicy, its default version is deleted with it. Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted. Requires permission to access the DeletePolicy action.</td>
</tr>
<tr>
    <td><a href="#detach_policy"><CopyableCode code="detach_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policy_name"><code>policy_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td></td>
    <td>Detaches a policy from the specified target. Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted. Requires permission to access the DetachPolicy action.</td>
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
<tr id="parameter-policy_name">
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The policy to detach.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the order for results. If true, the results are returned in ascending creation order.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The result page size.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

Gets information about the specified policy with the policy document of the default version. Requires permission to access the GetPolicy action.

```sql
SELECT
creationDate,
defaultVersionId,
generationId,
lastModifiedDate,
policyArn,
policyDocument,
policyName
FROM aws.iot.policies
WHERE policy_name = '{{ policy_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policies">

Lists your policies. Requires permission to access the ListPolicies action.

```sql
SELECT
policyArn,
policyName
FROM aws.iot.policies
WHERE region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND pageSize = '{{ pageSize }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy"
    values={[
        { label: 'create_policy', value: 'create_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy">

Creates an IoT policy. The created policy is the default version for the policy. This operation creates a policy version with a version identifier of 1 and sets 1 as the policy's default version. Requires permission to access the CreatePolicy action.

```sql
INSERT INTO aws.iot.policies (
policyDocument,
tags,
policy_name,
region
)
SELECT 
'{{ policyDocument }}' /* required */,
'{{ tags }}',
'{{ policy_name }}',
'{{ region }}'
RETURNING
policyArn,
policyDocument,
policyName,
policyVersionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: policy_name
      value: "{{ policy_name }}"
      description: Required parameter for the policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policies resource.
    - name: policyDocument
      value: "{{ policyDocument }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_policy"
    values={[
        { label: 'attach_policy', value: 'attach_policy' }
    ]}
>
<TabItem value="attach_policy">

Attaches the specified policy to the specified principal (certificate or other credential). Requires permission to access the AttachPolicy action.

```sql
UPDATE aws.iot.policies
SET 
target = '{{ target }}'
WHERE 
policy_name = '{{ policy_name }}' --required
AND region = '{{ region }}' --required
AND target = '{{ target }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Deletes the specified policy. A policy cannot be deleted if it has non-default versions or it is attached to any certificate. To delete a policy, use the DeletePolicyVersion action to delete all non-default versions of the policy; use the DetachPolicy action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy. When a policy is deleted using DeletePolicy, its default version is deleted with it. Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted. Requires permission to access the DeletePolicy action.

```sql
DELETE FROM aws.iot.policies
WHERE policy_name = '{{ policy_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_policy"
    values={[
        { label: 'detach_policy', value: 'detach_policy' }
    ]}
>
<TabItem value="detach_policy">

Detaches a policy from the specified target. Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted. Requires permission to access the DetachPolicy action.

```sql
EXEC aws.iot.policies.detach_policy 
@policy_name='{{ policy_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"target": "{{ target }}"
}'
;
```
</TabItem>
</Tabs>
