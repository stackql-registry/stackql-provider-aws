--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="get_user">

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
    <td><CopyableCode code="firstName" /></td>
    <td><code>string</code></td>
    <td>The first name of the user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isAdmin" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user has administrator privileges in the network.</td>
</tr>
<tr>
    <td><CopyableCode code="lastActivity" /></td>
    <td><code>integer</code></td>
    <td>The timestamp of the user's last activity in the network, specified in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="lastLogin" /></td>
    <td><code>integer</code></td>
    <td>The timestamp of the user's last login to the network, specified in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="lastName" /></td>
    <td><code>string</code></td>
    <td>The last name of the user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="securityGroupIds" /></td>
    <td><code>array</code></td>
    <td>A list of security group IDs to which the user belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The current status of the user (1 for pending, 2 for active).</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user is currently suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The email address or username of the user. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

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
    <td><a href="#get_user"><CopyableCode code="get_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a></td>
    <td>Retrieves detailed information about a specific user in a Wickr network, including their profile, status, and activity history.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortFields"><code>sortFields</code></a>, <a href="#parameter-sortDirection"><code>sortDirection</code></a>, <a href="#parameter-firstName"><code>firstName</code></a>, <a href="#parameter-lastName"><code>lastName</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-groupId"><code>groupId</code></a></td>
    <td>Retrieves a paginated list of users in a specified Wickr network. You can filter and sort the results based on various criteria such as name, status, or security group membership.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userId"><code>userId</code></a></td>
    <td></td>
    <td>Updates the properties of an existing user in a Wickr network. This operation allows you to modify the user's name, password, security group membership, and invite code settings. codeValidation, inviteCode, and inviteCodeTtl are restricted to networks under preview only.</td>
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
    <td>The ID of the Wickr network containing the user to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user to retrieve.</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time for filtering the user's last activity. Only activity before this timestamp will be considered. Time is specified in epoch seconds.</td>
</tr>
<tr id="parameter-firstName">
    <td><CopyableCode code="firstName" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include users with first names matching this value.</td>
</tr>
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include users belonging to this security group.</td>
</tr>
<tr id="parameter-lastName">
    <td><CopyableCode code="lastName" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include users with last names matching this value.</td>
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
    <td>The fields to sort users by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', 'lastName', 'status', and 'groupId'.</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time for filtering the user's last activity. Only activity after this timestamp will be considered. Time is specified in epoch seconds.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>Filter results to only include users with this status (1 for pending, 2 for active).</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include users with usernames matching this value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="get_user">

Retrieves detailed information about a specific user in a Wickr network, including their profile, status, and activity history.

```sql
SELECT
firstName,
isAdmin,
lastActivity,
lastLogin,
lastName,
securityGroupIds,
status,
suspended,
userId,
username
FROM aws.wickr.users
WHERE network_id = '{{ network_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
;
```
</TabItem>
<TabItem value="list_users">

Retrieves a paginated list of users in a specified Wickr network. You can filter and sort the results based on various criteria such as name, status, or security group membership.

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
FROM aws.wickr.users
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND sortFields = '{{ sortFields }}'
AND sortDirection = '{{ sortDirection }}'
AND firstName = '{{ firstName }}'
AND lastName = '{{ lastName }}'
AND username = '{{ username }}'
AND status = '{{ status }}'
AND groupId = '{{ groupId }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user"
    values={[
        { label: 'update_user', value: 'update_user' }
    ]}
>
<TabItem value="update_user">

Updates the properties of an existing user in a Wickr network. This operation allows you to modify the user's name, password, security group membership, and invite code settings. codeValidation, inviteCode, and inviteCodeTtl are restricted to networks under preview only.

```sql
UPDATE aws.wickr.users
SET 
userId = '{{ userId }}',
userDetails = '{{ userDetails }}'
WHERE 
network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
AND userId = '{{ userId }}' --required
RETURNING
codeValidation,
firstName,
inviteCode,
inviteExpiration,
lastName,
middleName,
modified,
networkId,
securityGroupIds,
status,
suspended,
userId;
```
</TabItem>
</Tabs>
