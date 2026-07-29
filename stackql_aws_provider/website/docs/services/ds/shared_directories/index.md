--- 
title: shared_directories
hide_title: false
hide_table_of_contents: false
keywords:
  - shared_directories
  - ds
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

Creates, updates, deletes, gets or lists a <code>shared_directories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shared_directories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.shared_directories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_shared_directories"
    values={[
        { label: 'describe_shared_directories', value: 'describe_shared_directories' }
    ]}
>
<TabItem value="describe_shared_directories">

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
    <td><CopyableCode code="created_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the shared directory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the shared directory was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the directory owner account, which contains the directory that has been shared to the consumer account. (pattern: &lt;code&gt;^(\d&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_directory_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the directory in the directory owner account. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="share_method" /></td>
    <td><code>string</code></td>
    <td>The method used when sharing a directory to determine whether the directory should be shared within your Amazon Web Services organization (ORGANIZATIONS) or with any Amazon Web Services account by sending a shared directory request (HANDSHAKE). (ORGANIZATIONS, HANDSHAKE)</td>
</tr>
<tr>
    <td><CopyableCode code="share_notes" /></td>
    <td><code>string</code></td>
    <td>A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="share_status" /></td>
    <td><code>string</code></td>
    <td>Current directory status of the shared Managed Microsoft AD directory. (Shared, PendingAcceptance, Rejected, Rejecting, RejectFailed, Sharing, ShareFailed, Deleted, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="shared_account_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the directory consumer account that has access to the shared directory (OwnerDirectoryId) in the directory owner account. (pattern: &lt;code&gt;^(\d&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="shared_directory_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_shared_directories"><CopyableCode code="describe_shared_directories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the shared directories in your account.</td>
</tr>
<tr>
    <td><a href="#accept_shared_directory"><CopyableCode code="accept_shared_directory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SharedDirectoryId"><code>SharedDirectoryId</code></a></td>
    <td></td>
    <td>Accepts a directory sharing request that was sent from the directory owner account.</td>
</tr>
<tr>
    <td><a href="#reject_shared_directory"><CopyableCode code="reject_shared_directory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SharedDirectoryId"><code>SharedDirectoryId</code></a></td>
    <td></td>
    <td>Rejects a directory sharing request that was sent from the directory owner account.</td>
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
    defaultValue="describe_shared_directories"
    values={[
        { label: 'describe_shared_directories', value: 'describe_shared_directories' }
    ]}
>
<TabItem value="describe_shared_directories">

Returns the shared directories in your account.

```sql
SELECT
created_date_time,
last_updated_date_time,
owner_account_id,
owner_directory_id,
share_method,
share_notes,
share_status,
shared_account_id,
shared_directory_id
FROM aws.ds.shared_directories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_shared_directory"
    values={[
        { label: 'accept_shared_directory', value: 'accept_shared_directory' },
        { label: 'reject_shared_directory', value: 'reject_shared_directory' }
    ]}
>
<TabItem value="accept_shared_directory">

Accepts a directory sharing request that was sent from the directory owner account.

```sql
EXEC aws.ds.shared_directories.accept_shared_directory 
@region='{{ region }}' --required 
@@json=
'{
"SharedDirectoryId": "{{ SharedDirectoryId }}"
}'
;
```
</TabItem>
<TabItem value="reject_shared_directory">

Rejects a directory sharing request that was sent from the directory owner account.

```sql
EXEC aws.ds.shared_directories.reject_shared_directory 
@region='{{ region }}' --required 
@@json=
'{
"SharedDirectoryId": "{{ SharedDirectoryId }}"
}'
;
```
</TabItem>
</Tabs>
