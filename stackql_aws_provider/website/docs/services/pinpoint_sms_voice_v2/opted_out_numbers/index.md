--- 
title: opted_out_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - opted_out_numbers
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

Creates, updates, deletes, gets or lists an <code>opted_out_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="opted_out_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.opted_out_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_opted_out_numbers"
    values={[
        { label: 'describe_opted_out_numbers', value: 'describe_opted_out_numbers' }
    ]}
>
<TabItem value="describe_opted_out_numbers">

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
    <td><CopyableCode code="end_user_opted_out" /></td>
    <td><code>boolean</code></td>
    <td>This is set to true if it was the end recipient that opted out.</td>
</tr>
<tr>
    <td><CopyableCode code="opted_out_number" /></td>
    <td><code>string</code></td>
    <td>The phone number that is opted out. (pattern: &lt;code&gt;\+?&#91;1-9&#93;&#91;0-9&#93;&#123;1,18&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="opted_out_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the op tout occurred, in UNIX epoch time format.</td>
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
    <td><a href="#describe_opted_out_numbers"><CopyableCode code="describe_opted_out_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list. If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list. If you specify an opted out number that isn't valid, an exception is returned.</td>
</tr>
<tr>
    <td><a href="#put_opted_out_number"><CopyableCode code="put_opted_out_number" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OptOutListName"><code>OptOutListName</code></a>, <a href="#parameter-OptedOutNumber"><code>OptedOutNumber</code></a></td>
    <td></td>
    <td>Creates an opted out destination phone number in the opt-out list. If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an error is returned.</td>
</tr>
<tr>
    <td><a href="#delete_opted_out_number"><CopyableCode code="delete_opted_out_number" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing opted out destination phone number from the specified opt-out list. Each destination phone number can only be deleted once every 30 days. If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an error is returned.</td>
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
    defaultValue="describe_opted_out_numbers"
    values={[
        { label: 'describe_opted_out_numbers', value: 'describe_opted_out_numbers' }
    ]}
>
<TabItem value="describe_opted_out_numbers">

Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list. If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list. If you specify an opted out number that isn't valid, an exception is returned.

```sql
SELECT
end_user_opted_out,
opted_out_number,
opted_out_timestamp
FROM aws.pinpoint_sms_voice_v2.opted_out_numbers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_opted_out_number"
    values={[
        { label: 'put_opted_out_number', value: 'put_opted_out_number' }
    ]}
>
<TabItem value="put_opted_out_number">

Creates an opted out destination phone number in the opt-out list. If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an error is returned.

```sql
REPLACE aws.pinpoint_sms_voice_v2.opted_out_numbers
SET 
OptOutListName = '{{ OptOutListName }}',
OptedOutNumber = '{{ OptedOutNumber }}'
WHERE 
region = '{{ region }}' --required
AND OptOutListName = '{{ OptOutListName }}' --required
AND OptedOutNumber = '{{ OptedOutNumber }}' --required
RETURNING
end_user_opted_out,
opt_out_list_arn,
opt_out_list_name,
opted_out_number,
opted_out_timestamp;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_opted_out_number"
    values={[
        { label: 'delete_opted_out_number', value: 'delete_opted_out_number' }
    ]}
>
<TabItem value="delete_opted_out_number">

Deletes an existing opted out destination phone number from the specified opt-out list. Each destination phone number can only be deleted once every 30 days. If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an error is returned.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.opted_out_numbers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
