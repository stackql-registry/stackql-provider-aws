--- 
title: repository_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_policies
  - ecr_public
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

Creates, updates, deletes, gets or lists a <code>repository_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr_public.repository_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_policy"
    values={[
        { label: 'get_repository_policy', value: 'get_repository_policy' }
    ]}
>
<TabItem value="get_repository_policy">

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
    <td><CopyableCode code="policyText" /></td>
    <td><code>string</code></td>
    <td>The repository policy text that's associated with the repository. The policy text will be in JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="registryId" /></td>
    <td><code>string</code></td>
    <td>The registry ID that's associated with the request. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryName" /></td>
    <td><code>string</code></td>
    <td>The repository name that's associated with the request. (pattern: &lt;code&gt;(?:&#91;a-z0-9&#93;+(?:&#91;._-&#93;&#91;a-z0-9&#93;+)*/)*&#91;a-z0-9&#93;+(?:&#91;._-&#93;&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
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
    <td><a href="#get_repository_policy"><CopyableCode code="get_repository_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the repository policy for the specified repository.</td>
</tr>
<tr>
    <td><a href="#set_repository_policy"><CopyableCode code="set_repository_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-policyText"><code>policyText</code></a></td>
    <td></td>
    <td>Applies a repository policy to the specified public repository to control access permissions. For more information, see Amazon ECR Repository Policies in the Amazon Elastic Container Registry User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_repository_policy"><CopyableCode code="delete_repository_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the repository policy that's associated with the specified repository.</td>
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
    defaultValue="get_repository_policy"
    values={[
        { label: 'get_repository_policy', value: 'get_repository_policy' }
    ]}
>
<TabItem value="get_repository_policy">

Retrieves the repository policy for the specified repository.

```sql
SELECT
policyText,
registryId,
repositoryName
FROM aws.ecr_public.repository_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_repository_policy"
    values={[
        { label: 'set_repository_policy', value: 'set_repository_policy' }
    ]}
>
<TabItem value="set_repository_policy">

Applies a repository policy to the specified public repository to control access permissions. For more information, see Amazon ECR Repository Policies in the Amazon Elastic Container Registry User Guide.

```sql
UPDATE aws.ecr_public.repository_policies
SET 
registryId = '{{ registryId }}',
repositoryName = '{{ repositoryName }}',
policyText = '{{ policyText }}',
force = {{ force }}
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND policyText = '{{ policyText }}' --required
RETURNING
policyText,
registryId,
repositoryName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repository_policy"
    values={[
        { label: 'delete_repository_policy', value: 'delete_repository_policy' }
    ]}
>
<TabItem value="delete_repository_policy">

Deletes the repository policy that's associated with the specified repository.

```sql
DELETE FROM aws.ecr_public.repository_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
