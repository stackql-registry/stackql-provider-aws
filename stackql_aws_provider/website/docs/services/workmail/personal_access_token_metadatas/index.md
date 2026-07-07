--- 
title: personal_access_token_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - personal_access_token_metadatas
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

Creates, updates, deletes, gets or lists a <code>personal_access_token_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="personal_access_token_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.personal_access_token_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_personal_access_token_metadata"
    values={[
        { label: 'get_personal_access_token_metadata', value: 'get_personal_access_token_metadata' }
    ]}
>
<TabItem value="get_personal_access_token_metadata">

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
    <td><CopyableCode code="DateCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Personal Access Token ID was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DateLastUsed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the Personal Access Token ID was last used.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Personal Access Token ID will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The Personal Access Token name. (pattern: &lt;code&gt;&#91;^\x00-\x1F\x7F\x3C\x3E\x5C&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PersonalAccessTokenId" /></td>
    <td><code>string</code></td>
    <td>The Personal Access Token ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Scopes" /></td>
    <td><code>array</code></td>
    <td>Lists all the Personal Access Token permissions for a mailbox.</td>
</tr>
<tr>
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>The WorkMail User ID.</td>
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
    <td><a href="#get_personal_access_token_metadata"><CopyableCode code="get_personal_access_token_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Requests details of a specific Personal Access Token within the WorkMail organization.</td>
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
    defaultValue="get_personal_access_token_metadata"
    values={[
        { label: 'get_personal_access_token_metadata', value: 'get_personal_access_token_metadata' }
    ]}
>
<TabItem value="get_personal_access_token_metadata">

Requests details of a specific Personal Access Token within the WorkMail organization.

```sql
SELECT
DateCreated,
DateLastUsed,
ExpiresTime,
Name,
PersonalAccessTokenId,
Scopes,
UserId
FROM aws.workmail.personal_access_token_metadatas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
