--- 
title: watchlists
hide_title: false
hide_table_of_contents: false
keywords:
  - watchlists
  - voice_id
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

Creates, updates, deletes, gets or lists a <code>watchlists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="watchlists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.voice_id.watchlists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_watchlist"
    values={[
        { label: 'describe_watchlist', value: 'describe_watchlist' },
        { label: 'list_watchlists', value: 'list_watchlists' }
    ]}
>
<TabItem value="describe_watchlist">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the watchlist was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_watchlist" /></td>
    <td><code>boolean</code></td>
    <td>Whether the specified watchlist is the default watchlist of a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the watchlist. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the watchlist. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the watchlist. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the watchlist was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="watchlist_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the watchlist. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_watchlists">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the watchlist was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_watchlist" /></td>
    <td><code>boolean</code></td>
    <td>Whether the specified watchlist is the default watchlist of a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the watchlist. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the watchlist. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the watchlist. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the watchlist was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="watchlist_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the watchlist. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#describe_watchlist"><CopyableCode code="describe_watchlist" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified watchlist.</td>
</tr>
<tr>
    <td><a href="#list_watchlists"><CopyableCode code="list_watchlists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all watchlists in a specified domain.</td>
</tr>
<tr>
    <td><a href="#create_watchlist"><CopyableCode code="create_watchlist" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a></td>
    <td></td>
    <td>Creates a watchlist that fraudsters can be a part of.</td>
</tr>
<tr>
    <td><a href="#update_watchlist"><CopyableCode code="update_watchlist" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-WatchlistId"><code>WatchlistId</code></a></td>
    <td></td>
    <td>Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.</td>
</tr>
<tr>
    <td><a href="#delete_watchlist"><CopyableCode code="delete_watchlist" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted.</td>
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
    defaultValue="describe_watchlist"
    values={[
        { label: 'describe_watchlist', value: 'describe_watchlist' },
        { label: 'list_watchlists', value: 'list_watchlists' }
    ]}
>
<TabItem value="describe_watchlist">

Describes the specified watchlist.

```sql
SELECT
created_at,
default_watchlist,
description,
domain_id,
name,
updated_at,
watchlist_id
FROM aws.voice_id.watchlists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_watchlists">

Lists all watchlists in a specified domain.

```sql
SELECT
created_at,
default_watchlist,
description,
domain_id,
name,
updated_at,
watchlist_id
FROM aws.voice_id.watchlists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_watchlist"
    values={[
        { label: 'create_watchlist', value: 'create_watchlist' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_watchlist">

Creates a watchlist that fraudsters can be a part of.

```sql
INSERT INTO aws.voice_id.watchlists (
ClientToken,
Description,
DomainId,
Name,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Description }}',
'{{ DomainId }}' /* required */,
'{{ Name }}',
'{{ region }}'
RETURNING
watchlist
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: watchlists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the watchlists resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
    - name: Description
      value: "{{ Description }}"
      description: |
        A brief description of this watchlist.
    - name: DomainId
      value: "{{ DomainId }}"
      description: |
        The identifier of the domain that contains the watchlist.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the watchlist.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_watchlist"
    values={[
        { label: 'update_watchlist', value: 'update_watchlist' }
    ]}
>
<TabItem value="update_watchlist">

Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.

```sql
UPDATE aws.voice_id.watchlists
SET 
Description = '{{ Description }}',
DomainId = '{{ DomainId }}',
Name = '{{ Name }}',
WatchlistId = '{{ WatchlistId }}'
WHERE 
region = '{{ region }}' --required
AND DomainId = '{{ DomainId }}' --required
AND WatchlistId = '{{ WatchlistId }}' --required
RETURNING
watchlist;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_watchlist"
    values={[
        { label: 'delete_watchlist', value: 'delete_watchlist' }
    ]}
>
<TabItem value="delete_watchlist">

Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted.

```sql
DELETE FROM aws.voice_id.watchlists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
