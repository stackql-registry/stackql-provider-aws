--- 
title: workload_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_identities
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>workload_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workload_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.workload_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workload_identity"
    values={[
        { label: 'get_workload_identity', value: 'get_workload_identity' },
        { label: 'list_workload_identities', value: 'list_workload_identities' }
    ]}
>
<TabItem value="get_workload_identity">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload identity. (pattern: &lt;code&gt;&#91;A-Za-z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_resource_oauth_2_return_urls" /></td>
    <td><code>array</code></td>
    <td>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workload identity was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workload identity was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_identity_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workload identity.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workload_identities">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload identity. (pattern: &lt;code&gt;&#91;A-Za-z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workload_identity_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workload identity.</td>
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
    <td><a href="#get_workload_identity"><CopyableCode code="get_workload_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a workload identity.</td>
</tr>
<tr>
    <td><a href="#list_workload_identities"><CopyableCode code="list_workload_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all workload identities in your account.</td>
</tr>
<tr>
    <td><a href="#create_workload_identity"><CopyableCode code="create_workload_identity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new workload identity.</td>
</tr>
<tr>
    <td><a href="#update_workload_identity"><CopyableCode code="update_workload_identity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates an existing workload identity.</td>
</tr>
<tr>
    <td><a href="#delete_workload_identity"><CopyableCode code="delete_workload_identity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workload identity.</td>
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
    defaultValue="get_workload_identity"
    values={[
        { label: 'get_workload_identity', value: 'get_workload_identity' },
        { label: 'list_workload_identities', value: 'list_workload_identities' }
    ]}
>
<TabItem value="get_workload_identity">

Retrieves information about a workload identity.

```sql
SELECT
name,
allowed_resource_oauth_2_return_urls,
created_time,
last_updated_time,
workload_identity_arn
FROM aws.bedrock_agentcore_control.workload_identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workload_identities">

Lists all workload identities in your account.

```sql
SELECT
name,
workload_identity_arn
FROM aws.bedrock_agentcore_control.workload_identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workload_identity"
    values={[
        { label: 'create_workload_identity', value: 'create_workload_identity' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workload_identity">

Creates a new workload identity.

```sql
INSERT INTO aws.bedrock_agentcore_control.workload_identities (
name,
allowedResourceOauth2ReturnUrls,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ allowedResourceOauth2ReturnUrls }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
allowed_resource_oauth_2_return_urls,
workload_identity_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workload_identities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workload_identities resource.
    - name: name
      value: "{{ name }}"
    - name: allowedResourceOauth2ReturnUrls
      value:
        - "{{ allowedResourceOauth2ReturnUrls }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workload_identity"
    values={[
        { label: 'update_workload_identity', value: 'update_workload_identity' }
    ]}
>
<TabItem value="update_workload_identity">

Updates an existing workload identity.

```sql
UPDATE aws.bedrock_agentcore_control.workload_identities
SET 
name = '{{ name }}',
allowedResourceOauth2ReturnUrls = '{{ allowedResourceOauth2ReturnUrls }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
name,
allowed_resource_oauth_2_return_urls,
created_time,
last_updated_time,
workload_identity_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workload_identity"
    values={[
        { label: 'delete_workload_identity', value: 'delete_workload_identity' }
    ]}
>
<TabItem value="delete_workload_identity">

Deletes a workload identity.

```sql
DELETE FROM aws.bedrock_agentcore_control.workload_identities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
