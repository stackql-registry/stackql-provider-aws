--- 
title: text_message_spend_limit_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - text_message_spend_limit_overrides
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>text_message_spend_limit_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="text_message_spend_limit_overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.text_message_spend_limit_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#set_text_message_spend_limit_override"><CopyableCode code="set_text_message_spend_limit_override" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MonthlyLimit"><code>MonthlyLimit</code></a></td>
    <td></td>
    <td>Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the MaxLimit, which is set by Amazon Web Services.</td>
</tr>
<tr>
    <td><a href="#delete_text_message_spend_limit_override"><CopyableCode code="delete_text_message_spend_limit_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the EnforcedLimit to equal the MaxLimit, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see Quotas in the End User Messaging SMS User Guide.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="set_text_message_spend_limit_override"
    values={[
        { label: 'set_text_message_spend_limit_override', value: 'set_text_message_spend_limit_override' }
    ]}
>
<TabItem value="set_text_message_spend_limit_override">

Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the MaxLimit, which is set by Amazon Web Services.

```sql
UPDATE aws.pinpoint_sms_voice_v2.text_message_spend_limit_overrides
SET 
MonthlyLimit = {{ MonthlyLimit }}
WHERE 
region = '{{ region }}' --required
AND MonthlyLimit = '{{ MonthlyLimit }}' --required
RETURNING
monthly_limit;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_text_message_spend_limit_override"
    values={[
        { label: 'delete_text_message_spend_limit_override', value: 'delete_text_message_spend_limit_override' }
    ]}
>
<TabItem value="delete_text_message_spend_limit_override">

Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the EnforcedLimit to equal the MaxLimit, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see Quotas in the End User Messaging SMS User Guide.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.text_message_spend_limit_overrides
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
