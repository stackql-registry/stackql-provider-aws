--- 
title: authentication_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - authentication_profiles
  - connect
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

Creates, updates, deletes, gets or lists an <code>authentication_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authentication_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.authentication_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_authentication_profile"
    values={[
        { label: 'describe_authentication_profile', value: 'describe_authentication_profile' },
        { label: 'list_authentication_profiles', value: 'list_authentication_profiles' }
    ]}
>
<TabItem value="describe_authentication_profile">

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
    <td><CopyableCode code="AllowedIps" /></td>
    <td><code>array</code></td>
    <td>A list of IP address range strings that are allowed to access the Amazon Connect instance. For more information about how to configure IP addresses, see Configure IP address based access control in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the authentication profile.</td>
</tr>
<tr>
    <td><CopyableCode code="BlockedIps" /></td>
    <td><code>array</code></td>
    <td>A list of IP address range strings that are blocked from accessing the Amazon Connect instance. For more information about how to configure IP addresses, see Configure IP address based access control in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the authentication profile was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the authentication profile.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the authentication profile.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Shows whether the authentication profile is the default authentication profile for the Amazon Connect instance. The default authentication profile applies to all agents in an Amazon Connect instance, unless overridden by another authentication profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the authentication profile was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the authentication profile was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxSessionDuration" /></td>
    <td><code>integer</code></td>
    <td>The long lived session duration for users logged in to Amazon Connect, in minutes. After this time period, users must log in again. For more information, see Configure the session duration in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name for the authentication profile.</td>
</tr>
<tr>
    <td><CopyableCode code="PeriodicSessionDuration" /></td>
    <td><code>integer</code></td>
    <td>The short lived session duration configuration for users logged in to Amazon Connect, in minutes. This value determines the maximum possible time before an agent is authenticated. For more information, see Configure the session duration in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionInactivityDuration" /></td>
    <td><code>integer</code></td>
    <td>The period, in minutes, before an agent is automatically signed out of the contact center when they go inactive.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionInactivityHandlingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Determines if automatic logout on user inactivity is enabled.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_authentication_profiles">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the authentication profile summary.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the authentication profile.</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Shows whether the authentication profile is the default authentication profile for the Amazon Connect instance. The default authentication profile applies to all agents in an Amazon Connect instance, unless overridden by another authentication profile.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region when the authentication profile summary was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the authentication profile summary was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the authentication profile summary.</td>
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
    <td><a href="#describe_authentication_profile"><CopyableCode code="describe_authentication_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-authentication_profile_id"><code>authentication_profile_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Describes the target authentication profile.</td>
</tr>
<tr>
    <td><a href="#list_authentication_profiles"><CopyableCode code="list_authentication_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Provides summary information about the authentication profiles in a specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#update_authentication_profile"><CopyableCode code="update_authentication_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-authentication_profile_id"><code>authentication_profile_id</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Updates the selected authentication profile.</td>
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
<tr id="parameter-authentication_profile_id">
    <td><CopyableCode code="authentication_profile_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the authentication profile.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_authentication_profile"
    values={[
        { label: 'describe_authentication_profile', value: 'describe_authentication_profile' },
        { label: 'list_authentication_profiles', value: 'list_authentication_profiles' }
    ]}
>
<TabItem value="describe_authentication_profile">

This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Describes the target authentication profile.

```sql
SELECT
AllowedIps,
Arn,
BlockedIps,
CreatedTime,
Description,
Id,
IsDefault,
LastModifiedRegion,
LastModifiedTime,
MaxSessionDuration,
Name,
PeriodicSessionDuration,
SessionInactivityDuration,
SessionInactivityHandlingEnabled
FROM aws.connect.authentication_profiles
WHERE authentication_profile_id = '{{ authentication_profile_id }}' -- required
AND instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_authentication_profiles">

This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Provides summary information about the authentication profiles in a specified Amazon Connect instance.

```sql
SELECT
Arn,
Id,
IsDefault,
LastModifiedRegion,
LastModifiedTime,
Name
FROM aws.connect.authentication_profiles
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_authentication_profile"
    values={[
        { label: 'update_authentication_profile', value: 'update_authentication_profile' }
    ]}
>
<TabItem value="update_authentication_profile">

This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Updates the selected authentication profile.

```sql
UPDATE aws.connect.authentication_profiles
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
AllowedIps = '{{ AllowedIps }}',
BlockedIps = '{{ BlockedIps }}',
PeriodicSessionDuration = {{ PeriodicSessionDuration }},
SessionInactivityDuration = {{ SessionInactivityDuration }},
SessionInactivityHandlingEnabled = {{ SessionInactivityHandlingEnabled }}
WHERE 
authentication_profile_id = '{{ authentication_profile_id }}' --required
AND instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
