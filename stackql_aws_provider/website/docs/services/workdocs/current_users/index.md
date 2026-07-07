--- 
title: current_users
hide_title: false
hide_table_of_contents: false
keywords:
  - current_users
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>current_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="current_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.current_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_current_user"
    values={[
        { label: 'get_current_user', value: 'get_current_user' }
    ]}
>
<TabItem value="get_current_user">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the user. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;+@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GivenName" /></td>
    <td><code>string</code></td>
    <td>The given name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>The locale of the user. (en, fr, ko, de, es, ja, ru, zh_CN, zh_TW, pt_BR, default)</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the user was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the organization. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RecycleBinFolderId" /></td>
    <td><code>string</code></td>
    <td>The ID of the recycle bin folder. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RootFolderId" /></td>
    <td><code>string</code></td>
    <td>The ID of the root folder. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the user. (ACTIVE, INACTIVE, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="Storage" /></td>
    <td><code>object</code></td>
    <td>The storage for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Surname" /></td>
    <td><code>string</code></td>
    <td>The surname of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeZoneId" /></td>
    <td><code>string</code></td>
    <td>The time zone ID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of user. (USER, ADMIN, POWERUSER, MINIMALUSER, WORKSPACESUSER)</td>
</tr>
<tr>
    <td><CopyableCode code="Username" /></td>
    <td><code>string</code></td>
    <td>The login name of the user. (pattern: &lt;code&gt;&#91;\w\-+.&#93;+(@&#91;a-zA-Z0-9.\-&#93;+\.&#91;a-zA-Z&#93;+)?&lt;/code&gt;)</td>
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
    <td><a href="#get_current_user"><CopyableCode code="get_current_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of the current user for whom the authentication token was generated. This is not a valid action for SigV4 (administrative API) clients. This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see Authentication and Access Control for User Applications in the Amazon WorkDocs Developer Guide.</td>
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
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_current_user"
    values={[
        { label: 'get_current_user', value: 'get_current_user' }
    ]}
>
<TabItem value="get_current_user">

Retrieves details of the current user for whom the authentication token was generated. This is not a valid action for SigV4 (administrative API) clients. This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see Authentication and Access Control for User Applications in the Amazon WorkDocs Developer Guide.

```sql
SELECT
CreatedTimestamp,
EmailAddress,
GivenName,
Id,
Locale,
ModifiedTimestamp,
OrganizationId,
RecycleBinFolderId,
RootFolderId,
Status,
Storage,
Surname,
TimeZoneId,
Type,
Username
FROM aws.workdocs.current_users
WHERE Authentication = '{{ Authentication }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
