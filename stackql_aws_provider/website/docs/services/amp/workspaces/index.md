--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - amp
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

Creates, updates, deletes, gets or lists a <code>workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>A user-assigned workspace alias.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the workspace. For example, arn:aws:aps:<code>&lt;region&gt;</code>:123456789012:workspace/ws-example1-1234-abcd-5678-ef90abcd1234. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:aps:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:workspace/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>A KMS Key ARN. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:kms:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;-a-f0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="prometheusEndpoint" /></td>
    <td><code>string</code></td>
    <td>The Prometheus endpoint available for this workspace. For example, https:​//aps-workspaces.<code>&lt;region&gt;</code>.amazonaws.com/workspaces/ws-example1-1234-abcd-5678-ef90abcd1234/api/v1/.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tag keys and values that are associated with the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceId" /></td>
    <td><code>string</code></td>
    <td>A workspace ID. (pattern: &lt;code&gt;.*&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workspaces">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>A user-assigned workspace alias.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the workspace. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:aps:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:workspace/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>A KMS Key ARN. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:kms:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;-a-f0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The list of tag keys and values that are associated with the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceId" /></td>
    <td><code>string</code></td>
    <td>A workspace ID. (pattern: &lt;code&gt;.*&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_workspace"><CopyableCode code="describe_workspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an existing workspace.</td>
</tr>
<tr>
    <td><a href="#list_workspaces"><CopyableCode code="list_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all of the Amazon Managed Service for Prometheus workspaces in your account. This includes workspaces being created or deleted.</td>
</tr>
<tr>
    <td><a href="#create_workspace"><CopyableCode code="create_workspace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Prometheus workspace. A workspace is a logical space dedicated to the storage and querying of Prometheus metrics. You can have one or more workspaces in each Region in your account.</td>
</tr>
<tr>
    <td><a href="#update_workspace_alias"><CopyableCode code="update_workspace_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the alias of an existing workspace.</td>
</tr>
<tr>
    <td><a href="#delete_workspace"><CopyableCode code="delete_workspace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an existing workspace. When you delete a workspace, the data that has been ingested into it is not immediately deleted. It will be permanently deleted within one month.</td>
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
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace to delete.</td>
</tr>
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>If this is included, it filters the results to only the workspaces with names that start with the value that you specify here. Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workspaces to return per request. The default is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call. For example, if your initial request has maxResults of 10, and there are 12 workspaces to return, then your initial request will return 10 and a nextToken. Using the next token in a subsequent call will return the remaining 2 workspaces.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

Returns information about an existing workspace.

```sql
SELECT
alias,
arn,
createdAt,
kmsKeyArn,
prometheusEndpoint,
status,
tags,
workspaceId
FROM aws.amp.workspaces
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workspaces">

Lists all of the Amazon Managed Service for Prometheus workspaces in your account. This includes workspaces being created or deleted.

```sql
SELECT
alias,
arn,
createdAt,
kmsKeyArn,
status,
tags,
workspaceId
FROM aws.amp.workspaces
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND alias = '{{ alias }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace"
    values={[
        { label: 'create_workspace', value: 'create_workspace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace">

Creates a Prometheus workspace. A workspace is a logical space dedicated to the storage and querying of Prometheus metrics. You can have one or more workspaces in each Region in your account.

```sql
INSERT INTO aws.amp.workspaces (
alias,
clientToken,
tags,
kmsKeyArn,
region
)
SELECT 
'{{ alias }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ kmsKeyArn }}',
'{{ region }}'
RETURNING
arn,
kmsKeyArn,
status,
tags,
workspaceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspaces resource.
    - name: alias
      value: "{{ alias }}"
      description: |
        A user-assigned workspace alias.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier used to ensure the idempotency of a write request.
    - name: tags
      value: "{{ tags }}"
      description: |
        A tag associated with a resource.
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
      description: |
        A KMS Key ARN.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace_alias"
    values={[
        { label: 'update_workspace_alias', value: 'update_workspace_alias' }
    ]}
>
<TabItem value="update_workspace_alias">

Updates the alias of an existing workspace.

```sql
UPDATE aws.amp.workspaces
SET 
alias = '{{ alias }}',
clientToken = '{{ clientToken }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace"
    values={[
        { label: 'delete_workspace', value: 'delete_workspace' }
    ]}
>
<TabItem value="delete_workspace">

Deletes an existing workspace. When you delete a workspace, the data that has been ingested into it is not immediately deleted. It will be permanently deleted within one month.

```sql
DELETE FROM aws.amp.workspaces
WHERE workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
