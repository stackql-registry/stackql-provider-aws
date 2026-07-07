--- 
title: security_group_users
hide_title: false
hide_table_of_contents: false
keywords:
  - security_group_users
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

Creates, updates, deletes, gets or lists a <code>security_group_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_group_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.security_group_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_security_group_users"
    values={[
        { label: 'list_security_group_users', value: 'list_security_group_users' }
    ]}
>
<TabItem value="list_security_group_users">

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
    <td><CopyableCode code="cell" /></td>
    <td><code>string</code></td>
    <td>The phone number minus country code, used for cloud deployments. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="challengeFailures" /></td>
    <td><code>integer</code></td>
    <td>The number of failed password attempts for enterprise deployments, used for account lockout policies.</td>
</tr>
<tr>
    <td><CopyableCode code="codeValidation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user can be verified through a custom invite code.</td>
</tr>
<tr>
    <td><CopyableCode code="countryCode" /></td>
    <td><code>string</code></td>
    <td>The country code for the user's phone number, used for cloud deployments. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firstName" /></td>
    <td><code>string</code></td>
    <td>The first name of the user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inviteCode" /></td>
    <td><code>string</code></td>
    <td>The invitation code for this user, used during registration to join the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user has administrator privileges in the network.</td>
</tr>
<tr>
    <td><CopyableCode code="isInviteExpired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user's email invitation code has expired, applicable to cloud deployments.</td>
</tr>
<tr>
    <td><CopyableCode code="isUser" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this account is a user (as opposed to a bot or other account type).</td>
</tr>
<tr>
    <td><CopyableCode code="lastName" /></td>
    <td><code>string</code></td>
    <td>The last name of the user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="otpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether one-time password (OTP) authentication is enabled for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="scimId" /></td>
    <td><code>string</code></td>
    <td>The SCIM (System for Cross-domain Identity Management) identifier for the user, used for identity synchronization. Currently not used. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="securityGroups" /></td>
    <td><code>array</code></td>
    <td>A list of security group IDs to which the user is assigned, determining their permissions and feature access.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The current status of the user (1 for pending invitation, 2 for active).</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user is currently suspended and unable to access the network.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The descriptive type of the user account (e.g., 'user'). (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="uname" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user within the network. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The email address or username of the user. For bots, this must end in 'bot'. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_security_group_users"><CopyableCode code="list_security_group_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortFields"><code>sortFields</code></a>, <a href="#parameter-sortDirection"><code>sortDirection</code></a></td>
    <td>Retrieves a paginated list of users who belong to a specific security group in a Wickr network.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the security group whose users will be listed.</td>
</tr>
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network containing the security group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of users to return in a single page. Valid range is 1-100. Default is 10.</td>
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
    <td>The field to sort users by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', and 'lastName'.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_security_group_users"
    values={[
        { label: 'list_security_group_users', value: 'list_security_group_users' }
    ]}
>
<TabItem value="list_security_group_users">

Retrieves a paginated list of users who belong to a specific security group in a Wickr network.

```sql
SELECT
cell,
challengeFailures,
codeValidation,
countryCode,
firstName,
inviteCode,
isAdmin,
isInviteExpired,
isUser,
lastName,
otpEnabled,
scimId,
securityGroups,
status,
suspended,
type_,
uname,
userId,
username
FROM aws.wickr.security_group_users
WHERE network_id = '{{ network_id }}' -- required
AND group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND sortFields = '{{ sortFields }}'
AND sortDirection = '{{ sortDirection }}'
;
```
</TabItem>
</Tabs>
