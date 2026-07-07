--- 
title: identity_notification_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_notification_attributes
  - ses
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

Creates, updates, deletes, gets or lists an <code>identity_notification_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_notification_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.identity_notification_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_notification_attributes"
    values={[
        { label: 'get_identity_notification_attributes', value: 'get_identity_notification_attributes' }
    ]}
>
<TabItem value="get_identity_notification_attributes">

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
    <td><CopyableCode code="NotificationAttributes" /></td>
    <td><code>string</code></td>
    <td>A map of Identity to IdentityNotificationAttributes.</td>
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
    <td><a href="#get_identity_notification_attributes"><CopyableCode code="get_identity_notification_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Identities"><code>Identities</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes. This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.</td>
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
<tr id="parameter-Identities">
    <td><CopyableCode code="Identities" /></td>
    <td><code>array</code></td>
    <td>A list of one or more identities. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: user@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com.</td>
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
    defaultValue="get_identity_notification_attributes"
    values={[
        { label: 'get_identity_notification_attributes', value: 'get_identity_notification_attributes' }
    ]}
>
<TabItem value="get_identity_notification_attributes">

Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes. This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.

```sql
SELECT
NotificationAttributes
FROM aws.ses.identity_notification_attributes
WHERE Identities = '{{ Identities }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
