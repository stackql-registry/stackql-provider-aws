--- 
title: member_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - member_accounts
  - notifications
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

Creates, updates, deletes, gets or lists a <code>member_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="member_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.member_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_member_accounts"
    values={[
        { label: 'list_member_accounts', value: 'list_member_accounts' }
    ]}
>
<TabItem value="list_member_accounts">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the member account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notification configuration associated with the member account. (pattern: &lt;code&gt;arn:aws:notifications::&#91;0-9&#93;&#123;12&#125;:configuration/&#91;a-z0-9&#93;&#123;27&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="organizational_unit_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the organizational unit containing the member account. (pattern: &lt;code&gt;(Root|r-&#91;0-9a-z&#93;&#123;4,32&#125;|ou-&#91;0-9a-z&#93;&#123;4,32&#125;-&#91;a-z0-9&#93;&#123;8,32&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the member account. (ACTIVE, PENDING, INACTIVE, CREATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the member account.</td>
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
    <td><a href="#list_member_accounts"><CopyableCode code="list_member_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-notificationConfigurationArn"><code>notificationConfigurationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-memberAccount"><code>memberAccount</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-organizationalUnitId"><code>organizationalUnitId</code></a></td>
    <td>Returns a list of member accounts associated with a notification configuration.</td>
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
<tr id="parameter-notificationConfigurationArn">
    <td><CopyableCode code="notificationConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the notification configuration used to filter the member accounts.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Valid values are 1-100.</td>
</tr>
<tr id="parameter-memberAccount">
    <td><CopyableCode code="memberAccount" /></td>
    <td><code>string</code></td>
    <td>The member account identifier used to filter the results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results. Use the value returned in the previous response.</td>
</tr>
<tr id="parameter-organizationalUnitId">
    <td><CopyableCode code="organizationalUnitId" /></td>
    <td><code>string</code></td>
    <td>The organizational unit ID used to filter the member accounts.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status used to filter the member accounts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_member_accounts"
    values={[
        { label: 'list_member_accounts', value: 'list_member_accounts' }
    ]}
>
<TabItem value="list_member_accounts">

Returns a list of member accounts associated with a notification configuration.

```sql
SELECT
account_id,
notification_configuration_arn,
organizational_unit_id,
status,
status_reason
FROM aws.notifications.member_accounts
WHERE notificationConfigurationArn = '{{ notificationConfigurationArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND memberAccount = '{{ memberAccount }}'
AND status = '{{ status }}'
AND organizationalUnitId = '{{ organizationalUnitId }}'
;
```
</TabItem>
</Tabs>
