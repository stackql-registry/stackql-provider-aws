--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - entityresolution
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Entity Resolution resource ARN. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:((schemamapping|matchingworkflow|idmappingworkflow|idnamespace)/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The resource-based policy.</td>
</tr>
<tr>
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the current revision of the policy. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the resource-based policy.</td>
</tr>
<tr>
    <td><a href="#add_policy_statement"><CopyableCode code="add_policy_statement" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-statement_id"><code>statement_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-effect"><code>effect</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-principal"><code>principal</code></a></td>
    <td></td>
    <td>Adds a policy statement object. To retrieve a list of existing policy statements, use the GetPolicy API.</td>
</tr>
<tr>
    <td><a href="#put_policy"><CopyableCode code="put_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Updates the resource-based policy.</td>
</tr>
<tr>
    <td><a href="#delete_policy_statement"><CopyableCode code="delete_policy_statement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-statement_id"><code>statement_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the policy statement.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource for which the policy need to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-statement_id">
    <td><CopyableCode code="statement_id" /></td>
    <td><code>string</code></td>
    <td>A statement identifier that differentiates the statement from others in the same policy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
    ]}
>
<TabItem value="get_policy">

Returns the resource-based policy.

```sql
SELECT
arn,
policy,
token
FROM aws.entityresolution.policies
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_policy_statement"
    values={[
        { label: 'add_policy_statement', value: 'add_policy_statement' }
    ]}
>
<TabItem value="add_policy_statement">

Adds a policy statement object. To retrieve a list of existing policy statements, use the GetPolicy API.

```sql
UPDATE aws.entityresolution.policies
SET 
effect = '{{ effect }}',
action = '{{ action }}',
principal = '{{ principal }}',
condition = '{{ condition }}'
WHERE 
arn = '{{ arn }}' --required
AND statement_id = '{{ statement_id }}' --required
AND region = '{{ region }}' --required
AND effect = '{{ effect }}' --required
AND action = '{{ action }}' --required
AND principal = '{{ principal }}' --required
RETURNING
arn,
policy,
token;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_policy"
    values={[
        { label: 'put_policy', value: 'put_policy' }
    ]}
>
<TabItem value="put_policy">

Updates the resource-based policy.

```sql
REPLACE aws.entityresolution.policies
SET 
token = '{{ token }}',
policy = '{{ policy }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required
RETURNING
arn,
policy,
token;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy_statement"
    values={[
        { label: 'delete_policy_statement', value: 'delete_policy_statement' }
    ]}
>
<TabItem value="delete_policy_statement">

Deletes the policy statement.

```sql
DELETE FROM aws.entityresolution.policies
WHERE arn = '{{ arn }}' --required
AND statement_id = '{{ statement_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
