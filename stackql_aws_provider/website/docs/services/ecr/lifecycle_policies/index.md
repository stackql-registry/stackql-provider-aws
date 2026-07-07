--- 
title: lifecycle_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policies
  - ecr
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

Creates, updates, deletes, gets or lists a <code>lifecycle_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.lifecycle_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' }
    ]}
>
<TabItem value="get_lifecycle_policy">

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
    <td><CopyableCode code="lastEvaluatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp of the last time that the lifecycle policy was run.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecyclePolicyText" /></td>
    <td><code>string</code></td>
    <td>The JSON lifecycle policy text.</td>
</tr>
<tr>
    <td><CopyableCode code="registryId" /></td>
    <td><code>string</code></td>
    <td>The registry ID associated with the request. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryName" /></td>
    <td><code>string</code></td>
    <td>The repository name associated with the request. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*(\/&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*)*&lt;/code&gt;)</td>
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
    <td><a href="#get_lifecycle_policy"><CopyableCode code="get_lifecycle_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the lifecycle policy for the specified repository.</td>
</tr>
<tr>
    <td><a href="#put_lifecycle_policy"><CopyableCode code="put_lifecycle_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-lifecyclePolicyText"><code>lifecyclePolicyText</code></a></td>
    <td></td>
    <td>Creates or updates the lifecycle policy for the specified repository. For more information, see Lifecycle policy template.</td>
</tr>
<tr>
    <td><a href="#delete_lifecycle_policy"><CopyableCode code="delete_lifecycle_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the lifecycle policy associated with the specified repository.</td>
</tr>
<tr>
    <td><a href="#start_lifecycle_policy_preview"><CopyableCode code="start_lifecycle_policy_preview" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.</td>
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
    defaultValue="get_lifecycle_policy"
    values={[
        { label: 'get_lifecycle_policy', value: 'get_lifecycle_policy' }
    ]}
>
<TabItem value="get_lifecycle_policy">

Retrieves the lifecycle policy for the specified repository.

```sql
SELECT
lastEvaluatedAt,
lifecyclePolicyText,
registryId,
repositoryName
FROM aws.ecr.lifecycle_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_lifecycle_policy"
    values={[
        { label: 'put_lifecycle_policy', value: 'put_lifecycle_policy' }
    ]}
>
<TabItem value="put_lifecycle_policy">

Creates or updates the lifecycle policy for the specified repository. For more information, see Lifecycle policy template.

```sql
REPLACE aws.ecr.lifecycle_policies
SET 
registryId = '{{ registryId }}',
repositoryName = '{{ repositoryName }}',
lifecyclePolicyText = '{{ lifecyclePolicyText }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND lifecyclePolicyText = '{{ lifecyclePolicyText }}' --required
RETURNING
lifecyclePolicyText,
registryId,
repositoryName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lifecycle_policy"
    values={[
        { label: 'delete_lifecycle_policy', value: 'delete_lifecycle_policy' }
    ]}
>
<TabItem value="delete_lifecycle_policy">

Deletes the lifecycle policy associated with the specified repository.

```sql
DELETE FROM aws.ecr.lifecycle_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_lifecycle_policy_preview"
    values={[
        { label: 'start_lifecycle_policy_preview', value: 'start_lifecycle_policy_preview' }
    ]}
>
<TabItem value="start_lifecycle_policy_preview">

Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.

```sql
EXEC aws.ecr.lifecycle_policies.start_lifecycle_policy_preview 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}", 
"lifecyclePolicyText": "{{ lifecyclePolicyText }}"
}'
;
```
</TabItem>
</Tabs>
