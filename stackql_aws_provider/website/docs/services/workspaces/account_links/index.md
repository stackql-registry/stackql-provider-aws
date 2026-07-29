--- 
title: account_links
hide_title: false
hide_table_of_contents: false
keywords:
  - account_links
  - workspaces
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

Creates, updates, deletes, gets or lists an <code>account_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.account_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_link"
    values={[
        { label: 'get_account_link', value: 'get_account_link' }
    ]}
>
<TabItem value="get_account_link">

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
    <td><CopyableCode code="account_link_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the account link. (pattern: &lt;code&gt;^link-.&#123;8,24&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="account_link_status" /></td>
    <td><code>string</code></td>
    <td>The status of the account link. (LINKED, LINKING_FAILED, LINK_NOT_FOUND, PENDING_ACCEPTANCE_BY_TARGET_ACCOUNT, REJECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="source_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the source account. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="target_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the target account. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_account_link"><CopyableCode code="get_account_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves account link information.</td>
</tr>
<tr>
    <td><a href="#create_account_link_invitation"><CopyableCode code="create_account_link_invitation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetAccountId"><code>TargetAccountId</code></a></td>
    <td></td>
    <td>Creates the account link invitation.</td>
</tr>
<tr>
    <td><a href="#delete_account_link_invitation"><CopyableCode code="delete_account_link_invitation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the account link invitation.</td>
</tr>
<tr>
    <td><a href="#accept_account_link_invitation"><CopyableCode code="accept_account_link_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LinkId"><code>LinkId</code></a></td>
    <td></td>
    <td>Accepts the account link invitation. There's currently no unlinking capability after you accept the account linking invitation.</td>
</tr>
<tr>
    <td><a href="#list_account_links"><CopyableCode code="list_account_links" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all account links.</td>
</tr>
<tr>
    <td><a href="#reject_account_link_invitation"><CopyableCode code="reject_account_link_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LinkId"><code>LinkId</code></a></td>
    <td></td>
    <td>Rejects the account link invitation.</td>
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
    defaultValue="get_account_link"
    values={[
        { label: 'get_account_link', value: 'get_account_link' }
    ]}
>
<TabItem value="get_account_link">

Retrieves account link information.

```sql
SELECT
account_link_id,
account_link_status,
source_account_id,
target_account_id
FROM aws.workspaces.account_links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account_link_invitation"
    values={[
        { label: 'create_account_link_invitation', value: 'create_account_link_invitation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account_link_invitation">

Creates the account link invitation.

```sql
INSERT INTO aws.workspaces.account_links (
TargetAccountId,
ClientToken,
region
)
SELECT 
'{{ TargetAccountId }}' /* required */,
'{{ ClientToken }}',
'{{ region }}'
RETURNING
account_link
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_links
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_links resource.
    - name: TargetAccountId
      value: "{{ TargetAccountId }}"
      description: |
        The identifier of the target account.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A string of up to 64 ASCII characters that Amazon WorkSpaces uses to ensure idempotent creation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_link_invitation"
    values={[
        { label: 'delete_account_link_invitation', value: 'delete_account_link_invitation' }
    ]}
>
<TabItem value="delete_account_link_invitation">

Deletes the account link invitation.

```sql
DELETE FROM aws.workspaces.account_links
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_account_link_invitation"
    values={[
        { label: 'accept_account_link_invitation', value: 'accept_account_link_invitation' },
        { label: 'list_account_links', value: 'list_account_links' },
        { label: 'reject_account_link_invitation', value: 'reject_account_link_invitation' }
    ]}
>
<TabItem value="accept_account_link_invitation">

Accepts the account link invitation. There's currently no unlinking capability after you accept the account linking invitation.

```sql
EXEC aws.workspaces.account_links.accept_account_link_invitation 
@region='{{ region }}' --required 
@@json=
'{
"LinkId": "{{ LinkId }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
<TabItem value="list_account_links">

Lists all account links.

```sql
EXEC aws.workspaces.account_links.list_account_links 
@region='{{ region }}' --required 
@@json=
'{
"LinkStatusFilter": "{{ LinkStatusFilter }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
<TabItem value="reject_account_link_invitation">

Rejects the account link invitation.

```sql
EXEC aws.workspaces.account_links.reject_account_link_invitation 
@region='{{ region }}' --required 
@@json=
'{
"LinkId": "{{ LinkId }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
