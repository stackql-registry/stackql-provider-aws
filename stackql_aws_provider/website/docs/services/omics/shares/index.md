--- 
title: shares
hide_title: false
hide_table_of_contents: false
keywords:
  - shares
  - omics
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

Creates, updates, deletes, gets or lists a <code>shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_share"
    values={[
        { label: 'get_share', value: 'get_share' },
        { label: 'list_shares', value: 'list_shares' }
    ]}
>
<TabItem value="get_share">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the resource share was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerId" /></td>
    <td><code>string</code></td>
    <td>The account ID for the data owner. The owner creates the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="principalSubscriber" /></td>
    <td><code>string</code></td>
    <td>The principal subscriber is the account that is sharing the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Arn of the shared resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the shared resource.</td>
</tr>
<tr>
    <td><CopyableCode code="shareId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="shareName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource share. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the share. (PENDING, ACTIVATING, ACTIVE, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message for a resource share. It provides additional details about the share status.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the resource share update.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_shares">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the resource share was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerId" /></td>
    <td><code>string</code></td>
    <td>The account ID for the data owner. The owner creates the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="principalSubscriber" /></td>
    <td><code>string</code></td>
    <td>The principal subscriber is the account that is sharing the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Arn of the shared resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the shared resource.</td>
</tr>
<tr>
    <td><CopyableCode code="shareId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="shareName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource share. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the share. (PENDING, ACTIVATING, ACTIVE, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message for a resource share. It provides additional details about the share status.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the resource share update.</td>
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
    <td><a href="#get_share"><CopyableCode code="get_share" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the specified resource share.</td>
</tr>
<tr>
    <td><a href="#list_shares"><CopyableCode code="list_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves the resource shares associated with an account. Use the filter parameter to retrieve a specific subset of the shares.</td>
</tr>
<tr>
    <td><a href="#create_share"><CopyableCode code="create_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-principalSubscriber"><code>principalSubscriber</code></a></td>
    <td></td>
    <td>Creates a cross-account shared resource. The resource owner makes an offer to share the resource with the principal subscriber (an AWS user with a different account than the resource owner). The following resources support cross-account sharing: HealthOmics variant stores HealthOmics annotation stores Private workflows</td>
</tr>
<tr>
    <td><a href="#delete_share"><CopyableCode code="delete_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource share. If you are the resource owner, the subscriber will no longer have access to the shared resource. If you are the subscriber, this operation deletes your access to the share.</td>
</tr>
<tr>
    <td><a href="#accept_share"><CopyableCode code="accept_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Accept a resource share request.</td>
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
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource share.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of shares to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_share"
    values={[
        { label: 'get_share', value: 'get_share' },
        { label: 'list_shares', value: 'list_shares' }
    ]}
>
<TabItem value="get_share">

Retrieves the metadata for the specified resource share.

```sql
SELECT
creationTime,
ownerId,
principalSubscriber,
resourceArn,
resourceId,
shareId,
shareName,
status,
statusMessage,
updateTime
FROM aws.omics.shares
WHERE share_id = '{{ share_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_shares">

Retrieves the resource shares associated with an account. Use the filter parameter to retrieve a specific subset of the shares.

```sql
SELECT
creationTime,
ownerId,
principalSubscriber,
resourceArn,
resourceId,
shareId,
shareName,
status,
statusMessage,
updateTime
FROM aws.omics.shares
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_share"
    values={[
        { label: 'create_share', value: 'create_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_share">

Creates a cross-account shared resource. The resource owner makes an offer to share the resource with the principal subscriber (an AWS user with a different account than the resource owner). The following resources support cross-account sharing: HealthOmics variant stores HealthOmics annotation stores Private workflows

```sql
INSERT INTO aws.omics.shares (
resourceArn,
principalSubscriber,
shareName,
region
)
SELECT 
'{{ resourceArn }}' /* required */,
'{{ principalSubscriber }}' /* required */,
'{{ shareName }}',
'{{ region }}'
RETURNING
shareId,
shareName,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: shares
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the shares resource.
    - name: resourceArn
      value: "{{ resourceArn }}"
    - name: principalSubscriber
      value: "{{ principalSubscriber }}"
    - name: shareName
      value: "{{ shareName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_share"
    values={[
        { label: 'delete_share', value: 'delete_share' }
    ]}
>
<TabItem value="delete_share">

Deletes a resource share. If you are the resource owner, the subscriber will no longer have access to the shared resource. If you are the subscriber, this operation deletes your access to the share.

```sql
DELETE FROM aws.omics.shares
WHERE share_id = '{{ share_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_share"
    values={[
        { label: 'accept_share', value: 'accept_share' }
    ]}
>
<TabItem value="accept_share">

Accept a resource share request.

```sql
EXEC aws.omics.shares.accept_share 
@share_id='{{ share_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
