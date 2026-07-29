--- 
title: personal_access_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - personal_access_tokens
  - workmail
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

Creates, updates, deletes, gets or lists a <code>personal_access_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="personal_access_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.personal_access_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_personal_access_tokens"
    values={[
        { label: 'list_personal_access_tokens', value: 'list_personal_access_tokens' }
    ]}
>
<TabItem value="list_personal_access_tokens">

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
    <td><CopyableCode code="date_created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Personal Access Token was created.</td>
</tr>
<tr>
    <td><CopyableCode code="date_last_used" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Personal Access Token was last used.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Personal Access Token will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Personal Access Token. (pattern: &lt;code&gt;&#91;^\x00-\x1F\x7F\x3C\x3E\x5C&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="personal_access_token_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Personal Access Token. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>Lists all the Personal Access Token permissions for a mailbox.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID of the WorkMail user associated with the Personal Access Token.</td>
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
    <td><a href="#list_personal_access_tokens"><CopyableCode code="list_personal_access_tokens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a summary of your Personal Access Tokens.</td>
</tr>
<tr>
    <td><a href="#delete_personal_access_token"><CopyableCode code="delete_personal_access_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Personal Access Token from the provided WorkMail Organization.</td>
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
    defaultValue="list_personal_access_tokens"
    values={[
        { label: 'list_personal_access_tokens', value: 'list_personal_access_tokens' }
    ]}
>
<TabItem value="list_personal_access_tokens">

Returns a summary of your Personal Access Tokens.

```sql
SELECT
date_created,
date_last_used,
expires_time,
name,
personal_access_token_id,
scopes,
user_id
FROM aws.workmail.personal_access_tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_personal_access_token"
    values={[
        { label: 'delete_personal_access_token', value: 'delete_personal_access_token' }
    ]}
>
<TabItem value="delete_personal_access_token">

Deletes the Personal Access Token from the provided WorkMail Organization.

```sql
DELETE FROM aws.workmail.personal_access_tokens
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
