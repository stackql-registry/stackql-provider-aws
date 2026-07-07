--- 
title: blocked_guest_users
hide_title: false
hide_table_of_contents: false
keywords:
  - blocked_guest_users
  - wickr
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

Creates, updates, deletes, gets or lists a <code>blocked_guest_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blocked_guest_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.blocked_guest_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_blocked_guest_users"
    values={[
        { label: 'list_blocked_guest_users', value: 'list_blocked_guest_users' }
    ]}
>
<TabItem value="list_blocked_guest_users">

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
    <td><CopyableCode code="admin" /></td>
    <td><code>string</code></td>
    <td>The username of the administrator who blocked this guest user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modified" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the guest user was blocked or last modified. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the blocked guest user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usernameHash" /></td>
    <td><code>string</code></td>
    <td>The unique username hash identifier for the blocked guest user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_blocked_guest_users"><CopyableCode code="list_blocked_guest_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortDirection"><code>sortDirection</code></a>, <a href="#parameter-sortFields"><code>sortFields</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-admin"><code>admin</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of guest users who have been blocked from a Wickr network. You can filter and sort the results.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network from which to list blocked guest users.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-admin">
    <td><CopyableCode code="admin" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include blocked guest users that were blocked by this administrator.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of blocked guest users to return in a single page. Valid range is 1-100. Default is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</td>
</tr>
<tr id="parameter-sortDirection">
    <td><CopyableCode code="sortDirection" /></td>
    <td><code>string</code></td>
    <td>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</td>
</tr>
<tr id="parameter-sortFields">
    <td><CopyableCode code="sortFields" /></td>
    <td><code>string</code></td>
    <td>The field to sort blocked guest users by. Accepted values include 'username', 'admin', and 'modified'.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include blocked guest users with usernames matching this value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_blocked_guest_users"
    values={[
        { label: 'list_blocked_guest_users', value: 'list_blocked_guest_users' }
    ]}
>
<TabItem value="list_blocked_guest_users">

Retrieves a paginated list of guest users who have been blocked from a Wickr network. You can filter and sort the results.

```sql
SELECT
admin,
modified,
username,
usernameHash
FROM aws.wickr.blocked_guest_users
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND sortDirection = '{{ sortDirection }}'
AND sortFields = '{{ sortFields }}'
AND username = '{{ username }}'
AND admin = '{{ admin }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
