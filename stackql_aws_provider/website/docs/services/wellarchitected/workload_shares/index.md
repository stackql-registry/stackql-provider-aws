--- 
title: workload_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_shares
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>workload_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workload_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.workload_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workload_shares"
    values={[
        { label: 'list_workload_shares', value: 'list_workload_shares' }
    ]}
>
<TabItem value="list_workload_shares">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workload_share_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of workload share summaries.</td>
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
    <td><a href="#list_workload_shares"><CopyableCode code="list_workload_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SharedWithPrefix"><code>SharedWithPrefix</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>List the workload shares associated with the workload.</td>
</tr>
<tr>
    <td><a href="#create_workload_share"><CopyableCode code="create_workload_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SharedWith"><code>SharedWith</code></a>, <a href="#parameter-PermissionType"><code>PermissionType</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a workload share. The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted. If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload. For more information, see Sharing a workload in the Well-Architected Tool User Guide.</td>
</tr>
<tr>
    <td><a href="#update_workload_share"><CopyableCode code="update_workload_share" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PermissionType"><code>PermissionType</code></a></td>
    <td></td>
    <td>Update a workload share.</td>
</tr>
<tr>
    <td><a href="#delete_workload_share"><CopyableCode code="delete_workload_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a workload share.</td>
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
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for this request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-SharedWithPrefix">
    <td><CopyableCode code="SharedWithPrefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload is shared.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_workload_shares"
    values={[
        { label: 'list_workload_shares', value: 'list_workload_shares' }
    ]}
>
<TabItem value="list_workload_shares">

List the workload shares associated with the workload.

```sql
SELECT
next_token,
workload_id,
workload_share_summaries
FROM aws.wellarchitected.workload_shares
WHERE workload_id = '{{ workload_id }}' -- required
AND region = '{{ region }}' -- required
AND SharedWithPrefix = '{{ SharedWithPrefix }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Status = '{{ Status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workload_share"
    values={[
        { label: 'create_workload_share', value: 'create_workload_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workload_share">

Create a workload share. The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted. If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload. For more information, see Sharing a workload in the Well-Architected Tool User Guide.

```sql
INSERT INTO aws.wellarchitected.workload_shares (
SharedWith,
PermissionType,
ClientRequestToken,
workload_id,
region
)
SELECT 
'{{ SharedWith }}' /* required */,
'{{ PermissionType }}' /* required */,
'{{ ClientRequestToken }}' /* required */,
'{{ workload_id }}',
'{{ region }}'
RETURNING
share_id,
workload_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workload_shares
  props:
    - name: workload_id
      value: "{{ workload_id }}"
      description: Required parameter for the workload_shares resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workload_shares resource.
    - name: SharedWith
      value: "{{ SharedWith }}"
      description: |
        The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
    - name: PermissionType
      value: "{{ PermissionType }}"
      description: |
        Permission granted on a share request.
      valid_values: ['READONLY', 'CONTRIBUTOR']
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned. This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workload_share"
    values={[
        { label: 'update_workload_share', value: 'update_workload_share' }
    ]}
>
<TabItem value="update_workload_share">

Update a workload share.

```sql
UPDATE aws.wellarchitected.workload_shares
SET 
PermissionType = '{{ PermissionType }}'
WHERE 
share_id = '{{ share_id }}' --required
AND workload_id = '{{ workload_id }}' --required
AND region = '{{ region }}' --required
AND PermissionType = '{{ PermissionType }}' --required
RETURNING
workload_id,
workload_share;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workload_share"
    values={[
        { label: 'delete_workload_share', value: 'delete_workload_share' }
    ]}
>
<TabItem value="delete_workload_share">

Delete a workload share.

```sql
DELETE FROM aws.wellarchitected.workload_shares
WHERE share_id = '{{ share_id }}' --required
AND workload_id = '{{ workload_id }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
