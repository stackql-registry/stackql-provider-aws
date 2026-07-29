--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_policy"
    values={[
        { label: 'describe_resource_policy', value: 'describe_resource_policy' }
    ]}
>
<TabItem value="describe_resource_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The JSON structure that contains the resource policy. For more information about the contents of a JSON policy document, see IAM JSON policy reference .</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_resource_policy"><CopyableCode code="describe_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the resource policy and policy revision for a bot or bot alias.</td>
</tr>
<tr>
    <td><a href="#create_resource_policy_statement"><CopyableCode code="create_resource_policy_statement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-statementId"><code>statementId</code></a>, <a href="#parameter-effect"><code>effect</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-expectedRevisionId"><code>expectedRevisionId</code></a></td>
    <td>Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.</td>
</tr>
<tr>
    <td><a href="#create_resource_policy"><CopyableCode code="create_resource_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates a new resource policy with the specified policy statements.</td>
</tr>
<tr>
    <td><a href="#update_resource_policy"><CopyableCode code="update_resource_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td><a href="#parameter-expectedRevisionId"><code>expectedRevisionId</code></a></td>
    <td>Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy_statement"><CopyableCode code="delete_resource_policy_statement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-statement_id"><code>statement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedRevisionId"><code>expectedRevisionId</code></a></td>
    <td>Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.</td>
</tr>
<tr>
    <td><a href="#delete_resource_policy"><CopyableCode code="delete_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-expectedRevisionId"><code>expectedRevisionId</code></a></td>
    <td>Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached.</td>
</tr>
<tr id="parameter-statement_id">
    <td><CopyableCode code="statement_id" /></td>
    <td><code>string</code></td>
    <td>The name of the statement (SID) to delete from the policy.</td>
</tr>
<tr id="parameter-expectedRevisionId">
    <td><CopyableCode code="expectedRevisionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the revision to edit. If this ID doesn't match the current revision number, Amazon Lex returns an exception If you don't specify a revision ID, Amazon Lex will delete the current policy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_resource_policy"
    values={[
        { label: 'describe_resource_policy', value: 'describe_resource_policy' }
    ]}
>
<TabItem value="describe_resource_policy">

Gets the resource policy and policy revision for a bot or bot alias.

```sql
SELECT
policy,
resource_arn,
revision_id
FROM aws.lexv2_models.resource_policies
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_policy_statement"
    values={[
        { label: 'create_resource_policy_statement', value: 'create_resource_policy_statement' },
        { label: 'create_resource_policy', value: 'create_resource_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_policy_statement">

Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

```sql
INSERT INTO aws.lexv2_models.resource_policies (
statementId,
effect,
principal,
action,
condition,
resource_arn,
region,
expectedRevisionId
)
SELECT 
'{{ statementId }}' /* required */,
'{{ effect }}' /* required */,
'{{ principal }}' /* required */,
'{{ action }}' /* required */,
'{{ condition }}',
'{{ resource_arn }}',
'{{ region }}',
'{{ expectedRevisionId }}'
RETURNING
resource_arn,
revision_id
;
```
</TabItem>
<TabItem value="create_resource_policy">

Creates a new resource policy with the specified policy statements.

```sql
INSERT INTO aws.lexv2_models.resource_policies (
policy,
resource_arn,
region
)
SELECT 
'{{ policy }}' /* required */,
'{{ resource_arn }}',
'{{ region }}'
RETURNING
resource_arn,
revision_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_policies
  props:
    - name: resource_arn
      value: "{{ resource_arn }}"
      description: Required parameter for the resource_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_policies resource.
    - name: statementId
      value: "{{ statementId }}"
    - name: effect
      value: "{{ effect }}"
      valid_values: ['Allow', 'Deny']
    - name: principal
      value:
        - service: "{{ service }}"
          arn: "{{ arn }}"
    - name: action
      value:
        - "{{ action }}"
    - name: condition
      value: "{{ condition }}"
    - name: policy
      value: "{{ policy }}"
    - name: expectedRevisionId
      value: "{{ expectedRevisionId }}"
      description: The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.
      description: The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_policy"
    values={[
        { label: 'update_resource_policy', value: 'update_resource_policy' }
    ]}
>
<TabItem value="update_resource_policy">

Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception.

```sql
UPDATE aws.lexv2_models.resource_policies
SET 
policy = '{{ policy }}'
WHERE 
resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required
AND expectedRevisionId = '{{ expectedRevisionId}}'
RETURNING
resource_arn,
revision_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_policy_statement"
    values={[
        { label: 'delete_resource_policy_statement', value: 'delete_resource_policy_statement' },
        { label: 'delete_resource_policy', value: 'delete_resource_policy' }
    ]}
>
<TabItem value="delete_resource_policy_statement">

Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API.

```sql
DELETE FROM aws.lexv2_models.resource_policies
WHERE resource_arn = '{{ resource_arn }}' --required
AND statement_id = '{{ statement_id }}' --required
AND region = '{{ region }}' --required
AND expectedRevisionId = '{{ expectedRevisionId }}'
;
```
</TabItem>
<TabItem value="delete_resource_policy">

Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception.

```sql
DELETE FROM aws.lexv2_models.resource_policies
WHERE resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required
AND expectedRevisionId = '{{ expectedRevisionId }}'
;
```
</TabItem>
</Tabs>
