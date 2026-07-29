--- 
title: notification_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - notification_channels
  - fms
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

Creates, updates, deletes, gets or lists a <code>notification_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notification_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.notification_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notification_channel"
    values={[
        { label: 'get_notification_channel', value: 'get_notification_channel' }
    ]}
>
<TabItem value="get_notification_channel">

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
    <td><CopyableCode code="sns_role_name" /></td>
    <td><code>string</code></td>
    <td>The IAM role that is used by Firewall Manager to record activity to SNS. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sns_topic_arn" /></td>
    <td><code>string</code></td>
    <td>The SNS topic that records Firewall Manager activity. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
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
    <td><a href="#get_notification_channel"><CopyableCode code="get_notification_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.</td>
</tr>
<tr>
    <td><a href="#put_notification_channel"><CopyableCode code="put_notification_channel" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SnsTopicArn"><code>SnsTopicArn</code></a>, <a href="#parameter-SnsRoleName"><code>SnsRoleName</code></a></td>
    <td></td>
    <td>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs. To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the SnsRoleName to publish SNS logs. If the SnsRoleName provided is a role other than the AWSServiceRoleForFMS service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal fms.amazonaws.com to assume this role. For information about configuring an SNS access policy, see Service roles for Firewall Manager in the Firewall Manager Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_notification_channel"><CopyableCode code="delete_notification_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.</td>
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
    defaultValue="get_notification_channel"
    values={[
        { label: 'get_notification_channel', value: 'get_notification_channel' }
    ]}
>
<TabItem value="get_notification_channel">

Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

```sql
SELECT
sns_role_name,
sns_topic_arn
FROM aws.fms.notification_channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_notification_channel"
    values={[
        { label: 'put_notification_channel', value: 'put_notification_channel' }
    ]}
>
<TabItem value="put_notification_channel">

Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs. To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the SnsRoleName to publish SNS logs. If the SnsRoleName provided is a role other than the AWSServiceRoleForFMS service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal fms.amazonaws.com to assume this role. For information about configuring an SNS access policy, see Service roles for Firewall Manager in the Firewall Manager Developer Guide.

```sql
REPLACE aws.fms.notification_channels
SET 
SnsTopicArn = '{{ SnsTopicArn }}',
SnsRoleName = '{{ SnsRoleName }}'
WHERE 
region = '{{ region }}' --required
AND SnsTopicArn = '{{ SnsTopicArn }}' --required
AND SnsRoleName = '{{ SnsRoleName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_notification_channel"
    values={[
        { label: 'delete_notification_channel', value: 'delete_notification_channel' }
    ]}
>
<TabItem value="delete_notification_channel">

Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

```sql
DELETE FROM aws.fms.notification_channels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
